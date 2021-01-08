import React from 'react';
import Nav from './nav';

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}

function Container(props) {
  return (
    <div style={{
      width: props.margin,
      margin: "0 auto",
    }}>
      { props.children }
    </div>
  );
}

export { Container, Layout };