import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .unique(async (db, value) => {
        const result = await db.from('users').where('email', value)
        return result.length === 0
      }),
    password: vine.string().trim().minLength(6),
  })
)

export const signInValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .exists(async (db, value) => {
        const result = await db.from('users').where('email', value)
        return result.length > 0
      }),
    password: vine.string().trim().minLength(6),
  })
)
