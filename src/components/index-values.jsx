import React from 'react';
import './styles/index-values.scss';
import {Container} from './layout';
import valuesData from '../data/values-data';

export default function IndexValues(props) {
  return (
    <div className="index-values-container"> 
      <Container margin="80%" padding="40px">
        {props.title}
        <ValueCardGrid />
      </Container> 
    </div>
  );
}

const ValueCardGrid = () => {
  return (
    <div className="values-grid">
      {valuesData.map((value) => {
        return (
          <div className="value-grid-item" key={value.title}>
            <ValueCard 
              image={value.image}
              title={value.title}
              content={value.content}
            />
          </div>
        );
      })}
    </div> 
  );
}

const ValueCard = (props) => {
  return (
    <div className="valueCard">
      <div className="value-card-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="value-card-content">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
      <div className="values-card-mob-title">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}