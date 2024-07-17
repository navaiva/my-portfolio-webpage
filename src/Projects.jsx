import './projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, {useRef} from 'react';
import Slider from 'react-slick';

const App = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: current => console.log(current),
  };

  const navButtons = [
    { id: 0, label: '1' },
    { id: 1, label: '2' },
    { id: 2, label: '3' },
  ];

  const goToSlide = index => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className='projects-whole'>
      <h1 className='name-projects-h1'>projects</h1>
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className='projects-'>
          <div className='P-name'></div>
          <div className='p-picture'></div>
          <div className='p-description'></div>
          <div className='p-stack'></div>
          <div className='p-links'></div>
        </div>
        <div className='projects-'>Div 2 Content</div>
        <div className='projects-'>Div 3 Content</div>
      </Slider>
      <div className="nav-buttons">
        {navButtons.map(button => (
          <button key={button.id} onClick={() => goToSlide(button.id)}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default App;
