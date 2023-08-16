import {
  DeleteOrgRequest,
  type DeleteResponse,
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import { type OkResponse } from '@hankgalt/comff-geo-tsclient/lib'

export const deleteOrg = async (name: string): Promise<OkResponse> => {
  return await new Promise<OkResponse>((resolve, reject) => {
    const pReq = new DeleteOrgRequest()
    pReq.setName(name)

    try {
      profileClient.deleteOrg(pReq, (err, res: DeleteResponse) => {
        if (err != null) {
          console.error('deleteOrg() - request error, %o', { err, name })
          resolve({ ok: false, error: err })
        } else {
          const ok = res.getOk()
          if (ok) {
            resolve({ ok })
          } else {
            const err = new Error(`error deleting org`)
            console.error('deleteOrg() - error deleting org: ', {
              err,
              name
            })
            resolve({ ok: false, error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('deleteOrg() - system error, %o', { err, name })
      resolve({ ok: false, error: err as Error })
    }
  })
}
