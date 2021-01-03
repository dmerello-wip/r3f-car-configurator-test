import React, {Suspense, useState} from 'react'
import {Canvas} from 'react-three-fiber'
import {Physics} from 'use-cannon'
import Floor from './Floor'
import DefaultCamera from './Camera'
import Loading from './Loading'
import TextMesh from './Text'
import Porsche from './Porsche'
import ColorBox from './ColorBox'
export default function Stage() {

  const bgcolor = 'black';
  const colors = ['#000000', '#9b000d', '#00458d', '#ffffff', '#ff7300'];
  const [color, setColor] = useState(colors[0]);

  const getColorBoxes = () => {
    return colors.map((el, i) => {
      return (
        <ColorBox
          key={`colorbox-${i}`}
          index={i}
          color={colors[i]}
          position={[3.5-i/1.5, 1, 4]}
          action={()=>{
            handleColorBoxHit(colors[i]);
          }}
        />
      )
    });
  };

  const handleColorBoxHit = (selectedColor)=>{
    setColor(selectedColor);
  };

  return (
    <div className="stage">
      <Suspense fallback={<Loading/>}>
        <Canvas shadowMap>
          <ambientLight intensity={0.4}/>
          <fog attach="fog" args={[bgcolor, 2, 15]}/>
          <directionalLight intensity={1} position={[0, 2.5, -5]} angle={0} castShadow/>
          <spotLight intensity={2} position={[-5, 1.8, 5]} angle={2} penumbra={1} castShadow/>
          <Physics>
            <TextMesh size={2.6} height={0.1} color={'white'} vAlign="top">porsche</TextMesh>
            <Porsche position={[1, 1.55, 5]} rotation={[0, Math.PI / 6, 0]} color={color}/>
            {getColorBoxes()}
            <Floor position={[0, 0, 0]} color={bgcolor}/>
          </Physics>
          <DefaultCamera/>
        </Canvas>
      </Suspense>
    </div>
  )
}
