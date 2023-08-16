import type * as grpc from '@grpc/grpc-js'
import * as fs from 'fs'
import * as path from 'path'
import { ProfilesClient } from './proto/_gen/profiles_grpc_pb'
import { getCredentials, commonInterceptor } from './utils'

export function getChannelCredentials (): grpc.ChannelCredentials {
  const rootCert = fs.readFileSync(
    path.resolve(`${process.env.CERTS_PATH ?? ''}/ca.pem`)
  )
  const clientCert = fs.readFileSync(
    path.resolve(`${process.env.CERTS_PATH ?? ''}/profiles-client.pem`)
  )
  const clientKey = fs.readFileSync(
    path.resolve(`${process.env.CERTS_PATH ?? ''}/profiles-client-key.pem`)
  )

  return getCredentials(rootCert, clientKey, clientCert)
}

console.log('Profile service host: ', process.env.GRPC_PROFILES)
const profileClient = new ProfilesClient(
  process.env.GRPC_PROFILES ?? '',
  getChannelCredentials(),
  { interceptors: [commonInterceptor] }
)

export default profileClient
