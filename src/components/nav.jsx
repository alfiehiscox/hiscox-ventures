import React, { useState } from 'react';
import './styles/nav.scss';
import "@fontsource/audiowide"

export default function Nav(props) {
  return (
    <div className="nav-bar">
      <Logo />
      <ul className="nav">
        <NavItem title="About" />
        <NavItem title="Expertise" />
        <NavItem title="People" />
        <NavItem title="Sectors">
          <Dropdown text="Something Random" />
        </NavItem>
      </ul>
    </div>
  )
}

const Logo = () => {
  return (
    <h3 className="logo">Hiscox Ventures</h3>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <a 
      href='#'
      className="nav-item" 
      onMouseEnter={ () => {setOpen(true)} } 
      onMouseLeave={ () => {setOpen(false)} } 
    >
      <li>{props.title}</li>
      { open && props.children }
    </a>

  );
}

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <p>{props.text}</p>
    </div>
  );
}