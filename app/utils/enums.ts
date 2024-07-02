export enum CronConfig {
  EVERY_ONE_MINUTE = '*/1 * * * *',
}

export enum CollectionStatus {
  SCHEDULED = 'scheduled',
  READY_TO_COLLECT = 'ready_to_collect',
  COLLECTED = 'collected',
  CONCLUDED = 'concluded',
}
