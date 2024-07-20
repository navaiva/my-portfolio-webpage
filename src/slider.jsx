import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const Tooltip = ({ text }) => <span className="tooltip">{text}</span>;

const NextArrow = ({ onClick }) => {
  return (
    <button className="arrow-btn arrow-btn-right" onClick={onClick}>
      &gt;
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="arrow-btn arrow-btn-left" onClick={onClick}>
      &lt;
    </button>
  );
};

const PSlider = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: '10px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="project-container">
          <div className="project-content">
            <div className="img-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="projects-Right">
              <h3 className="title-P">{project.title}</h3>
              <p className="description-P">{project.description}</p>
              <div className="stack-container">
                <h5 className="stack-names">Stack</h5>
                <div className="stack-box">
                  {project.techs.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-icon">
                      {tech.icon}
                      <Tooltip text={tech.name} />
                    </div>
                  ))}
                </div>
                <div className="LP">
                  {project.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="link-icon">
                      <a href={link.href}>{link.icon}</a>
                      <Tooltip text={link.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PSlider;
