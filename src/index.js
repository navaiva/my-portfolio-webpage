import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInView } from 'react-intersection-observer';
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

function Section({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Percentage of the component visible to trigger
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      {children}
    </div>
  );
}

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
      <Section><MySelf /></Section>
      <Section><AboutMe /></Section>
      <Section><Projects /></Section>
      <Section><Skills /></Section>
      <Section><ContactMe /></Section>
      <MyProjectR />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
