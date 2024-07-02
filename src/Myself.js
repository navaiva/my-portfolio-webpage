import { Suspense} from "react";
import './myself.css'

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './Scene'
import * as THREE from 'three';




function App() {

  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 150; // Adjust this value to change the zoom level


    return (
      <div className="whole">
        <div className="left-s">
          <h1 className="Fh1">Hi, I'm Ivan Navarro</h1>
          <h1 className="Sh1">Software Engineer</h1>
          <h1 className="Th1">Welcome to my page!</h1>
        </div>
        <div className="right-s">
   
        <Canvas camera={camera}>
          <OrbitControls  />
          <Suspense fallback={null}>
           <Scene position={[10, -50, 0]} />
          </Suspense>
        </Canvas>
        </div>
      </div>
    );
  }
  
  export default App;