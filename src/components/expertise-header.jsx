import React from 'react';
import './styles/expertise-header.scss';
import ExpertiseCard from './cards/expertise-card';
import Expertise from '../images/values-img/expertise.svg';
import Results from '../images/values-img/results.svg';
import Teamwork from '../images/values-img/teamwork.svg';

const ExpertiseHeader = (props) => {
  return (
    <div>
      <div className="nav-bar-cover"></div>
      <div className="header-background">
        <h1 className="expertise-header-title">Our Expertise</h1>
        <div className="outer-expertise-card-container">
          <ExpertiseCard 
            image={Expertise}
            title="Non-Execs"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate"
            itemNum=" item-1"
          />
          <ExpertiseCard 
            image={Results}
            title="Private Equity"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate"
            itemNum=" item-2"
          />
          <ExpertiseCard 
            image={Teamwork}
            title="Consultancy"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate"
            itemNum=" item-3"
          />
        </div>
        <svg className="expertise-wavy-svg" width="1440" height="380" viewBox="0 0 1440 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 380H1440V160.264C1347 184.783 1243.52 1.86441 1112.38 0.02063C961.414 -2.10189 877.509 
          160.264 726.5 160.264C575.491 160.264 494.323 -1.42032 343.333 0.02063C206.406 1.32739 108 182.42 0 
          160.264V380Z" fill="white"/>
        </svg>

      </div>
    </div>
  );
}

export default ExpertiseHeader;