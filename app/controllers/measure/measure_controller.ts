import { measureValidatorUpload } from '#validators/measure_validator_upload'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import MeasureUploadUseCase from '../../use_cases/auth/measure_upload_use_case.js'

@inject()
export default class MeasureController {
  constructor(protected readonly measureUploadeUseCase: MeasureUploadUseCase) {}

  async upload({ request, response }: HttpContext) {
    const data = request.all()
    const { image, ...measureData } = await measureValidatorUpload.validate(data)
    const measureUpload = await this.measureUploadeUseCase.run(measureData, image)
    if (measureUpload === 'error') {
      return response.conflict('leitura do mês já realizada')
    }
    const dataReturn = {
      image_url: measureUpload.image_url,
      measure_value: measureUpload.measure_value,
      measure_uuid: measureUpload.id,
    }
    return response.ok(dataReturn)
  }
}
