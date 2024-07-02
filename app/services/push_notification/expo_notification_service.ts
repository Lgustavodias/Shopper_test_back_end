import { Expo, ExpoPushErrorTicket, ExpoPushTicket } from 'expo-server-sdk'
import ExpoNotificationDto from '../../dtos/expo_notification_dto.js'

export default class ExpoNotificationService {
  async sendNotification(messages: ExpoNotificationDto[]): Promise<void> {
    const validatedMessages = messages.filter((message) => Expo.isExpoPushToken(message.to))
    const expo = new Expo()

    const chunks = expo.chunkPushNotifications(validatedMessages)
    let tickets: ExpoPushTicket[] = []
    ;(async () => {
      for (let chunk of chunks) {
        try {
          let ticketChunk = await expo.sendPushNotificationsAsync(chunk)
          tickets.push(...ticketChunk)
        } catch (error) {
          console.error(error)
        }
      }
    })().then(() => {
      tickets.forEach((ticket) => {
        if (this.isExpoPushErrorTicket(ticket)) {
          console.log('ticket error message', ticket.message)
          console.log('ticket error details', ticket.details)
        }
      })
    })
  }

  private isExpoPushErrorTicket(ticket: ExpoPushTicket): ticket is ExpoPushErrorTicket {
    return (ticket as ExpoPushErrorTicket).message !== undefined
  }
}
