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
    const measureDataValidationDto = {
      customer_code: data.customer_code,
      measure_datetime: data.measure_datetime,
      measure_type: data.measure_type,
    }
    const validate = await this.measureRepository.validateMeasure(measureDataValidationDto)
    if (validate) {
      return 'error'
    }
    const GeminiReturn = await this.geminiService.uploadAndGenerateContent(image)
    const numberMatch = GeminiReturn.result.match(/\d+/)?.[0] ?? 'No match found'
    data.measure_value = numberMatch
    data.imageUrl = GeminiReturn.imgUrl
    const measure = await this.measureRepository.create(data)
    return measure
  }
}
