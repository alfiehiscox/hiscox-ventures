import React, {useState, useEffect} from 'react';
import './styles/software-page.scss';
import { CSSTransition } from 'react-transition-group';

const SoftwareScroller = (props) => {
  const [currentScrolled, setCurrentScroll] = useState();
  const [mobile, setMobile] = useState(props.viewport < 900);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let elem = document.getElementById(currentScrolled);
    if (elem && mobile) {
      let topPos = elem.offsetTop;
      setTimeout(()=> {
        document.querySelector('.scroller-content').scrollTo({left: 0, top: topPos - 440, behavior: 'smooth'});
      }, 400);
    } else {
      elem && elem.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, [currentScrolled, mobile]);

  useEffect(() => {
    setMobile(props.viewport < 900);
  }, [props.viewport]);

  const handleMobileClick = (child) => {
    setCurrentScroll(child.props.label);
    setOpen(false);
  }

  let sidebar;
  if (mobile) {
    sidebar = (
      <CSSTransition
        in={open}
        timeout={300}
        classNames="mobile-sidebar-navigation"
      >
        <div className="mobile-sidebar-container">
          <button className="mobile-sidebar-button" onClick={() => setOpen(!open)}>
            <h3>Nav</h3>
          </button>
          {props.children.map((child) => {
            return (
              <button key={child.props.label} onClick={() => handleMobileClick(child)}>
                <h3 className="sidebar-item">{child.props.label}</h3>
              </button>
            )
          })}
        </div>
      </CSSTransition>
    );
  } else {
    sidebar = (
      <div className="scroller-sidebar">
        {props.children.map((child) => {
          return (
            <button key={child.props.label} onClick={() => setCurrentScroll(child.props.label)}>
              <h3 className="sidebar-item">{child.props.label}</h3>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="scroller-container">
      {sidebar}
      <div className="scroller-content">
        {props.children.map((child) => {
          return child
        })}
      </div>
    </div>
  );
}

const SoftwareContent = (props) => {
  let companies; 
  if (props.companies.length > 0) {
    companies = props.companies.map((company) => {
      return (
        <div className="software-company-container" key={company.name}>
          <div className="software-company-image-container">
            <img className="software-company-image" src={company.image} alt={props.label} />
            <h4>{company.name}</h4>
          </div>
          <div className="software-company-content">
            <h4>{company.name}</h4>
            <p className="software-company-description"> {company.description} </p>
          </div>
        </div>
      );
    })
  } else {
    companies = undefined;
  }

  return (
    <div id={props.label} className="software-content-container">
      <h2 className="software-c-title">{props.label}</h2>
      <p> {props.introduction } </p>
      { companies }
    </div>
  );
}

export { SoftwareScroller, SoftwareContent };