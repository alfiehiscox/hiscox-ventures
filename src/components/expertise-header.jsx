import React from 'react';
import './styles/expertise-header.scss';
import { Title } from './tabs/TabsLarge';
import ExpertiseCard from './cards/expertise-card';
import Expertise from '../images/values-img/expertise.svg';
import Results from '../images/values-img/results.svg';
import Teamwork from '../images/values-img/teamwork.svg';

const ExpertiseHeader = (props) => {
  return (
    <div>
      <div className="nav-bar-cover"></div>
      <div className="header-background">
        <Title 
          title="Our Expertise"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Fusce blandit euismod nisl a vulputate.Lorem ipsum dolor 
                       sit amet, consectetur adipiscing elit. 
                       Fusce blandit euismod nisl a vulputate"
          color="white"
        />
        <div className="outer-expertise-card-container">
          <ExpertiseCard 
            image={Expertise}
            title="Non-Execs"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate"
          />
          <ExpertiseCard 
            image={Results}
            title="Private Equity"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate"
          />
          <ExpertiseCard 
            image={Teamwork}
            title="Consultancy"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Fusce blandit euismod nisl a vulputate"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpertiseHeader;