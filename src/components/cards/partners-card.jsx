import React from 'react';
import BluJay from '../../images/company-logos/BluJay.jpg';
import Egress from '../../images/company-logos/Egress.jpeg';
import ByBox from '../../images/company-logos/ByBox.jpeg';
import Dematic from '../../images/company-logos/Dematic.png';
import { Link } from 'gatsby';

export default function PartnersCard(props) {
  return (
    <div className="partners-card-container">
      <div className="partners-card-content">
        <h3>Some Companies We’ve Work With:</h3>
        <p>We’ve had the great fortune to work with some of the best companies in their sector. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. See more about our expertise <Link>here</Link>.</p>
        <div className="companies">
          <CompanyImage image={BluJay} name="BluJay" />
          <CompanyImage image={Dematic} name="Dematic"/>
          <CompanyImage image={ByBox} name="ByBox" />
          <CompanyImage image={Egress} name="Egress" />
        </div>
      </div>
    </div>
  );
}

const CompanyImage = (props) => {
  return (
    <div className="company-image">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
    </div>  
  );
}