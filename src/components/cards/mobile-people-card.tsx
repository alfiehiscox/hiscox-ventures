import React, { useState } from 'react';
import '../styles/mobile-people-card.scss';

const MobilePeopleCard = (props) => {
  

  return (
    <div className="m-people-card">
      <img className="m-main-image" src={props.image} alt="Martin Hiscox" />

    </div>
  );
}

export default MobilePeopleCard;

//  Stuff to use as props
//  image={target.image}
//  name={target.name}
//  profileContent1={target.profileContent1}
//  profileContent2={target.profileContent2}
//  companyInfo={target.companyInfo}
//  historyInfo={target.historyInfo}


// https://www.npmjs.com/package/react-swipeable
// Using the swipeable npm package gonna test it out