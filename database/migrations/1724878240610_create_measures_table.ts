import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'measures'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id')
      table.string('measure_type')
      table.boolean('has_confirmed')
      table.string('image_url')
      table.dateTime('measure_datetime')
      table.string('customer_code')
      table.integer('measure_value')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
