import Measure from '#models/measure'
import { DateTime } from 'luxon'
import MeasureDataCreateDto from '../dtos/measure_data_create_dto.js'
import MeasureDataValidationDto from '../dtos/measure_data_validation_dto.js'
import MeasureConfirmDto from '../dtos/measure_confirm_dto.js'

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

  async confirm(data: MeasureConfirmDto): Promise<any> {
    const measure = await Measure.query().where('id', data.measure_uuid).first()
    if (measure) {
      if (measure.hasConfirmed === true) {
        return 'isConfirmed'
      } else {
        if (measure.measureValue === data.confirmed_value) {
          measure.merge({ hasConfirmed: true }).save()
          return 'confirmed'
        } else {
          return 'notValue'
        }
      }
    } else {
      return 'notExists'
    }
  }

  async index(customer_code: string): Promise<Measure[]> {
    const measure = await Measure.query().where('customer_code', customer_code)
    return measure
  }
}
