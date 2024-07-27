import './projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SEEqr from '../src/assets/SEEqr.png';
import React from 'react';
import PSlider from './slider';
import screen from '../src/assets/screen.png'
import rsvp from '../src/assets/rsvps.png'
import RS from '../src/assets/rs.png'

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
  SiTailwindcss,
  SiPostgresql
} from 'react-icons/si';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

const App = () => {
  let projects = [
    {
      title: 'SeeQR',
      description:
        'An Open Source projet that help make databases management easier',
      imageUrl: SEEqr,
      techs: [
        { name: 'React', icon: <FaReact size={30} color="#00CCFF"  /> },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#00CCFF" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#00CCFF" /> },
        { name: 'Node', icon: <FaNodeJs size={30} color="#00CCFF" /> },
        { name: 'Redux', icon: <SiRedux size={30} color="#00CCFF" /> },
        { name: 'Electron', icon: <SiElectron size={30} color="#00CCFF" /> },
        { name: 'Typescript',icon: <SiTypescript size={30} color="#00CCFF" />,},
        { name: 'Jest', icon: <SiJest size={30} color="#00CCFF" /> },
        { name: 'Javascript', icon: <FaJsSquare size={30} color="#00CCFF" /> },
        { name: 'MongoDB', icon: <SiMongodb size={30} color="#00CCFF" /> },
      ], links: [{ name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub}  color='#00CCFF' />, href: 'https://github.com/open-source-labs/SeeQR-Web' }, {name: 'Website', icon: <FontAwesomeIcon icon={faGlobe} color='#00CCFF' />, href: 'http://www.seeqrapp.com/'}
      ],
    },
    {
      title: 'RSVPEngine',
      description: 'a sophisticated event management application',
      imageUrl: rsvp,
      techs: [
        { name: 'React', icon: <FaReact size={30} color="#00CCFF"  /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#00CCFF" /> },
        { name: 'Javascript', icon: <FaJsSquare size={30} color="#00CCFF" /> },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#00CCFF" />  },
        { name: 'Redux', icon: <SiRedux size={30} color="#00CCFF" /> },
        { name: 'MongoDB', icon: <SiMongodb size={30} color="#00CCFF" />, },
        { name: 'Webpack', icon: <SiWebpack size={30} color="#00CCFF" /> },
      ], links: [{ name: 'git', icon: <FontAwesomeIcon icon={faGithub}  color='#00CCFF' />, href: 'https://github.com/EventPulse/RSVPEngine' },
      ],
    },
    {
      title: 'WeatherFY',
      description:
        'An interactive and creative way to see the weather and plan your day!',
      imageUrl: screen,
      techs: [
        { name: 'React', icon: <FaReact size={30} color="#00CCFF" /> },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#00CCFF" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#00CCFF" /> },
        { name: 'Node', icon: <FaNodeJs size={30} color="#00CCFF" /> },
        { name: 'Javascript', icon: <FaJsSquare size={30} color="#00CCFF" /> },
        { name: 'Webpack', icon: <SiWebpack size={30} color="#00CCFF" /> },
      ],
      links: [{ name: 'GitHub', icon:  <FontAwesomeIcon icon={faGithub}  color='#00CCFF' />, href:'https://github.com/navaiva/weather-app-solo-project'},
      ],
    },
    {
      title: 'RideSafe - in Progress',
      description:
        'An app to track you motorcycle routes of find events close to you!',
      imageUrl: RS,
      techs: [
        { name: 'React', icon: <FaReact size={30} color="#00CCFF" /> },
        { name: 'HTML', icon: <FaHtml5 size={30} color="#00CCFF" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#00CCFF" /> },
        { name: 'Node', icon: <FaNodeJs size={30} color="#00CCFF" /> },
        { name: 'Javascript', icon: <FaJsSquare size={30} color="#00CCFF" /> },
        { name: 'Typescript', icon: <SiTypescript size={30} color="#00CCFF" /> },
        { name: 'MongoDB', icon: <SiMongodb size={30} color="#00CCFF" />, },
        { name: 'Tailwind', icon: <SiTailwindcss size={30} color="#00CCFF" />, },
        { name: 'PostgreSQL', icon: <SiPostgresql size={30} color="#00CCFF" />, },
        { name: 'React Native', icon: <FaReact size={30} color="#00CCFF" />, },
      ],
      links: [{ name: 'Website', icon: ','},
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
