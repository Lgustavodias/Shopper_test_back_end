export default interface SignInResponse {
  token: {
    token?: string
    type: string
  }
  id: string
}
