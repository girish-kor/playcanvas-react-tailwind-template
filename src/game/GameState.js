export class GameState {
  constructor() {
    this.score = 0
    this.health = 100
  }

  addScore(points) {
    this.score += points
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount)
  }

  isGameOver() {
    return this.health <= 0
  }
}
