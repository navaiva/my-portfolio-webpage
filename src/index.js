import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Starfield from 'react-starfield';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        /> 
   <App/>
    
  </React.StrictMode>
);

