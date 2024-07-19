import './projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SEEqr from './SEEqr.png';
import React from 'react';
import PSlider from './slider';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa';
import {
  SiRedux,
  SiMongodb,
  SiJest,
  SiWebpack,
  SiElectron,
  SiTypescript,
} from 'react-icons/si';

function App() {
  const projects = [
    {
      title: 'SeeQR',
      description:
        'An Open Source projet that help make databases management easier',
      imageUrl: SEEqr,
      techs: [
        { name: 'React', icon: <FaReact size={30} color="#00CCFF" /> },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#00CCFF" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#00CCFF" /> },
        { name: 'Node', icon: <FaNodeJs size={30} color="#00CCFF" /> },
        { name: 'Redux', icon: <SiRedux size={30} color="#00CCFF" /> },
        { name: 'Electron', icon: <SiElectron size={30} color="#00CCFF" /> },
        {
          name: 'Typescript',
          icon: <SiTypescript size={30} color="#00CCFF" />,
        },
        { name: 'Jest', icon: <SiJest size={30} color="#00CCFF" /> },
        { name: 'Javascript', icon: <FaJsSquare size={30} color="#00CCFF" /> },
        { name: 'MongoDB', icon: <SiMongodb size={30} color="#00CCFF" /> },
      ], links: [{ name: 'git', icon: 'path' }, {name: 'web', icon: '[path'}
      ],
    },
    {
      title: 'WeatherFY',
      description:
        'An interactive and creative way to see the weather and plan your day!',
      imageUrl: 'path/to/image2.jpg',
      techs: [
        { name: 'React', icon: <FaReact size={30} color="#00CCFF" /> },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#00CCFF" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#00CCFF" /> },
        { name: 'Node', icon: <FaNodeJs size={30} color="#00CCFF" /> },
        { name: 'Javascript', icon: <FaJsSquare size={30} color="#00CCFF" /> },
        { name: 'Webpack', icon: <SiWebpack size={30} color="#00CCFF" /> },
      ],
      links: [{ name: 'git', icon: 'path' }, {name: 'web', icon: '[path'}
      ],
    },
    {
      title: 'Project 3',
      description: 'Description for project 2.',
      imageUrl: 'path/to/image2.jpg',
      techs: [
        { name: 'React', icon: 'path/to/react-icon.png' },
        { name: 'CSS', icon: 'path/to/css-icon.png' },
      ], links: [{ name: 'git', icon: 'path' }, {name: 'web', icon: '[path'}
      ],
    },
  ];

  return (
    <div className="projects">
      <h1 className="P-presentation">My Projects</h1>
      <PSlider projects={projects} />
    </div>
  );
}

export default App;
