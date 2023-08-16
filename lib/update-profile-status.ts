import {
  ProfileStatusUpdate,
  type ProfileResponse
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import {
  type UserProfileResponse,
  type ProfileUpdate,
  mapProfileResponse,
} from './index'

export const updateProfileStatus = async (params: ProfileUpdate): Promise<UserProfileResponse> => {
  return await new Promise<UserProfileResponse>((resolve, reject) => {
    const upReq = new ProfileStatusUpdate()
    upReq.setEmail(params.email)
    upReq.setStatus(params.status)

    try {
      profileClient.updateProfileStatus(upReq, (err, res: ProfileResponse) => {
        if (err != null) {
          console.error('updateProfileStatus() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const user = res.getUser()
          if (user != null) {
            resolve(mapProfileResponse(user))
          } else {
            const err = new Error('error updating org')
            console.error('updateProfileStatus() - error updating org, %o', {
              err
            })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('updateProfileStatus() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
