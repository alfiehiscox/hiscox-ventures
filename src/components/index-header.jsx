import React from 'react';
import './styles/index-header.scss';

export default function IndexHeader(props) {  
  

  const ltd = () => {
    if (props.ltd === 'true') {
      return <p className="logo-ltd"> Ltd </p>
    }
    return undefined
  }
  
  let gradient;
  if (props.gradient) {
    gradient = "linear-gradient(to bottom, rgba(245, 246, 252, 0.1), rgba(47, 46, 65, 0.73)),"
  } else {
    gradient = "";
  }

  return (
    <div className="index-header"
      style={{backgroundImage: `${gradient} url(${props.image})`}}>
      <div className="header-container">
        <h1 className="main-logo">{props.title}</h1>
        { ltd() }
        <h4 className="index-tagline">{props.tagline}</h4>
      </div>
    </div>
  )
}