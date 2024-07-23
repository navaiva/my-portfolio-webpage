

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './topBar.css';

const TopBar = () => {

  return (
    <div className="topBar">
      <div className="links">
        <div className="git">
          <a href="https://github.com/navaiva">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: '#00CCFF' }}
              size="lg"
              className="sizeclasse"
            />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://linkedin.com/in/ivan-navarro-82227330b">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: '#00CCFF' }}
              size="lg"
              className="sizeclasse"
            />
          </a>
        </div>
       
    </div>
    </div>
  );
}

export default TopBar;
