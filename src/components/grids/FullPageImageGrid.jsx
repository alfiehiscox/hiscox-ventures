import React, { useState } from 'react';
import '../styles/fullpage-image-grid.scss';

const FullPageImageGrid = (props) => {
  const [currentImage, setCurrentImage] = useState(props.data[0].label)

  const images = props.data.map((elem) => {
      return (
        <button key={elem.label} onClick={() => {setCurrentImage(elem.label)}} style={{backgroundColor: "#202021"}}>
          <img className="fp-grid-image" src={elem.image} alt={elem.label} />
        </button>
      );
  })

	return (
		<div className="fullpage-image-grid">
      {images}
      <div className="fp-grid-content-area">
        {props.data.map((elem) => {
          if (elem.label !== currentImage) return undefined;
          return (
            <div key={elem.label} >
              <h3>{elem.content.title}</h3>
              <p>{elem.content.description}</p>
            </div>
          );
        })}
      </div>
    </div>
	);
}

export default FullPageImageGrid;