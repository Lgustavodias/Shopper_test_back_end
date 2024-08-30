import { defineConfig } from '@adonisjs/auth'
import { Authenticators, GuardFactory, InferAuthEvents } from '@adonisjs/auth/types'

// Configuração do auth sem guards
const authConfig = defineConfig({
  default: 'api', // Defina um valor padrão apropriado, como 'api' ou outro valor aceitável
  guards: {} as Record<string, GuardFactory>, // Usando um Record vazio como um tipo vazio para guards
})

export default authConfig

/**
 * Inferindo tipos dos guards de autenticação configurados.
 */
declare module '@adonisjs/auth/types' {
  interface Authenticators extends Record<string, GuardFactory> {}
}

declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}
