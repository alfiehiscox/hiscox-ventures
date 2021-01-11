import React from 'react';
import { Container } from './layout';
import './styles/sp.scss';
import { Link } from 'gatsby';

export default function SingleProfile(props) {
  return (  
    <Container margin="65%" padding="50px" classes="sp-container">
      <div className="sp-image">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="sp-content">
        <div className="sp-title">{props.title}</div>
        <div className="sp-content">{props.content}</div>
        <Link to={"/" + props.to + "/"} className="sp-link">{props.link}</Link>
      </div>
    </Container>
  );
}