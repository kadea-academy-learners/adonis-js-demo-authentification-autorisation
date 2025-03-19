/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const FrontOfficesController = () => import('#controllers/front_offices_controller')
const UsersController = () => import('#controllers/users_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [FrontOfficesController, 'showHomePage']).as('show.home.page')
router.get('/about', [FrontOfficesController, 'showAboutPage']).as('show.about.page')
router.get('/contact', [FrontOfficesController, 'showContactPage']).as('show.contact.page')
router.get('/services', [FrontOfficesController, 'showServicesPage']).as('show.services.page')
router.get('/blog', [FrontOfficesController, 'showBlogPage']).as('show.blog.page')

router.get('/login', [AuthController, 'showLoginPage']).as('show.login.page')
router.post('/login', [AuthController, 'login']).as('login')
router.get('/register', [AuthController, 'showRegisterPage']).as('show.register.page')
router.post('/register', [AuthController, 'register']).as('register')
router.get('/logout', [AuthController, 'logout']).as('logout')

router
  .group(() => {
    router.get('/profil', [UsersController, 'showUserProfilePage']).as('show.user.profile.page')
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('/show/all/user', [UsersController, 'showAllUsersPage']).as('show.all.users.page')
    router.get('/create/user', [UsersController, 'showCreateUserPage']).as('show.create.user.page')
    router.post('/store/user', [UsersController, 'storeUser']).as('store.user')
    router.get('/edit/user/:id', [UsersController, 'showEditUserPage']).as('show.edit.user.page')
    router.post('/update/user/:id', [UsersController, 'updateUser']).as('update.user')
    router.get('/delete/user/:id', [UsersController, 'deleteUser']).as('delete.user')
  })
  .prefix('/admin')
  .use(middleware.auth())
