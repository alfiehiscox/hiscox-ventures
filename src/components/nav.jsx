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

  setSectorOpen = () => {
    this.setState({sectorOpen: !this.state.sectorOpen});
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
            <div role="button" tabIndex={0} className="exit" onClick={this.setOpen} onKeyDown={this.handleClick}>X</div>
            <NavItem title="About" link='about' />
            <NavItem title="Expertise" link='expertise' />
            <NavItem title="People" link='people' />
            <NavItem 
              title="Sectors" 
              setSectorOpen={this.setSectorOpen} 
              sectorOpen={this.state.sectorOpen} 
              mobile={this.state.viewportWidth < 900} >
              <Dropdown 
                text="Something Random" 
                mobile={this.state.viewportWidth < 900} 
                setSectorFunction={this.setSectorOpen} 
                sectorOpen={this.state.sectorOpen} />
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
  const handleMouse = () => {
    if (props.setSectorOpen) {
      props.setSectorOpen();
    }
  }

  if ( props.link ) { 
    return (
      <Link 
        to={'/' + props.link + '/'}
        className="nav-item" 
      >
        <li>{props.title}</li>
      </Link>
    );
  } else if ( props.mobile ) {
    return (
      <div 
        style={{outline: '0'}}
        role="button"
        tabIndex={-1} 
        className='nav-item' 
        onClick={() => handleMouse()} 
        onKeyDown={() => handleMouse()} >
          <li>{props.title}</li>
          { props.children }
      </div>
    );
  }
  return (
    <button
      style={{backgroundColor: 'white'}}
      className="nav-item" 
      onMouseEnter={ () => handleMouse() } 
      onMouseLeave={ () => handleMouse() } 
    >
      <li>{props.title}</li>
      { props.sectorOpen && props.children }
    </button>
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

  const handleClick = () => {
    props.setSectorFunction();
  }

  return (
    <CSSTransition 
      in={props.sectorOpen}
      timeout={ 300 }
      classNames="sector-styles"
    >
      <ul className="nav">
        <button className="exit" style={{cursor: 'pointer'}} onClick={ () => handleClick() }>X</button>
        <NavItem title="Housing" link="sectors"/>
        <NavItem title="Automobiles" link="sectors"/>
        <NavItem title="Software" link="sectors"/>
        <NavItem title="Cinematography" link="sectors"/>
      </ul>
    </CSSTransition>
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
          <button 
            className="burger-containter" 
            style={{cursor: 'pointer'}} 
            onClick={ this.handleClick }
            onKeyDown={ this.handleClick }
          >
            <div className="burger">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
          </button>
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