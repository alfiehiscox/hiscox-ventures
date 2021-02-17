import React from 'react';
import {Layout} from '../components/layout';
import FounderCard from '../components/cards/founder-card';
import PartnersCard from '../components/cards/partners-card';
import { GeneralCard } from '../components/cards/general-cards';
import Family from '../images/family.png';
import DadCar from '../images/dad-car.png';
import '../components/styles/about-page.scss';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-header">
        <div className="about-header-title-container">
          <h1 className="about-header-title">About us</h1>
        </div>
        <svg className="wiggle2" width="1443" height="201" viewBox="0 0 1443 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M175.5 1.5C93.9707 1.3955 80.4974 67.5639 1 67.5639V200.064H1442V67.5639C1369.5 67.5639 1346.03 2.32095 1264.5 1.5C1181.65 0.66571 1167.84 66.0695 1085 67.5639C999.655 69.1034 977.801 -1.67372 892.5 1.5C812.178 4.48844 804.338 65.049 724 67.5639C639.519 70.2084 618.522 1.39915 534 1.5C449.646 1.60066 437.833 69.4447 353.5 67.5639C272.156 65.7497 256.864 1.60429 175.5 1.5Z" fill="white" stroke="white"/>
        </svg>
      </div>
      <div className="our-history">
        <h2>Our History</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce blandit euismod nisl a vulputate. Pellentesque mi lectus, 
        aliquam vitae dapibus imperdiet, mollis ornare odio. Aliquam erat volutpat. 
        Vestibulum interdum lacinia interdum.</p>
        <p>Quisque rhoncus lorem eget purus ornare viverra. 
        Pellentesque vel mauris eget dui pretium imperdiet. 
        Aliquam magna odio, fermentum a nulla vitae, blandit iaculis lorem. 
        Proin scelerisque ligula vitae neque hendrerit finibus. 
        Praesent non malesuada sapien, sit amet semper neque</p>
      </div>
      <FounderCard />
      <PartnersCard />
      <GeneralCard
        title="Homebase"
        content="On a regular day you can find us... Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Fusce blandit euismod nisl a vulputate. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce blandit euismod nisl a vulputate."
        link="housing"
        image={DadCar}
      />
      <GeneralCard 
        title="Meet the family"
        content="We’re proud to be... Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit. Fusce blandit euismod nisl a vulputate. 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="people"
        image={Family}
      />
    </Layout>
  );
}

export default AboutPage;