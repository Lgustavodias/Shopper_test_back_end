import router from '@adonisjs/core/services/router'

const MeasureController = () => import('#controllers/measure/measure_controller')

router
  .group(() => {
    router.post('upload', [MeasureController, 'upload'])
  })
  .prefix('/development')
