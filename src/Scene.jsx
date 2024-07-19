/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 scene.gltf 
Author: Springtrap._.1987._. (https://sketchfab.com/Springtrap._.1987._.)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/code-bonnie-74eef9e3b2b64ac891492c007a7461b5
Title: CoDe BoNnIe
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = React.useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  useFrame((state, delta) => {
    // Rotate the group on the y-axis
    group.current.rotation.y += delta;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Cube_116_Bonnie_1_0.geometry}
          material={materials.Bonnie_1}
        />
        <mesh
          geometry={nodes.Cube_116_Dark_0.geometry}
          material={materials.Dark}
        />
        <mesh
          geometry={nodes.Cube_116_Bonnie_2_0.geometry}
          material={materials.Bonnie_2}
        />
        <mesh
          geometry={nodes.Cube_116_Endo_2_0.geometry}
          material={materials.Endo_2}
        />
        <mesh
          geometry={nodes.Cube_116_Red_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Cube_116_Teeth_0.geometry}
          material={materials.Teeth}
        />
        <mesh
          geometry={nodes.Cube_116_Eye_B_0.geometry}
          material={materials.Eye_B}
        />
        <mesh
          geometry={nodes.Cube_116_Eye_back_0.geometry}
          material={materials.Eye_back}
        />
        <mesh
          geometry={nodes.Cube_116_Endo_1_0.geometry}
          material={materials.Endo_1}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
