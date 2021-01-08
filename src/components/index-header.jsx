import React from 'react';
import './styles/index-header.scss';

export default function IndexHeader(props) {  
  const ltd = () => {
    if (props.ltd === 'true') {
      return <p className="logo-ltd"> Ltd </p>
    }
    return undefined
  }

  return (
    <div className="index-header">
      <div className="header-container">
        <h1 className="main-logo">{props.title}</h1>
        { ltd() }
        <h4 className="index-tagline">{props.tagline}</h4>
      </div>
    </div>
  )
}