import React, {useState} from 'react';
import '../styles/photo-grid-four.scss';

const PhotoGridFour = (props) => {
  const [activeImage, setActiveImage] = useState(props.images[0].label);
  let style, grid;
  if (props.right) {
    grid = "pg-four-grid-right"
    style = "pg-four-active-image-right"
  } else {
    grid = "pg-four-grid"
    style = "pg-four-active-image"
  }
  
  const images = props.images.map((image) => {
    if (image.label === activeImage) {
      return <img key={image.label} src={image.image} alt={image.label} className={`pg-four-image ${style}`} />
    } else {
      return (
        <button key={image.label} style={{backgroundColor: "#202021"}} onClick={() => setActiveImage(image.label)}>
          <img src={image.image} alt={image.label} className="pg-four-image" />
        </button>
      );
    }
  })

  return (
    <div className={grid}>
      {images}
    </div>
  );
}

export default PhotoGridFour;


// [Deer, Museum, Sculpter, Garden]