import React, {useRef} from 'react'
import {PerspectiveCamera} from 'drei'

export default function DefaultCamera() {

  const ref = useRef();

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={[4, 1, 8.5]}
      rotation={[0, 0.65, 0]}
      far={60}
    />
  )
}

