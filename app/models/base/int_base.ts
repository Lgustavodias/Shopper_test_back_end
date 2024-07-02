import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class IntBase extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
}
