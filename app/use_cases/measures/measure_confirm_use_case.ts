import { inject } from '@adonisjs/core'
import MeasureRepository from '../../repositories/measure_repository.js'
import GeminiService from '#services/gemini/gemini_service'
import MeasureConfirmDto from '../../dtos/measure_confirm_dto.js'

@inject()
export default class MeasureConfirmUseCase {
  constructor(
    protected readonly measureRepository: MeasureRepository,
    protected readonly geminiService: GeminiService
  ) {}

  async run(data: MeasureConfirmDto): Promise<any> {
    const response = await this.measureRepository.confirm(data)
    return response
  }
}
