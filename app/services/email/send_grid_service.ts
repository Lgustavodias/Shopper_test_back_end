import env from '#start/env'
import sgMail from '@sendgrid/mail'
import EmailDto from '../../dtos/email_dto.js'
import User from '#models/user'
import getValidationCodeEmailHtml from './templates/validation_code_email.js'
import { EMAIL_SENDER } from '../../utils/constants.js'

export default class SendGridService {
  async sendFakeEmail(user: User): Promise<void> {
    console.log(user.toJSON())
  }
  async sendValidationCodeEmail(user: User, code: string): Promise<void> {
    const emailDtoWithoutFrom = {
      to: user.email,
      subject: 'Test',
      text: 'Test',
      html: getValidationCodeEmailHtml(code, user.email),
    }

    await this.sendEmail(emailDtoWithoutFrom)
  }

  private async sendEmail(sendGridDtoWithoutFrom: Omit<EmailDto, 'from'>): Promise<void> {
    if (env.get('NODE_ENV') === 'development' || env.get('NODE_ENV') === 'test') {
      await console.log({ from: EMAIL_SENDER, ...sendGridDtoWithoutFrom })
    } else {
      sgMail.setApiKey(env.get('SENDGRID_API_KEY'))
      await sgMail.send({ from: EMAIL_SENDER, ...sendGridDtoWithoutFrom })
    }
  }
}
