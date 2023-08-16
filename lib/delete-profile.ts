import {
  DeleteProfileRequest,
  type DeleteResponse,
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import { type OkResponse } from '@hankgalt/comff-geo-tsclient/lib'

export async function deleteProfile (email: string): Promise<OkResponse> {
  return await new Promise<OkResponse>((resolve, reject) => {
    const pReq = new DeleteProfileRequest()
    pReq.setEmail(email)

    try {
      profileClient.deleteProfile(pReq, (err, res: DeleteResponse) => {
        if (err != null) {
          console.error('deleteProfile() - request error, %o', { err, email })
          resolve({ ok: false, error: err })
        } else {
          const ok = res.getOk()
          if (ok) {
            resolve({ ok })
          } else {
            const err = new Error(`error deleting profile`)
            console.error('deleteProfile() - error deleting profile: ', {
              err,
              email
            })
            resolve({ ok: false, error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('deleteProfile() - system error, %o', { err, email })
      resolve({ ok: false, error: err as Error })
    }
  })
}
