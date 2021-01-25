import React from 'react';
import Nav from './nav';
import "@fontsource/source-serif-pro";

function Layout(props) {
  
  return (
    <div>
      <Nav dark={props.dark}/>
      {props.children}
      <Footer dark={props.dark}/>
    </div>
  )
}

function Container(props) {
  return (
    <div className={props.classes} style={{
      width: props.margin,
      margin: '0 auto',
      padding: props.padding,
    }}>
      { props.children }
    </div>
  );
}

function Footer(props) {
  const footerStyles = props.dark ? {backgroundColor: '#202021', color: 'white'} : {backgroundColor: 'white', color: "black"}
  return (
    <div className="footer" style={footerStyles}>
      <h4> Footer </h4>
    </div>
  );
}

export { Container, Layout };