import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async showUserProfile({ view, auth }: HttpContext) {
    const user = auth.user
    return view.render('pages/backoffice/user/user_profil', {
      pageTitle: `${user?.fullName} Profil`,
      pageDescription: 'Blogoss the best trip blog in kinshasa',
      user: user,
    })
  }

  public async showAllUsers({ view, bouncer }: HttpContext) {
    await bouncer.authorize('showSuperAdmin')
    const users = await User.query().preload('role')
    return view.render('pages/backoffice/admin/show_all_user', {
      pageTitle: 'Show All Users',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
      users: users,
    })
  }
  public async createUser({ view, bouncer }: HttpContext) {
    await bouncer.authorize('showSuperAdmin')
    return view.render('pages/backoffice/admin/create_user', {
      pageTitle: 'Sign Up',
      pageDescription: 'Blogoss the best trip blog in kinshasa',
    })
  }
  public async storeUser({ request, response, bouncer }: HttpContext) {
    await bouncer.authorize('showSuperAdmin')
    const { fullName, email } = request.all()
    try {
      await User.create({ fullName: fullName, email: email })
      return response.redirect().toRoute('showAllUsers')
    } catch (error) {
      return response.badRequest({ error: error.message })
    }
  }
  public async deleteUser({ params, response, bouncer }: HttpContext) {
    await bouncer.authorize('showSuperAdmin')
    const { id } = params
    try {
      const user = await User.findOrFail(id)
      await user.delete()
      return response.redirect().toRoute('showAllUsers')
    } catch (error) {
      return response.badRequest({ error: error.message })
    }
  }
}
