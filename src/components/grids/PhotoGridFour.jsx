import React, {useState} from 'react';
import '../styles/photo-grid-four.scss';

const PhotoGridFour = (props) => {
  const [activeImage, setActiveImage] = useState(props.images[0].label);
  
  const images = props.images.map((image) => {
    if (image.label == activeImage) {
      return <img src={image.image} alt={image.label} className="pg-four-image pg-four-active-image" />
    } else {
      return (
        <button style={{backgroundColor: "#202021"}} onClick={() => setActiveImage(image.label)}>
          <img src={image.image} alt={image.label} className="pg-four-image" />
        </button>
      );
    }
  })

  return (
    <div className="pg-four-grid">
      {images}
    </div>
  );
}

export default PhotoGridFour;


// [Deer, Museum, Sculpter, Garden]