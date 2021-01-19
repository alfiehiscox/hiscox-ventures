import React from 'react';
import {Layout} from '../components/layout';
import IndexHeader from '../components/index-header';
import Forest from '../images/ForestPhoto.png';
import FounderCard from '../components/cards/founder-card';
import PartnersCard from '../components/cards/partners-card';
import { GeneralCard } from '../components/cards/general-cards';
import Family from '../images/family.png';
import DadCar from '../images/dad-car.png';

const AboutPage = () => {
  return (
    <Layout>
      <IndexHeader 
        title="Discover More About Us"
        ltd="false"
        tagline=""
        image={Forest}
        gradient={false}
      />
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
        link=""
        image={DadCar}
      />
      <GeneralCard 
        title="Meet the family"
        content="We’re proud to be... Lorem ipsum dolor sit amet, 
                 consectetur adipiscing elit. Fusce blandit euismod nisl a vulputate. 
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link=""
        image={Family}
      />
    </Layout>
  );
}

export default AboutPage;