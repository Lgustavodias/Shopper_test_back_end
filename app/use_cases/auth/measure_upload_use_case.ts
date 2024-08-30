import { inject } from '@adonisjs/core'
import MeasureDataCreateDto from '../../dtos/measure_data_create_dto.js'
import MeasureRepository from '../../repositories/measure_repository.js'

@inject()
export default class MeasureUploadUseCase {
  constructor(protected readonly measureRepository: MeasureRepository) {}

  async run(data: MeasureDataCreateDto, image: string): Promise<any> {
    console.log(image)
    const measureDataValidationDto = {
      customer_code: data.customer_code,
      measure_datetime: data.measure_datetime,
      measure_type: data.measure_type,
    }
    await this.measureRepository.validateMeasure(measureDataValidationDto)
    const measure = await this.measureRepository.create(data)
    return measure
  }
}
