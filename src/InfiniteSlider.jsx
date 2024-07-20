import React from 'react';
import './infiniteSlider.css';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaJs, FaCss3Alt, FaHtml5, FaPython, FaPhp, FaVuejs, FaJava, FaSwift, } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiRedux, SiExpress, SiNextdotjs, SiJest, SiThreedotjs, SiNpm, SiDjango, SiTailwindcss, SiSass, SiGithub, SiGit, SiMysql, SiCplusplus, SiApollographql } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { IoLogoElectron } from "react-icons/io5";

const iconsMapping = {
  JavaScript: FaJs,
  CSS: FaCss3Alt,
  HTML: FaHtml5,
  React: FaReact,
  AWS: FaAws,
  TypeScript: SiTypescript,
  Jest: SiJest,
  Electron: IoLogoElectron,
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
  const duplicatedIcons = [...items, ...items];

  return (
    <div className="slider-container-inf">
      <div className="slider-content-inf">
        {duplicatedIcons.map((item, index) => (
          <div key={index} className="slider-skill-inf">
            {iconsMapping[item.icon] && React.createElement(iconsMapping[item.icon], { className: 'colored' })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;