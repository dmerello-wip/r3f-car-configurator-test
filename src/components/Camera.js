import React, {useRef} from 'react'
import {PerspectiveCamera} from 'drei'

export default function DefaultCamera(props) {

  const ref = useRef();

  return (
    <>
    {/*<OrbitControls/>*/}
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={[0, 1, 20]}
      rotation={[0, 0, 0]}
      far={50}
    />
    </>
  )
}

