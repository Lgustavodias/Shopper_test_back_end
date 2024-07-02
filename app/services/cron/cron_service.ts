import { ScheduledTask, schedule } from 'node-cron'
import { CronConfig } from '../../utils/enums.js'
import { principalCron } from './principal_cron/principal_cron.js'

export default class CronService {
  private principalCron: ScheduledTask

  constructor() {
    this.principalCron = schedule(CronConfig.EVERY_ONE_MINUTE, principalCron, { scheduled: false })
  }

  startPrincipalCron() {
    this.principalCron.start()
  }
}
