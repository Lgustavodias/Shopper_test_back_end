import Measure from '#models/measure'
import MeasureDataCreateDto from '../dtos/measure_data_create_dto.js'

export default class MeasureRepository {
  async create(data: MeasureDataCreateDto): Promise<Measure> {
    return await Measure.create(data)
  }
}
