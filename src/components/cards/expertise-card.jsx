import React from 'react';
import '../styles/cards.scss';

export default function ExpertiseCard(props) {
  return (
    <div className="expertise-card-container">
      <div className="expertise-image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="expertise-content-container">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}