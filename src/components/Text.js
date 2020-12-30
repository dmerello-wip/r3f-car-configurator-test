import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader, useUpdate } from 'react-three-fiber'


export default  Text = ({ children, vAlign = 'center', hAlign = 'center', size = 2,  ...props }) => {
  const font = useLoader(THREE.FontLoader, '/fonts/Montserrat_Bold.json')

  const config = useMemo(() => ({ font, size: size, height: 1 }), [font]);

  const mesh = useUpdate(
    (self) => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  );

  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <textGeometry attach="geometry" args={['ciao ciao', config]} />
      <meshStandardMaterial attach="material" color="#d67a0c" />
    </mesh>
  )
}


