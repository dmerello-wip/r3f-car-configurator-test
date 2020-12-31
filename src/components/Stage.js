import React, { Suspense,useRef} from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import Floor from './Floor'
import DefaultCamera from './Camera'
import Loading from './Loading'
import TextMesh from './Text'

export default function Stage() {

  const color = '#fff';

  return (
    <div className="stage">
      <Suspense fallback={<Loading/>}>
        <Canvas shadowMap>
          <ambientLight intensity={0.8}/>
          <directionalLight intensity={10} position={[0, 2, -5]} angle={1} penumbra={1} castShadow />
          <Physics>
            <TextMesh size={3} height={0.1} color={color} vAlign="top">TEST</TextMesh>
            <Floor position={[0,0,0]} color={color}/>
          </Physics>
          <DefaultCamera/>

        </Canvas>
      </Suspense>
    </div>
  )
}
