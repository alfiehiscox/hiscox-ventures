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
    const navStyles = this.props.dark ? {backgroundColor: "#202021"} : {backgroundColor: "white"};

    return (
      <div className="nav-bar" style={navStyles}>
        <Logo dark={this.props.dark} />
        <Collapsible mobile={this.state.viewportWidth < 900} setOpen={this.setOpen} open={this.state.open} dark={this.props.dark}>
          <ul className="nav" style={navStyles}>
            <div role="button" tabIndex={0} className="exit" onClick={this.setOpen} onKeyDown={this.handleClick}>X</div>
            <NavItem dark={this.props.dark} title="About" link='about' />
            <NavItem dark={this.props.dark} title="Expertise" link='expertise' />
            <NavItem dark={this.props.dark} title="People" link='people' />
            <NavItem 
              dark={this.props.dark}
              title="Sectors" 
              setSectorOpen={this.setSectorOpen} 
              sectorOpen={this.state.sectorOpen} 
              mobile={this.state.viewportWidth < 900} >
              <Dropdown 
                dark={this.props.dark}
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

const Logo = (props) => {
  const logoStyles = props.dark ? {color: "white"} : {color: "black"}; 
  return (
    <Link to="/" style={{textDecoration: "none", color: "black"}}>
      <h3 className="logo" style={logoStyles} >Hiscox Ventures</h3>
    </Link>
  )
}

const NavItem = (props) => {
  const navItemStyles = props.dark ? {backgroundColor: '#202021', color: "white", outline: '0'} : {color: "black", outline: '0'};
  const buttonNavStyles = props.dark ? {backgroundColor: '#202021', color: "white"} : {backgroundColor: 'white'};
  const handleMouse = () => {
    if (props.setSectorOpen) {
      props.setSectorOpen();
    }
  }

  if ( props.link ) { 
    return (
      <Link 
        to={'/' + props.link}
        className="nav-item" 
        style={navItemStyles}
      >
        <li>{props.title}</li>
      </Link>
    );
  } else if ( props.mobile ) {
    return (
      <div 
        style={navItemStyles}
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
      style={buttonNavStyles}
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
  const dropdownStyle = props.dark ? {backgroundColor: "#202021"} : {backgroundColor: "white"}
  if (!props.mobile) {
    return (
      <div className="dropdown" style={dropdownStyle}>
        <NavItem dark={props.dark} title="Housing Development" link="housing" />
        <NavItem dark={props.dark} title="Automobile Renovation" link="cars" />
        <NavItem dark={props.dark} title="Software" link="software" />
        <NavItem dark={props.dark} title="Cinematography" link="cinematography" />
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
      <ul className="nav" style={dropdownStyle}>
        <button className="exit" style={{cursor: 'pointer'}} onClick={ () => handleClick() }>X</button>
        <NavItem dark={props.dark} title="Housing" link="sectors"/>
        <NavItem dark={props.dark} title="Automobiles" link="sectors"/>
        <NavItem dark={props.dark} title="Software" link="sectors"/>
        <NavItem dark={props.dark} title="Cinematography" link="sectors"/>
      </ul>
    </CSSTransition>
  )
}

class Collapsible extends React.Component {
  handleClick = () => {
    this.props.setOpen();
  }

  render() {
    const collapsibleDark = this.props.dark ? {backgroundColor: "#202021", cursor: 'pointer'} : {backgroundColor: "white", cursor: 'pointer'};
    const bugerDark = this.props.dark ? {backgroundColor: 'white'} : {backgroundColor: 'black'}
    if (this.props.mobile) {
      return (
        <div>
          <button 
            className="burger-containter" 
            style={collapsibleDark} 
            onClick={ this.handleClick }
            onKeyDown={ this.handleClick }
          >
            <div className="burger">
              <div style={bugerDark} className="line-1"></div>
              <div style={bugerDark} className="line-2"></div>
              <div style={bugerDark} className="line-3"></div>
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