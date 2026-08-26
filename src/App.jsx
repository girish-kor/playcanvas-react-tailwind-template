import { useRef, useState } from 'react'
import Scene from '@/scene/Scene.jsx'
import Hud from '@/ui/Hud.jsx'
import { GameState } from '@/game/GameState.js'

export default function App() {
  const gameStateRef = useRef(new GameState())
  const [score, setScore] = useState(0)
  const [health] = useState(100)

  const addScore = (points) => {
    gameStateRef.current.addScore(points)
    setScore(gameStateRef.current.score)
  }

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Scene onScore={addScore} />
      <Hud score={score} health={health} />
    </div>
  )
}
