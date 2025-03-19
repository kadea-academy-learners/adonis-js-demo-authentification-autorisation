import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  public async showUserProfilePage({ response, view, auth }: HttpContext) {
    try {
      const user = await User.find(auth.user?.id)
      return view.render('pages/backoffice/user/user_profil', {
        pageTitle: `${user?.fullName} Profil`,
        pageDescription: 'Blogoss the best trip blog in kinshasa',
        user: user,
      })
    } catch (error) {
      return response.redirect().toRoute('show.home.page')
    }
  }

  public async showAllUsersPage({ view, bouncer, response }: HttpContext) {
    try {
      await bouncer.authorize('isSuperAdmin')
      const users = await User.query().preload('role')
      return view.render('pages/backoffice/admin/show_all_user', {
        pageTitle: 'Show All Users',
        pageDescription: 'Blogoss the best trip blog in kinshasa',
        users: users,
      })
    } catch (error) {
      return response.redirect().toRoute('show.home.page')
    }
  }
  public async showCreateUserPage({ response, view, bouncer }: HttpContext) {
    try {
      await bouncer.authorize('isSuperAdmin')
      return view.render('pages/backoffice/admin/create_user', {
        pageTitle: 'Sign Up',
        pageDescription: 'Blogoss the best trip blog in kinshasa',
      })
    } catch (error) {
      return response.redirect().toRoute('show.home.page')
    }
  }
  public async storeUser({ request, response, bouncer }: HttpContext) {
    await bouncer.authorize('isSuperAdmin')
    const { fullName, email } = request.all()
    try {
      await User.create({ fullName: fullName, email: email })
      return response.redirect().toRoute('show.all.users.page')
    } catch (error) {
      return response.redirect().toRoute('show.create.user.page')
    }
  }

  public async showEditUserPage({ params, view, bouncer, response }: HttpContext) {
    try {
      await bouncer.authorize('isSuperAdmin')
      const { id } = params
      const user = await User.findOrFail(id)
      return view.render('pages/backoffice/admin/edit_user', {
        pageTitle: 'Edit User',
        pageDescription: 'Blogoss the best trip blog in kinshasa',
        user: user,
      })
    } catch (error) {
      return response.redirect().toRoute('show.all.users.page')
    }
  }

  public async updateUser({ params, request, response, bouncer }: HttpContext) {
    await bouncer.authorize('isSuperAdmin')
    const { id } = params
    const { fullName, email } = request.all()
    try {
      const user = await User.findOrFail(id)
      user.fullName = fullName
      user.email = email
      await user.save()
      return response.redirect().toRoute('show.all.users.page')
    } catch (error) {
      return response.redirect().toRoute('show.all.users.page')
    }
  }

  public async deleteUser({ params, response, bouncer }: HttpContext) {
    await bouncer.authorize('isSuperAdmin')
    const { id } = params
    try {
      const user = await User.findOrFail(id)
      await user.delete()
      return response.redirect().toRoute('show.all.users.page')
    } catch (error) {
      return response.redirect().toRoute('show.all.users.page')
    }
  }
}
