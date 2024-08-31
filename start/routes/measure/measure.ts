import router from '@adonisjs/core/services/router'

const MeasureController = () => import('#controllers/measure/measure_controller')

router
  .group(() => {
    router.post('upload', [MeasureController, 'upload'])
    router.patch('confirm', [MeasureController, 'confirm'])
    router.get('customerCode/:customerCode/list', [MeasureController, 'list'])
  })
  .prefix('/development')
