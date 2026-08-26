import { Script } from 'playcanvas'

export class Rotator extends Script {
  static scriptName = 'rotator'

  initialize() {
    this.speed = this.speed ?? 30
  }

  update(dt) {
    this.entity.rotate(0, this.speed * dt, 0)
  }
}
