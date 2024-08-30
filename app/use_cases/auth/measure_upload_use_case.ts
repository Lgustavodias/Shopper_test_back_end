import { inject } from '@adonisjs/core'
import MeasureDataCreateDto from '../../dtos/measure_data_create_dto.js'
import MeasureRepository from '../../repositories/measure_repository.js'

@inject()
export default class MeasureUploadUseCase {
  constructor(protected readonly measureRepository: MeasureRepository) {}

  async run(data: MeasureDataCreateDto, image: string): Promise<any> {
    console.log(image)
    const measure = await this.measureRepository.create(data)
    return measure
  }
}
