import Measure from '#models/measure'
import MeasureDataCreateDto from '../dtos/measure_data_create_dto.js'
import MeasureDataValidationDto from '../dtos/measure_data_validation_dto.js'

export default class MeasureRepository {
  async create(data: MeasureDataCreateDto): Promise<Measure> {
    return await Measure.create(data)
  }

  async validateMeasure(data: MeasureDataValidationDto): Promise<void> {
    const month = data.measure_datetime.getMonth() + 1 // JavaScript months are 0-based
    const year = data.measure_datetime.getFullYear()

    const validationCustomer = await Measure.query()
      .where('customer_code', data.customer_code)
      .andWhere('measure_type', data.measure_type)
      .andWhereRaw(
        'EXTRACT(MONTH FROM measure_datetime) = ? AND EXTRACT(YEAR FROM measure_datetime) = ?',
        [month, year]
      )
    if (validationCustomer) {
      throw new Error('já existe')
    }
  }
}
