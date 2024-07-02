import User from '#models/user'
import ISignInResponse from '../../interface/auth/sign_in_response.js'

export default async function getAccessTokenAndId(user: User): Promise<ISignInResponse> {
  const fullToken = await User.authTokens.create(user)
  const { token, type } = fullToken.toJSON()
  return { token: { token, type }, id: user.id }
}
