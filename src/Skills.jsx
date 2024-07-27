import './skills.css';
import InfiniteCarousel from './InfiniteSlider';
// import InfiniteCarousel2 from './InfiniteSlider2';
import React from 'react';

const App = () => {

  const techIcons1 = [
    { id: 0, icon: 'JavaScript', name: 'JavaScript' },
    { id: 1, icon: 'CSS', name: 'CSS' },
    { id: 2, icon: 'HTML', name: 'HTML' },
    { id: 3, icon: 'React', name: 'React' },
    { id: 4, icon: 'AWS', name: 'AWS' },
    { id: 5, icon: 'TypeScript', name: 'TypeScript' },
    { id: 6, icon: 'Jest', name: 'Jest' },
    { id: 7, icon: 'Electron', name: 'Electron' },
    { id: 8, icon: 'MongoDB', name: 'MongoDB' },
    { id: 9, icon: 'PSQL', name: 'PSQL' },
    { id: 10, icon: 'Redux', name: 'Redux' },
    { id: 11, icon: 'Express', name: 'Express' },
    { id: 12, icon: 'Node', name: 'Node.js' },
    { id: 13, icon: 'Git', name: 'Git' },
    { id: 14, icon: 'NPM', name: 'NPM' },
    { id: 15, icon: 'Docker', name: 'Docker' },
    { id: 16, icon: 'Tailwind', name: 'Tailwind CSS' },
    { id: 17, icon: 'SASS', name: 'SASS' },
    { id: 18, icon: 'GitHub', name: 'Github' },
    { id: 19, icon: 'Webpack', name: 'Webpack'},
    {id: 20, icon: 'MySQL', name: 'MySQL'}
   
    
  ];

  // const techIcons2 = [
  //   { id: 0, icon: 'Apollo', name: 'Apollo' },
  //   { id: 1, icon: 'CPlusPlus', name: 'C++' },
  //   { id: 2, icon: 'Java', name: 'Java' },
  //   { id: 3, icon: 'Swift', name: 'swift' },
  //   { id: 4, icon: 'Vue', name: 'Vue' },
  //   { id: 5, icon: 'PHP', name: 'PHP' },
  //   { id: 6, icon: 'Python', name: 'Python' },
  //   { id: 7, icon: 'CSharp', name: 'C#' },
  //   { id: 8, icon: 'Django', name: 'Django' },
  //   { id: 9, icon: 'Next', name: 'Next.js' },
  //   { id: 10, icon: 'ReactNative', name: 'React Native' },
  //   { id: 11, icon: 'Three', name: 'Three.js' },

  // ]

  return (
<div className="skills">
    <div  className='skills-pre'>
    <h1 className='skills-det'>Skills</h1>
    </div>
    <div className='slider-infinite'>
    <InfiniteCarousel items={techIcons1}  />
    </div>
  </div>
  ) 
}

export default App;
