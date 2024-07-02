import { Server } from 'socket.io'
import server from '@adonisjs/core/services/server'

export class Ws {
  io!: Server
  private booted = false

  boot() {
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) {
      return
    }

    this.booted = true
    this.io = new Server(server.getNodeServer()!)
  }
}

export default new Ws()
