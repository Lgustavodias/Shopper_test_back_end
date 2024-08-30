import vine from '@vinejs/vine'

export const measureValidatorUpload = vine.compile(
  vine.object({
    image: vine
      .string()
      .regex(
        /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}={2})$/
      ),
    customer_code: vine.string(),
    measure_datetime: vine.date({
      formats: ['YYYY-MM-DD HH:mm:ss'],
    }),
    measure_type: vine.enum(['WATER', 'GAS']),
  })
)
