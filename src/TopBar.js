import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './topBar.css';

function App() {
  return (
    <div className='topBar'>
      <div className='links'>
      <div className='git'>
      <a href="https://github.com/navaiva">
        <FontAwesomeIcon icon={faGithub} style={{ color: '#00CCFF' }} size="lg" className="sizeclasse" />
      </a>
      </div>
      <div className='linkedin'>
      <a href="linkedin.com/in/ivan-navarro-82227330b">
        <FontAwesomeIcon icon={faLinkedin} style={{ color: '#00CCFF', }} size="lg" className="sizeclasse" />
      </a>
      </div>
      <div className='threeDots'>
      <FontAwesomeIcon icon={faBars} size='lg' className="sizeclasse" />
      </div>
    </div>
     
    </div>
  );
}

export default App;
