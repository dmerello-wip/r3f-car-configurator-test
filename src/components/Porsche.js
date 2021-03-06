/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Alexus16 (https://sketchfab.com/Alexus16)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/porsche-911-930-turbo-1975-de1ffd344c41481892511f7fd332c136
title: Porsche 911 (930) Turbo 1975
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from 'drei'

export default function Porsche(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/3d/scene.gltf');

  useEffect(()=>{
    // set initial colors to model materials (i don't like native ones)
    materials['Material.001'].color.set(props.color);
  }, [materials, props.color]);

  return (
    <group ref={group} {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.09, -1.09, 1.81]} scale={[0.07, 0.04, 0.04]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_0.geometry} />
            <mesh castShadow material={materials['Material.007']} geometry={nodes.mesh_1.geometry} />
            <mesh castShadow material={materials['Material.013']} geometry={nodes.mesh_2.geometry} />
          </group>
          <group position={[-1.09, -1.09, 1.86]}>
            <mesh castShadow material={materials['Material.001']} geometry={nodes.mesh_3.geometry} />
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_4.geometry} />
            <mesh castShadow material={materials['Material.003']} geometry={nodes.mesh_5.geometry} />
            <mesh castShadow material={materials['Material.006']} geometry={nodes.mesh_6.geometry} />
            <mesh castShadow material={materials['Material.011']} geometry={nodes.mesh_7.geometry} />
            <mesh castShadow material={materials['Material.012']} geometry={nodes.mesh_8.geometry} />
            <mesh castShadow material={materials['Material.007']} geometry={nodes.mesh_9.geometry} />
            <mesh castShadow material={materials['Material.009']} geometry={nodes.mesh_10.geometry} />
            <mesh castShadow material={materials['Material.010']} geometry={nodes.mesh_11.geometry} />
            <mesh castShadow material={materials['Material.013']} geometry={nodes.mesh_12.geometry} />
            <mesh castShadow material={materials['Material.014']} geometry={nodes.mesh_13.geometry} />
          </group>
          <group position={[-1.09, -1.09, 1.86]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_14.geometry} />
          </group>
          <group position={[-1.09, -1.09, 1.86]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_15.geometry} />
          </group>
          <group position={[-1.09, -1.08, 1.86]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_16.geometry} />
          </group>
          <group position={[-0.78, -0.85, 0.62]} rotation={[0.59, -0.11, -0.16]} scale={[0.87, 0.87, 0.87]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_17.geometry} />
          </group>
          <group position={[-1.7, -1.32, 1.08]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.26, 0.26, 0.26]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_18.geometry} />
            <mesh castShadow material={materials['Material.005']} geometry={nodes.mesh_19.geometry} />
            <mesh castShadow material={materials['Material.008']} geometry={nodes.mesh_20.geometry} />
          </group>
          <group position={[-0.47, -1.32, -0.72]} rotation={[0, 0, -Math.PI / 2]} scale={[0.26, 0.27, 0.26]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_21.geometry} />
            <mesh castShadow material={materials['Material.005']} geometry={nodes.mesh_22.geometry} />
            <mesh castShadow material={materials['Material.008']} geometry={nodes.mesh_23.geometry} />
          </group>
          <group position={[-1.71, -1.32, -0.72]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.26, 0.27, 0.26]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_24.geometry} />
            <mesh castShadow material={materials['Material.005']} geometry={nodes.mesh_25.geometry} />
            <mesh castShadow material={materials['Material.008']} geometry={nodes.mesh_26.geometry} />
          </group>
          <group position={[-1.09, -1.09, -0.21]} scale={[0.53, 0.51, 0.83]}>
            <mesh castShadow material={materials['Material.009']} geometry={nodes.mesh_27.geometry} />
          </group>
          <group position={[-0.49, -1.32, 1.08]} rotation={[0, 0, -Math.PI / 2]} scale={[0.26, 0.26, 0.26]}>
            <mesh castShadow material={materials['Material.002']} geometry={nodes.mesh_28.geometry} />
            <mesh castShadow material={materials['Material.005']} geometry={nodes.mesh_29.geometry} />
            <mesh castShadow material={materials['Material.008']} geometry={nodes.mesh_30.geometry} />
          </group>
          <group position={[-0.58, -0.96, 0.84]} rotation={[0.04, -0.03, -0.61]} scale={[0.06, 0.06, 0.08]}>
            <mesh castShadow material={materials['Material.009']} geometry={nodes.mesh_31.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d/scene.gltf')
