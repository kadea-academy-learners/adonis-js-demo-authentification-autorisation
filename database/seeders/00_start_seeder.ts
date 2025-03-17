import Roles from '../../app/enums/roles.js'
import Role from '#models/role'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // 1. Create Roles first
    await Role.firstOrCreate(
      { id: Roles.USER },
      {
        id: Roles.USER,
        roleName: 'User',
      }
    )

    await Role.firstOrCreate(
      { id: Roles.ADMIN },
      {
        id: Roles.ADMIN,
        roleName: 'Admin',
      }
    )

    await Role.firstOrCreate(
      { id: Roles.SUPER_ADMIN },
      {
        id: Roles.SUPER_ADMIN,
        roleName: 'Super Admin',
      }
    )

    // 2.4. Create initial superadmin
    await User.create({
      fullName: 'Account',
      email: process.env.SUPER_ADMIN_EMAIL,
      password: '0123456789',
      roleId: Roles.SUPER_ADMIN,
    })
  }
}
