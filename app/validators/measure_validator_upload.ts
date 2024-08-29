import vine from '@vinejs/vine'

export const measureValidatorUpload = vine.compile(
  vine.object({
    image: vine.string(),
    customer_code: vine.string(),
    measure_datetime: vine.date({
      formats: ['YYYY-MM-DD HH:mm:ss'],
    }),
    measure_type: vine.enum(['WATER', 'GAS']),
  })
)
