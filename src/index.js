import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopBar from './TopBar';
import Myself from './Myself'
import Starfield from 'react-starfield';
import AboutMe from './AboutMe'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.08}
        backgroundColor="black"
        /> 
   <TopBar/>
   <Myself/>
   <AboutMe/>
    </div>
   
    
  </React.StrictMode>
);

