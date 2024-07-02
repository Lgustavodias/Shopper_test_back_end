import router from '@adonisjs/core/services/router'

const AuthController = () => import('#controllers/auth/auth_controller')

router
  .group(() => {
    router.post('auth/signUp', [AuthController, 'signUp'])
    router.post('auth/signIn', [AuthController, 'signIn'])
  })
  .prefix('/development')
