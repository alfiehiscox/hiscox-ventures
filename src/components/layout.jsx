import React from 'react';
import Nav from './nav';

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}