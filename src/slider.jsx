
import React from 'react';
import Slider from 'react-slick';
import Card from './cardproject';
import './slider.css'

// style={{ position: 'absolute', top: '50%', right: '20px', zIndex: 99, color: 'black', background: '#00CCFF' }}

const NextArrow = ({ onClick }) => {
    return (
      <button className='arrowbtn arrowbtn-right' type="button" onClick={onClick} >
        {/* &gt; */}
      </button>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <button className='arrowbtn arrowbtn-left' type="button" onClick={onClick} >
        {/* &lt; */}
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </Slider>
  );
};

export default PSlider;
