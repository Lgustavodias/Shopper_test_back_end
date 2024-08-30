import { inject } from '@adonisjs/core'
import MeasureDataCreateDto from '../../dtos/measure_data_create_dto.js'
import MeasureRepository from '../../repositories/measure_repository.js'
import GeminiService from '#services/gemini/gemini_service'

@inject()
export default class MeasureUploadUseCase {
  constructor(
    protected readonly measureRepository: MeasureRepository,
    protected readonly geminiService: GeminiService
  ) {}

  async run(data: MeasureDataCreateDto, image: string): Promise<any> {
    const imgUrl = await this.geminiService.uploadAndGenerateContent(image)
    console.log(imgUrl)
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
