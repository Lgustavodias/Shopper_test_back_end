export default interface ExpoNotificationDto {
  title: string
  body: string
  sound: 'default'
  to: string
  data?: object
}
