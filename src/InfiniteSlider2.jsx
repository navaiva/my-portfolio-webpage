import React, { useEffect, useRef } from 'react';
import './infiniteSlider2.css';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJs, FaCss3Alt, FaHtml5, FaPython, FaPhp, FaVuejs, FaJava, FaSwift, } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiExpress, SiNextdotjs, SiJest, SiThreedotjs, SiNpm, SiDjango, SiTailwindcss, SiSass, SiGithub, SiGit, SiMysql, SiCplusplus, SiApollographql, SiWebpack } from 'react-icons/si';
import { IoLogoElectron } from "react-icons/io5";

const iconsObj = {
    JavaScript: <FaJs size={80} />,
    CSS: <FaCss3Alt size={80} />,
    HTML: <FaHtml5 size={80} />,
    React: <FaReact size={80} />,
    AWS: <FaAws size={80} />,
    TypeScript: <SiTypescript size={80} />, 
    Jest: <SiJest size={80} />,
    Electron: <IoLogoElectron size={80} />, 
    MongoDB: <SiMongodb size={80} />,
    PSQL: <SiPostgresql size={80} />, 
    Redux: <SiRedux size={80} />, 
    Express: <SiExpress size={80} />, 
    Node: <FaNodeJs size={80} />,
    Three: <SiThreedotjs size={80} />, 
    NPM: <SiNpm size={80} />,
    Docker: <FaDocker size={80} />,
    Tailwind: <SiTailwindcss size={80} />,
    SASS: <SiSass size={80} />,
    GitHub: <SiGithub size={80} />,
    Git: <SiGit size={80} />,
    Apollo: <SiApollographql size={80} />, 
    CPlusPlus: <SiCplusplus size={80} />, 
    Java: <FaJava size={80} />,
    Swift: <FaSwift size={80} />,
    Vue: <FaVuejs size={80} />,
    PHP: <FaPhp size={80} />,
    Python: <FaPython size={80} />,
    CSharp: <SiCplusplus size={80} />, 
    Django: <SiDjango size={80} />, 
    Next: <SiNextdotjs size={80} />, 
    ReactNative: <FaReact size={80} />,
    MySQL: <SiMysql size={80} />,
    Webpack: <SiWebpack size={80}/>
  };
  



const InfiniteCarousel2 = ({ items }) => {
    const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let start = null;
    let previousTimeStamp = 0;
    const speed = 0.05;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - previousTimeStamp;

      if (elapsed > 16) { 
        carousel.scrollLeft -= speed * elapsed; 
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth / 2;
        }
        previousTimeStamp = timestamp;
      }


      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <div className="carousel-container2" ref={carouselRef}>
      <div className="carousel-content2">
        {items.map((item, index) => (
          <div key={index} className="carousel-item2">
            {iconsObj[item.icon]}
            <p>{item.name}</p>
          </div>
        ))}
        {items.map((item, index) => (
          <div key={`repeat-${index}`} className="carousel-item2">
            {iconsObj[item.icon]}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel2;