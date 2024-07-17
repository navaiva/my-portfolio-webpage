import './projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import PSlider from './slider';

function App() {
  const projects = [
    { title: 'Project 1', description: 'Description for project 1.', imageUrl: 'path/to/image1.jpg' },
    { title: 'Project 2', description: 'Description for project 2.', imageUrl: 'path/to/image2.jpg' },
  ];

  return (
    <div className="projects">
      <h1 className='P-presentation'>My Projects</h1>
      <PSlider projects={projects} />
    </div>
  );
}




export default App;
