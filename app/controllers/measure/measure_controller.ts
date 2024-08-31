import { measureValidatorUpload } from '#validators/measure_validator_upload'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import MeasureUploadUseCase from '../../use_cases/measures/measure_upload_use_case.js'
import { measureValidatorConfirm } from '#validators/measure_validator_cofirm'
import MeasureConfirmUseCase from '../../use_cases/measures/measure_confirm_use_case.js'
import MeasureRepository from '../../repositories/measure_repository.js'

@inject()
export default class MeasureController {
  constructor(
    protected readonly measureUploadeUseCase: MeasureUploadUseCase,
    protected readonly measureConfirmUseCase: MeasureConfirmUseCase,
    protected readonly measureRepository: MeasureRepository
  ) {}

  async upload({ request, response }: HttpContext) {
    const data = request.all()
    const { image, ...measureData } = await measureValidatorUpload.validate(data)
    const measureUpload = await this.measureUploadeUseCase.run(measureData, image)
    if (measureUpload === 'error') {
      return response.conflict('leitura do mês já realizada')
    }
    const dataReturn = {
      image_url: measureUpload.imageUrl,
      measure_value: measureUpload.measureValue,
      measure_uuid: measureUpload.id,
    }
    console.log(measureUpload)
    return response.ok(dataReturn)
  }

  async confirm({ request, response }: HttpContext) {
    const data = request.all()
    const confirmData = await measureValidatorConfirm.validate(data)
    const dataReturn = await this.measureConfirmUseCase.run(confirmData)
    if (dataReturn === 'isConfirmed') {
      return response.conflict('leitura já confirmada')
    } else if (dataReturn === 'notExists') {
      return response.notFound('Leitura não encontrada ')
    } else if (dataReturn === 'confirmed') {
      return response.ok('sucess: true')
    } else if (dataReturn === 'notValue') {
      return response.notAcceptable('Valor inválido')
    }
  }

  async list({ params, response }: HttpContext) {
    const { customerCode } = params
    const data = await this.measureRepository.index(customerCode)
    return response.ok(data)
  }
}
