import React, { useState, useEffect } from 'react';
import '../styles/small-carousel.scss';
import arrowRight from '../../images/arrowRight.svg';

const SmallCarouselFour = (props) => {
  const [position, setPosition] = useState(0);
  const [hovered, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(props.elements[0].label);

  const handleSlide = (directionPercent) => {
    const newPosition = position + directionPercent
    if (newPosition > 75) {
      setPosition(0);
    } else if (newPosition < 0 ) {
      setPosition(75);
    } else {
      setPosition(newPosition);
    }
  }

  useEffect(() => {
    const index = position / 25;
    setCurrentImage(props.elements[index].label)
  }, [position, props.elements]);

  const hoverStyle = hovered ? {display: 'flex'} : {display: 'none'};

  const images = props.elements.map((image) => {
    return (
      <img key={image.label} className="sm-c-image" src={image.image} alt={image.label} />
    );
  });

  return (
    <div className="small-carousel-container">
      <section role="button" tabIndex={-1} className="small-carousel-window" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div>
          <button className="sm-c-nav sm-c-nav-left" style={hoverStyle} onClick={() => handleSlide(-25)}>&lt;</button>
          <div 
            className="sm-c-grid"
            style={{transform: `translateX(-${position}%)`}}
          >
            { images }
          </div>
          <button className="sm-c-nav sm-c-nav-right" style={hoverStyle} onClick={() => handleSlide(25)}>></button>
        </div>
      </section>
      <div className="sm-c-content-container">
        {props.elements.map((elem) => {
          if (elem.label !== currentImage ) return undefined;
          return (
            <div key={elem.label}>
              <div className="sm-c-title-container">
                <h3 className="sm-c-title">{elem.content.title}</h3>
                <button className="sm-c-next-button" onClick={() => handleSlide(25)} >
                  <img src={arrowRight} alt="Arrow Right" />
                </button>
              </div>
              <p className="sm-c-description">{elem.content.description}</p>
              <p className="sm-c-description">{elem.content.description2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SmallCarouselFour;
