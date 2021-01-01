import React, {useRef} from 'react'
// import {OrbitControls, PerspectiveCamera} from 'drei'
import {PerspectiveCamera} from 'drei'

export default function DefaultCamera(props) {

  const ref = useRef();

  return (
    <>
    {/*<OrbitControls/>*/}
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={[4, 1, 8.5]}
      rotation={[0, 0.65, 0]}
      far={60}
    />
    </>
  )
}

