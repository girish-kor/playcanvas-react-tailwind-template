import { describe, it, expect } from 'vitest'
import { GameState } from './GameState.js'

describe('GameState', () => {
  it('adds score', () => {
    const state = new GameState()
    state.addScore(10)
    expect(state.score).toBe(10)
  })

  it('does not let health go below 0', () => {
    const state = new GameState()
    state.takeDamage(1000)
    expect(state.health).toBe(0)
    expect(state.isGameOver()).toBe(true)
  })
})
