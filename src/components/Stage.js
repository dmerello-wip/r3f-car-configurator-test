import React, { Suspense,useRef} from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import Floor from './Floor'
import DefaultCamera from './Camera'
import Loading from './Loading'
import TextMesh from './Text'
import Porsche from './Porsche'

export default function Stage() {

  const color = 'black';

  return (
    <div className="stage">
      <Suspense fallback={<Loading/>}>
        <Canvas shadowMap>
          <ambientLight intensity={0.4}/>
          <fog attach="fog" args={[color, 2, 15]} />
          <directionalLight intensity={8} position={[0, 2.5, -5]} angle={0} penumbra={1} castShadow />
          <Physics>
            <TextMesh size={2.6} height={0.1} color={'white'} vAlign="top">BELIN</TextMesh>
            <Porsche position={[1,1.6,5]} rotation={[0,Math.PI/6, 0]}/>
            <Floor position={[0,0,0]} color={color}/>
          </Physics>
          <DefaultCamera/>
        </Canvas>
      </Suspense>
    </div>
  )
}
