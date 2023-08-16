import { RolesRequest, type RolesResponse } from './proto/_gen/profiles_pb'
import profileClient from './client'
import { type ProfileRolesResponse } from './index'

export async function getRoles (): Promise<ProfileRolesResponse> {
  return await new Promise<ProfileRolesResponse>((resolve, reject) => {
    const rolesReq = new RolesRequest()
    try {
      profileClient.getRoles(rolesReq, (err, res: RolesResponse) => {
        if (err != null) {
          console.error('getRoles() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const roles = res.getRolesList()
          if (roles.length > 0) {
            resolve( { roles })
          } else {
            const err = new Error('no role found')
            console.error('getRoles() - no role found, %o', { err })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('getRoles() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
