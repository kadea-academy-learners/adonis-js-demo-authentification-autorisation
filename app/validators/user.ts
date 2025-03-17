import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(4).maxLength(256),
    email: vine.string().trim().maxLength(256).email(),
    password: vine.string().minLength(10).maxLength(256),
  })
)
