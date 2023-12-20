import { createProfile } from '../create-profile'
import { getProfile } from '../../dist/lib/get-profile'
import { deleteProfile } from '../../dist/lib/delete-profile'
import { deleteOrg } from '../../dist/lib/delete-org'
import { UserRole } from '../proto/_gen/profiles_pb'

describe('profile client', () => {
  test('profileCRUD', async () => {
    const requestedBy = 'ui-test-profile-crud@test.com'
    const name = 'ui-test-profile-crud'
    const org = 'ui-test-profile-crud'

    let resp = await createProfile({
      org,
      name,
      loc: {
        latitude: 38.244923,
        longitude: -122.626991
      },
      email: requestedBy,
      roles: [UserRole.USER, UserRole.STORE_ADMIN]
    })
    expect(resp.error).toEqual(undefined)
    expect(resp.user?.email).toEqual(requestedBy)
    expect(resp.user?.name).toEqual(name)

    resp = await getProfile(requestedBy)
    expect(resp.error).toEqual(undefined)
    expect(resp.user?.email).toEqual(requestedBy)
    expect(resp.user?.name).toEqual(name)

    const delResp = await deleteProfile(requestedBy)
    expect(delResp.error).toEqual(undefined)
    expect(delResp.ok).toEqual(true)

    const delOResp = await deleteOrg(org)
    expect(delOResp.error).toEqual(undefined)
    expect(delOResp.ok).toEqual(true)
  })

  test('profileFetch', async () => {
    const requestedBy = 'vtalwar.test@gmail.com'
    const resp = await getProfile(requestedBy)
    expect(resp.error).toEqual(undefined)

  })
})