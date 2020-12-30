import * as THREE from 'three'
import React, { Suspense, useMemo } from 'react'
import { Canvas, useLoader, useUpdate } from 'react-three-fiber'
import { Physics, useBox } from 'use-cannon'
import Floor from './Floor'
import DefaultCamera from './Camera'
import Loading from './Loading'
import Text from './Text'
import {OrbitControls} from 'drei'





export default function Stage() {

  const ambientColor = '#d67a0c';


  return (
    <div className="stage">
      <Suspense fallback={<Loading/>}>
        <Canvas shadowMap>
          <ambientLight intensity={0.3}/>
          {/*<fog attach="fog" args={[ambientColor, 0, 25]} />*/}
            <spotLight intensity={1} position={[30, 30, 70]} angle={0.1} penumbra={1} castShadow />
            <Physics>
              <Text size={3} color="black" vAlign="top"/>
              <Floor position={[0,0,0]}/>
            </Physics>
          <OrbitControls/>
            <DefaultCamera/>
        </Canvas>
      </Suspense>
    </div>
  )
}
