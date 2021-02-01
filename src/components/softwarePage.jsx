import React, {useState, useEffect} from 'react';
import './styles/software-page.scss';

const SoftwareScroller = (props) => {
  const [currentScrolled, setCurrentScroll] = useState();

  useEffect(() => {
    let elem = document.getElementById(currentScrolled);
    elem && elem.scrollIntoView({behavior: 'smooth', block: 'start'});
  }, [currentScrolled])

  return (
    <div className="scroller-container">
      <div className="scroller-sidebar">
        {props.children.map((child) => {
          return (
            <button onClick={() => setCurrentScroll(child.props.label)}>
              <h3 className="sidebar-item">{child.props.label}</h3>
            </button>
          );
        })}
      </div>
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
        <div className="software-company-container">
          <img className="software-company-image" src={company.image} alt={props.label} />
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