import { inject } from '@adonisjs/core'
import User from '#models/user'
import ISignInResponse from '../../utils/interface/auth/sign_in_response.js'
import getAccessTokenAndId from '../../utils/functions/auth/get_access_token_and_id.js'
import { SignInDto } from '../../dtos/auth/sign_in_dto.js'

@inject()
export default class SignInUseCase {
  constructor() {}

  async run({ email, password }: SignInDto): Promise<ISignInResponse> {
    const user = await User.verifyCredentials(email, password)
    return await getAccessTokenAndId(user)
  }
}
