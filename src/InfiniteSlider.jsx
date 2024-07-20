import React, { useEffect, useRef } from 'react';
import './infiniteSlider.css';
// import 'devicons/css/devicons.css'
// import 'devicon/devicon.min.css';
// import 'devicon/devicon-colors.css';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJs, FaCss3Alt, FaHtml5, FaPython, FaPhp, FaVuejs, FaJava, FaSwift, } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiExpress, SiNextdotjs, SiElectron, SiJest, SiThreedotjs, SiNpm, SiDjango, SiTailwindcss, SiSass, SiGithub, SiGit, SiMysql, SiCplusplus, SiApollographql } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';

const iconsMapping = {
  JavaScript: FaJs,
  CSS: FaCss3Alt,
  HTML: FaHtml5,
  React: FaReact,
  AWS: FaAws,
  TypeScript: SiTypescript,
  Jest: SiJest,
  Electron: SiElectron,
  MongoDB: SiMongodb,
  PSQL: SiPostgresql,
  Redux: SiRedux,
  Express: SiExpress,
  Node: FaNodeJs,
  Next: SiNextdotjs,
  ReactNative: FaReact,
  Three: SiThreedotjs,
  NPM: SiNpm,
  PHP: FaPhp,
  Python: FaPython,
  CSharp: SiCplusplus,
  Django: SiDjango,
  Docker: FaDocker,
  Tailwind: SiTailwindcss,
  SASS: SiSass,
  Vue: FaVuejs,
  GitHub: SiGithub,
  Git: SiGit,
  MySQL: SiMysql,
  Ajax: AiFillApi,
  CPlusPlus: SiCplusplus,
  Java: FaJava,
  Swift: FaSwift,
  API: AiFillApi,
  Apollo: SiApollographql
};

const InfiniteSlider = ({ items }) => {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null); 

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const startScrolling = () => {
      const speed = 1;
      const sliderWidth = slider.scrollWidth / 2; // Total width of the slider
      let scrollLeft = 0; // Initialize scroll position

      scrollIntervalRef.current = setInterval(() => {
        scrollLeft += speed;

        if (scrollLeft >= sliderWidth) {
          scrollLeft = 0;
        }

        slider.scrollLeft = scrollLeft;
      }, 16);
    };
   

    startScrolling();

    return () => {
      clearInterval(scrollIntervalRef.current);
     
    };
  }, []);

  const duplicatedItems = [...items, ...items];

  return (
    <div className="slider-container-inf" ref={sliderRef}>
      <div className="slider-content-inf">
        {duplicatedItems.map((item, index) => {
           const IconComponent = iconsMapping[item.icon]; return (
          <div key={`${item.id}-${index}`} className="slider-skill-inf">
  {IconComponent && <IconComponent className="colored" />}
            <span>{item.name}</span>
          </div>
        )
})}
      </div>
    </div>
  );

};

export default InfiniteSlider;