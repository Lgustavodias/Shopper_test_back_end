import User from '#models/user'
import db from '@adonisjs/lucid/services/db'
import { CreateUserDto } from '../dtos/user/create_user_dto.js'

export default class UserRepository {
  async create(userDto: CreateUserDto): Promise<User> {
    return await User.create(userDto)
  }
  async showByEmail(email: string): Promise<User> {
    const user = await User.query().where('email', email).firstOrFail()
    return user
  }

  async deleteAllAuthTokens(userId: string): Promise<void> {
    await db.from('api_tokens').where('user_id', userId).delete()
  }
}
