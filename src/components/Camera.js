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
      position={[6.5, 1.5, 5]}
      rotation={[0, 1, 0]}
      far={50}
    />
    </>
  )
}

