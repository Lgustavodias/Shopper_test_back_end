import Measure from '#models/measure'
import { DateTime } from 'luxon'
import MeasureDataCreateDto from '../dtos/measure_data_create_dto.js'
import MeasureDataValidationDto from '../dtos/measure_data_validation_dto.js'

export default class MeasureRepository {
  async create(data: MeasureDataCreateDto): Promise<any> {
    return await Measure.create(data)
  }

  async validateMeasure(data: MeasureDataValidationDto): Promise<any> {
    const startOfMonth = DateTime.now().startOf('month').toSQLDate() // Início do mês atual
    const endOfMonth = DateTime.now().endOf('month').toSQLDate() // Fim do mês atual

    const validationCustomer = await Measure.query()
      .where('customer_code', data.customer_code)
      .andWhere('measure_type', data.measure_type)
      .andWhereBetween('measure_datetime', [startOfMonth, endOfMonth]) // Verifica se está dentro do intervalo do mês atual
      .first() // Retorna o primeiro resultado encontrado
    if (validationCustomer) {
      return 'Leitura do mês já realizada'
    }
  }
}
