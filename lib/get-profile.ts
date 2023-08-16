import {
  GetProfileRequest,
  type ProfileResponse
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import { type UserProfileResponse, mapProfileResponse } from './index'

export async function getProfile (email: string): Promise<UserProfileResponse> {
  return await new Promise<UserProfileResponse>((resolve, reject) => {
    const pReq = new GetProfileRequest()
    pReq.setEmail(email)

    try {
      profileClient.getProfile(pReq, (err, res: ProfileResponse) => {
        if (err != null) {
          console.error('getProfile() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const user = res.getUser()
          if (user != null) {
            resolve(mapProfileResponse(user))
          } else {
            const err = new Error('no profile found')
            console.error('getProfile() - no profile found, %o', { err })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('getProfile() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
