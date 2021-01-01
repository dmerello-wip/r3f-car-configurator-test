import React, { Suspense} from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import Floor from './Floor'
import DefaultCamera from './Camera'
import Loading from './Loading'
import TextMesh from './Text'
import Porsche from './Porsche'

export default function Stage() {

  const bgcolor = 'black';
  const color = 'red';

  return (
    <div className="stage">
      <Suspense fallback={<Loading/>}>
        <Canvas shadowMap>
          <ambientLight intensity={0.4}/>
          <fog attach="fog" args={[bgcolor, 2, 15]} />
          <directionalLight intensity={1} position={[0, 2.5, -5]} angle={0} castShadow />
          <spotLight intensity={2} position={[-5, 1.8, 5]} angle={2} penumbra={1} castShadow />
          <Physics>
            <TextMesh size={2.6} height={0.1} color={'white'} vAlign="top">BELIN</TextMesh>
            <Porsche position={[1,1.55,5]} rotation={[0,Math.PI/6, 0]} color={color}/>
            <Floor position={[0,0,0]} color={bgcolor}/>
          </Physics>
          <DefaultCamera/>
        </Canvas>
      </Suspense>
    </div>
  )
}
