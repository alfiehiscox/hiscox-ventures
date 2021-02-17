import React from 'react';
import { Link } from 'gatsby';
import '../styles/cards.scss';

const GeneralCard = (props) => {
  return (
    <div className="general-card">
      <div className="general-card-content">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <Link to={'/'+ props.link} className="link">See More</Link>
      </div>
      <div className="general-card-image-cont">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
}

// const GeneralCardReversed = (props) => {
//   return (
//     <div className="general-card">
//       <div style={{borderRadius: "20px 0 0 20px"}} className="general-card-image-cont">
//         <img style={{borderRadius: "20px 0 0 20px"}} src={props.image} alt={props.title} />
//       </div>
//       <div className="general-card-content">
//         <h3>{props.title}</h3>
//         <p>{props.content}</p>
//         <Link>See More</Link>
//       </div>
//     </div>
//   );
// }

export { GeneralCard }