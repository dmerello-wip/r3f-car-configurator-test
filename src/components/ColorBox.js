import React, {useRef, useState, useEffect}  from 'react'
import {useFrame} from 'react-three-fiber'

export default function ColorBox({index, color, position, action}) {

  const boxRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    boxRef.current.rotation.y = t + index;
  });

  useEffect(()=>{
    let cursor =  (hovered) ? 'pointer' : 'inherit';
    document.body.style.cursor = cursor;
  }, [hovered]);
  return (
    <mesh
      ref={boxRef}
      position={position}
      castShadow
      onClick={action}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={(!hovered) ? [1,1,1] : [1.2,1.2,1.2]}
    >
      <dodecahedronBufferGeometry args={[0.2, 0]} />
      <meshPhongMaterial attach="material" color={color}/>
    </mesh>
  )
}

