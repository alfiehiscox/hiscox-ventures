import React from 'react';
import Nav from './nav';
import "@fontsource/source-serif-pro";

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
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
  return (
    <div className="footer">
      <h4> Footer </h4>
    </div>
  );
}

export { Container, Layout };