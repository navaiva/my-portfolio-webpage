import React from 'react';
// import { useGLTF } from '@react-three/drei';
import Model from './Scene';

const Scene = (props) => {
  return (
    <group {...props}>
      <Model />
    </group>
  );
};

export default Scene;