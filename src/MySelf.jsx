import React, { Suspense } from 'react';
import './mySelf.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
// import Scene from './Scene';
import Scene2 from './Scene2'


const App = () => {
    return (
    <div className="myself-" >
      <div className="left-s">
        <h1 className="Fh1">Hi, I'm Ivan Navarro</h1>
        <h1 className="Sh1">Software Engineer</h1>
        <h1 className="Th1">Welcome to my page!</h1>
      </div>
      <div className="right-s">
        <Canvas camera={{ position: [0, 0, 150], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene2 position={[0, -70, 0]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
    )
}

export default App;
