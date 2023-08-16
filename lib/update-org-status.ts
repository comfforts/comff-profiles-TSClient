import {
  OrgStatusUpdate,
  type OrgResponse
} from './proto/_gen/profiles_pb'
import profileClient from './client'
import {
  type OrganizationResponse,
  type OrgUpdate,
  mapOrgResponse,
} from './index'

export const updateOrgStatus = async (params: OrgUpdate): Promise<OrganizationResponse> => {
  return await new Promise<OrganizationResponse>((resolve, reject) => {
    const upReq = new OrgStatusUpdate()
    upReq.setName(params.name)
    upReq.setStatus(params.status)

    try {
      profileClient.updateOrgStatus(upReq, (err, res: OrgResponse) => {
        if (err != null) {
          console.error('updateOrgStatus() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const org = res.getOrg()
          if (org != null) {
            resolve(mapOrgResponse(org))
          } else {
            const err = new Error('error updating org')
            console.error('updateOrgStatus() - error updating org, %o', {
              err
            })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('updateOrgStatus() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
