import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async loginPage({ view }: HttpContext) {
    return view.render('pages/auth/login', {
      pageTitle: 'Login',
      pageDescription: 'Login to your account',
    })
  }

  public async login({ request, response, auth, session }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      session.flash('success', 'Login successful')
      return response.redirect().toRoute('home')
    } catch (error) {
      session.flash('notification', {
        type: 'error',
        message: error.message || 'An error occurred. Please try again.',
      })
      return response.redirect().back()
    }
  }

  public async registerPage({ view }: HttpContext) {
    return view.render('pages/auth/register', {
      pageTitle: 'Register',
      pageDescription: 'Create an account',
    })
  }

  public async register({ request, response, auth, session }: HttpContext) {
    try {
      const data = await request.validateUsing(createUserValidator)
      const user = await User.create(data)
      await auth.use('web').login(user)
      session.flash('success', 'User registered successfully')
      return response.redirect().toRoute('home')
    } catch (error) {
      session.flash('notification', {
        type: 'error',
        message: error.message || 'An error occurred. Please try again.',
      })
      return response.redirect().back()
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect().toRoute('show.login.page')
  }
}
