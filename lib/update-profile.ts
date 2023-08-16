import {
  UpdateProfileRequest,
  type ProfileResponse
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import {
  type Profile,
  type UserProfileResponse,
  mapProfileResponse,
} from './index'

export async function updateProfile (u: Profile): Promise<UserProfileResponse> {
  return await new Promise<UserProfileResponse>((resolve, reject) => {
    const upReq = new UpdateProfileRequest()
    upReq.setOrg(u.org)
    upReq.setEmail(u.email)
    upReq.setRequestedBy(u.email)
    upReq.setLatitude(u.loc?.latitude ?? 0)
    upReq.setLongitude(u.loc?.longitude ?? 0)
    upReq.setRolesList(u.roles != null ? u.roles : [])

    try {
      profileClient.updateProfile(upReq, (err, res: ProfileResponse) => {
        if (err != null) {
          console.error('updateProfile() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const user = res.getUser()
          if (user != null) {
            resolve(mapProfileResponse(user))
          } else {
            const err = new Error('error updating profile')
            console.error('updateProfile() - error updating profile, %o', {
              err
            })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('updateProfile() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
