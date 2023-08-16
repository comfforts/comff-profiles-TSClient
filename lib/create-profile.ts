import {
  CreateProfileRequest,
  type ProfileResponse
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import { type Profile, type UserProfileResponse, mapProfileResponse } from './index'

export async function createProfile (u: Profile): Promise<UserProfileResponse> {
  return await new Promise<UserProfileResponse>((resolve, reject) => {
    const cpReq = new CreateProfileRequest()
    cpReq.setOrg(u.org)
    cpReq.setName(u.name)
    cpReq.setEmail(u.email)
    cpReq.setRequestedBy(u.email)
    cpReq.setRolesList(u.roles !== undefined ? u.roles : [])

    try {
      profileClient.createProfile(cpReq, (err, res: ProfileResponse) => {
        if (err != null) {
          console.error('createProfile() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const user = res.getUser()
          if (user != null) {
            resolve(mapProfileResponse(user))
          } else {
            const err = new Error('error creating profile')
            console.error('createProfile() - error creating profile, %o', {
              err
            })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('createProfile() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
