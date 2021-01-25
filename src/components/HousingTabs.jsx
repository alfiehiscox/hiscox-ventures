import React, {useState} from 'react';
import './styles/housing-tabs.scss';

const HousingTabs = (props) => {
  const [position, setPostion] = useState(0);

  const handleTabClick = (label) => {
    const index = (33.3 * (label - 1));
    // console.log(index);
    setPostion(index)
  }

  return (
    <div style={{marginTop: "60px"}}>
      <div className="housing-tabs">
        <Tab onClick={handleTabClick} label={1} >Homestead</Tab>
        <Tab onClick={handleTabClick} label={2}>Barn</Tab>
        <Tab onClick={handleTabClick} label={3}>Le Magerie</Tab>
      </div>
      <div className="housing-window">
        <div 
          className="housing-carousel-container"
          style={{transform: `translateX(-${position}%)`}}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
} 

const Tab = (props) => {
  return (
    <button style={{backgroundColor: "#202021"}} onClick={() => {props.onClick(props.label)}}>{props.children}</button>
  );
}

export default HousingTabs;
