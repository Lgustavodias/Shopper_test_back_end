import { DateTime } from 'luxon'

export async function principalCron() {
  //todo é melhor emitir um evento (ou mais de um) por aqui e tratar num listener, do que colocar todo o código aqui
  const now = DateTime.now()
  console.log(now.toISO())
}
