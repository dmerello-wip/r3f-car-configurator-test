import React, {useRef}  from 'react'
import {useFrame} from 'react-three-fiber'
import {RoundedBox} from 'drei'

export default function ColorBox({index, color, position, action}) {

  const boxRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    boxRef.current.rotation.y = t + index;
  });

  return (
    <RoundedBox
      ref={boxRef}
      position={position}
      args={[0.4, 0.4, 0.4]}
      radius={0.1}
      smoothness={10}
      castShadow
      onClick={action}
    >
      <meshPhongMaterial attach="material" color={color}/>
    </RoundedBox>
  )
}

