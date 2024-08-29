import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'
import UuidBase from './base/uuid_base.js'

export default class Measure extends UuidBase {
  @column()
  declare measureType: string

  @column()
  declare hasConfirmed: boolean

  @column()
  declare imageUrl: string

  @column()
  declare customerCode: string

  @column()
  declare measureDatetime: DateTime

  @column()
  declare measureValue: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
