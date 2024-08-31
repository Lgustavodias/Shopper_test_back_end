import vine from '@vinejs/vine'

export const measureValidatorConfirm = vine.compile(
  vine.object({
    measure_uuid: vine.string(),
    confirmed_value: vine.number(),
  })
)
