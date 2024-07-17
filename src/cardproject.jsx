import React from 'react';
import './cardProject.css'

const Card = ({ title, description, imageUrl }) => (
  <div className="P-card">
    <div className='try'>
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
    
  </div>
);

export default Card;