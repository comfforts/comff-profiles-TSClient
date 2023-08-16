import profileClient from './client'

export const closeClient = (): Error | undefined => {
  try {
    profileClient.close()
  } catch (err) {
    console.error('error closing profiles client')
    return err as Error
  }
}
