import React from 'react';
import './styles/nav.scss';
import "@fontsource/audiowide"
import { CSSTransition } from 'react-transition-group';
import { Link } from 'gatsby';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewportWidth: window.innerWidth,
      open: false,
      sectorOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.setState({ viewportWidth: window.innerWidth }));
  }

  componentDidUpdate() {
    window.addEventListener("resize", () => this.setState({ viewportWidth: window.innerWidth }));
  }

  setSectorOpen = (value) => {
    this.setState({sectorOpen: value});
  }

  setOpen = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="nav-bar" >
        <Logo />
        <Collapsible mobile={this.state.viewportWidth < 900} setOpen={this.setOpen} open={this.state.open}>
          <ul className="nav">
            <div className="exit" onClick={this.setOpen}>X</div>
            <NavItem title="About" link='about' />
            <NavItem title="Expertise" link='expertise' />
            <NavItem title="People" link='people' />
            <NavItem 
              title="Sectors" 
              setSectorOpen={this.setSectorOpen} 
              sectorOpen={this.state.sectorOpen} 
              mobile={this.state.viewportWidth < 900}
            >
              <Dropdown text="Something Random" mobile={this.state.viewportWidth < 900} setSectorOpen={this.setSectorOpen}/>
            </NavItem>
          </ul>
        </Collapsible>
      </div>
    )
  }
}

const Logo = () => {
  return (
    <h3 className="logo">Hiscox Ventures</h3>
  )
}

const NavItem = (props) => {
  const handleMouse = (value) => {
    if (props.setSectorOpen) {
      props.setSectorOpen(value);
    }
  }

  if ( props.link ) { 
    return (
      <Link 
        to={props.link}
        className="nav-item" 
      >
        <li>{props.title}</li>
      </Link>
    );
  } else if ( props.mobile ) {
    console.log("from mobile")
    return (
      <div className='nav-item' onClick={() => handleMouse(true)} >
        <li>{props.title}</li>
        { props.sectorOpen && props.children }
      </div>
    );
  }
  return (
    <div
      className="nav-item" 
      onMouseEnter={ () => handleMouse(true) } 
      onMouseLeave={ () => handleMouse(false) } 
    >
      <li>{props.title}</li>
      { props.sectorOpen && props.children }
    </div>
  )
}

const Dropdown = (props) => {
  if (!props.mobile) {
    return (
      <div className="dropdown">
        <p>{props.text}</p>
      </div>
    );
  };

  return (
      <ul className="nav" style={{transform: 'translateX(0%)'}}>
        <div className="exit" onClick={() => props.setSectorOpen(false)}>Back</div>
        <NavItem title="Housing" />
        <NavItem title="Automobiles" />
        <NavItem title="Software" />
        <NavItem title="Cinematography" />
      </ul>
  )
}

class Collapsible extends React.Component {
  handleClick = () => {
    this.props.setOpen();
  }

  render() {
    if (this.props.mobile) {
      return (
        <div>
          <div className="burger-containter" style={{cursor: 'pointer'}} onClick={ this.handleClick }>
            <div className="burger">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
          </div>
          <CSSTransition 
            in={this.props.open}
            timeout={ 400 }
            classNames="collapsible"
          >
            
            { this.props.children }
          </CSSTransition>
        </div>
      )
    }
    return this.props.children
  }
}