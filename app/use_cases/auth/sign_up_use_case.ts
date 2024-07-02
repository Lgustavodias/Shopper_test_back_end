import { inject } from '@adonisjs/core'
import UserRepository from '../../repositories/user_repository.js'
import SendGridService from '#services/email/send_grid_service'
import { CreateUserDto } from '../../dtos/user/create_user_dto.js'
import getAccessTokenAndId from '../../utils/functions/auth/get_access_token_and_id.js'
import ISignInResponse from '../../utils/interface/auth/sign_in_response.js'

@inject()
export default class SignUpUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sendGridService: SendGridService
  ) {}

  async run(createUserDto: CreateUserDto): Promise<ISignInResponse> {
    const user = await this.userRepository.create(createUserDto)
    // email inexistente apenas pra ilustrar
    await this.sendGridService.sendFakeEmail(user)
    return await getAccessTokenAndId(user)
  }
}
