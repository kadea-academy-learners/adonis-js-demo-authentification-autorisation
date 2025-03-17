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

router.get('/', [FrontOfficesController, 'homePage']).as('home')
router.get('/about', [FrontOfficesController, 'aboutPage']).as('about')
router.get('/contact', [FrontOfficesController, 'contactPage']).as('contact')
router.get('/services', [FrontOfficesController, 'servicesPage']).as('services')
router.get('/blog', [FrontOfficesController, 'blogPage']).as('blog')

router
  .group(() => {
    router.get('/show-all-user', [UsersController, 'showAllUsers']).as('showAllUsers')
    router.get('/create-user', [UsersController, 'createUser']).as('createUser')
    router.post('/store-user', [UsersController, 'storeUser']).as('storeUser')
    router.get('/user/:id/delete', [UsersController, 'deleteUser']).as('deleteUser')
  })
  .prefix('/admin')
  .use(middleware.auth())

router
  .group(() => {
    router.get('/profil', [UsersController, 'showUserProfile']).as('showUserProfil')
  })
  .use(middleware.auth())

router.get('/login', [AuthController, 'loginPage']).as('show.login.page')
router.post('/login', [AuthController, 'login'])
router.get('/register', [AuthController, 'registerPage']).as('show.register.page')
router.post('/register', [AuthController, 'register'])
router.get('/logout', [AuthController, 'logout']).as('logout')
