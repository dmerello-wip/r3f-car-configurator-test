import React, {useRef}  from 'react'
import {useFrame} from 'react-three-fiber'

export default function ColorBox({index, color, position, action}) {

  const boxRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    boxRef.current.rotation.y = t + index;
  });

  return (
    <mesh
      ref={boxRef}
      position={position}
      castShadow
      onClick={action}>
      <dodecahedronBufferGeometry args={[0.2, 0]} />
      <meshPhongMaterial attach="material" color={color}/>
    </mesh>
  )
}

