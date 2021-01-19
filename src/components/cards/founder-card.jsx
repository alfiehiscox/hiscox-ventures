import React from 'react';
import { Link } from 'gatsby';
import '../styles/cards.scss';
import FounderImage from '../../images/Dad-1.png';

export default function FounderCard(props) {
  return (
    <div className="founder-card">
      <div className="info-section">
        <h2>Our Founder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Fusce blandit euismod nisl a vulputate. Pellentesque mi lectus, 
           aliquam vitae dapibus imperdiet, mollis ornare odio.  
           Pellentesque vel mauris eget dui pretium imperdiet. 
           Aliquam magna odio, fermentum a nulla vitae, blandit iaculis lorem. 
           Proin scelerisque ligula vitae neque hendrerit finibus.</p>
        <Link className="link">Learn More About Martin</Link>
      </div>
      <div className="image-container">
        <img className="founder-image" src={FounderImage} alt="Founder Martin Hiscox" />
      </div>
    </div>
  );
}