import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopBar from './TopBar';
import MySelf from './MySelf';
import Starfield from 'react-starfield';
import AboutMe from './AboutMe';
import Projects from './Projects';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skills from './Skills';
import ContactMe from './ContactMe';
import MyProjectR from './MyprojectR';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {

  return (
    <div>
      <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.08}
        backgroundColor="black"
      />
      <TopBar />
      <MySelf />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <MyProjectR />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
