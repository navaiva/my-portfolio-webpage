import React, { Suspense } from 'react';
import './myself.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';


function App() {
  

  return (
    <div className="myself-">
      <div className="left-s">
        <h1 className="Fh1">Hi, I'm Ivan Navarro</h1>
        <h1 className="Sh1">Software Engineer</h1>
        <h1 className="Th1">Welcome to my page!</h1>
      </div>
      <div className="right-s">
        <Canvas camera={{ position: [0, 0, 150], fov: 70 }}>
          <OrbitControls />
          <Suspense fallback={null}>
            <Scene position={[10, -50, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
