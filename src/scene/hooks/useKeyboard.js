import { useApp } from '@playcanvas/react'
import { useEffect, useRef } from 'react'

export function useKeyboard() {
  const app = useApp()
  const keysRef = useRef({})

  useEffect(() => {
    const onKeyDown = (e) => {
      keysRef.current[e.key] = true
    }
    const onKeyUp = (e) => {
      keysRef.current[e.key] = false
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [app])

  return keysRef
}
