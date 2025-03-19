/*
|--------------------------------------------------------------------------
| Bouncer abilities
|--------------------------------------------------------------------------
|
| You may export multiple abilities from this file and pre-register them
| when creating the Bouncer instance.
|
| Pre-registered policies and abilities can be referenced as a string by their
| name. Also they are must if want to perform authorization inside Edge
| templates.
|
*/

import Roles from '../../app/enums/roles.js'
import User from '#models/user'
import { Bouncer } from '@adonisjs/bouncer'

export const isUser = Bouncer.ability((user: User) => {
  return user.roleId === Roles.USER
})

export const isAdmin = Bouncer.ability((user: User) => {
  return user.roleId === Roles.ADMIN
})

export const isSuperAdmin = Bouncer.ability((user: User) => {
  return user.roleId === Roles.SUPER_ADMIN
})

export const isAdminOrSuperAdmin = Bouncer.ability((user: User) => {
  return user.roleId === Roles.ADMIN || user.roleId === Roles.SUPER_ADMIN
})
