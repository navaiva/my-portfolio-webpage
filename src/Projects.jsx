import './projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SEEqr from './SEEqr.png'
import React from 'react';
import PSlider from './slider';






function App() {
  const projects = [
    { title: 'SeeQR', description: 'An Open Source projet that help make databases management easier', imageUrl: SEEqr , techs: [
      { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
    
    ],},
    { title: 'WeatherFY', description: 'An interactive and creative way to see the weather and plan your day!', imageUrl: 'path/to/image2.jpg', techs: [
      { name: 'React', icon: 'path/to/react-icon.png' },
      { name: 'CSS', icon: 'path/to/css-icon.png' },
    ],},
    { title: 'Project 3', description: 'Description for project 2.', imageUrl: 'path/to/image2.jpg', techs: [
      { name: 'React', icon: 'path/to/react-icon.png' },
      { name: 'CSS', icon: 'path/to/css-icon.png' },
    ],},
  ];

  return (
    <div className="projects">
      <h1 className='P-presentation'>My Projects</h1>
      <PSlider projects={projects} />
    </div>
  );
}




export default App;
