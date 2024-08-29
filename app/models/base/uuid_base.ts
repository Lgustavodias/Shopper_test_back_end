import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export default class UuidBase extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare id: string

  @beforeCreate()
  static assignUuid(base: UuidBase): void {
    base.id = uuid()
  }
}
