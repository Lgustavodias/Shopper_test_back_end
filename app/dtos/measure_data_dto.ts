import { DateTime } from 'luxon'

export default interface MeasureDataDto {
  measureType: string
  hasConfirmed: boolean
  imageUrl: string
  customerCode: string
  measureDatetime: DateTime
  measureValue: number
  createdAt: DateTime
  updatedAt: DateTime
  id: string
}
