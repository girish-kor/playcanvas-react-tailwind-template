import { Application, Entity } from '@playcanvas/react'
import { Camera, Light, Render, RigidBody, Collision, Script } from '@playcanvas/react/components'
import { OrbitControls } from '@playcanvas/react/scripts'
import { Rotator } from './scripts/Rotator.js'

function World({ onScore }) {
  return (
    <>
      <Entity name="camera" position={[0, 2, 8]}>
        <Camera fov={45} nearClip={0.1} farClip={1000} clearColor="#1a1a2e" />
        <OrbitControls />
      </Entity>

      <Entity name="sun" rotation={[45, 30, 0]}>
        <Light type="directional" color="#ffffff" intensity={1} castShadows />
      </Entity>

      <Entity name="ground" position={[0, 0, 0]} scale={[10, 0.5, 10]}>
        <Render type="box" />
        <Collision type="box" />
        <RigidBody type="static" />
      </Entity>

      <Entity name="crate" position={[0, 5, 0]}>
        <Render type="box" />
        <Collision type="box" />
        <RigidBody type="dynamic" mass={1} />
      </Entity>

      <Entity name="coin" position={[2, 1, 0]} onClick={() => onScore?.(10)}>
        <Render type="cylinder" />
        <Script script={Rotator} speed={90} />
      </Entity>
    </>
  )
}

export default function Scene({ onScore }) {
  return (
    <Application usePhysics={true}>
      <World onScore={onScore} />
    </Application>
  )
}
