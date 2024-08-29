import { inject } from '@adonisjs/core'
import MeasureDataDto from '../../dtos/measure_data_dto.js'

@inject()
export default class MeasureUploadUseCase {
  constructor() {}

  async run(data: MeasureDataDto): Promise<any> {
    console.log(data)
    return data
  }
}
