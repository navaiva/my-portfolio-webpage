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
        <div className="left-s"></div>
        <div className="right-s">
   
        <Canvas camera={camera}>
          <OrbitControls  />
          <Suspense fallback={null}>
           <Scene position={[10, -70, 0]} />
          </Suspense>
        </Canvas>
        </div>
      </div>
    );
  }
  
  export default App;