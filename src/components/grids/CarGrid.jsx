import React, { useState, useEffect } from 'react';
import '../styles/cars-grid.scss';
import PhotoGridFour from './PhotoGridFour';
import SmallCarouselFour from './smallCarouselFour';

// Data
import CarsData from '../../data/cars-data';

const CarGrid = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [activeCar, setActiveCar] = useState();

  useEffect(() => {
    if (showModal !== false) {
      document.querySelector('body').scroll({top: 80, behavior: 'smooth'});
    } 
  }, [showModal]);

  return (
    <CarModal handleOpen={setShowModal} open={showModal} car={activeCar}>
      <div className="cars-grid">
        {CarsData.map((car) => {
          return (
            <CarCard
              key={car.label}
              image={car.gridImage}
              label={car.label}
              date={car.date}
              handleModal={setShowModal}
              handleCar={setActiveCar}
            />
          );
        })}
      </div>
    </CarModal>
  );
}

const CarCard = (props) => {
  const handelClick = (label) => {
    props.handleCar(label);
    props.handleModal(true);
  }

  return (
    <button className="car-card" onClick={() => handelClick(props.label)} >
      <img className="car-card-grid-image" src={props.image} alt={props.label} />
      <h3>{props.label}</h3>
      <p>{props.date}</p>
    </button>
  );
}

const CarModal = (props) => {
  if (props.open) {
    return (
      <div>
        <div className="car-modal-container">
          <div className="car-modal-content">
            {CarsData.map((car) => {
              if (car.label !== props.car) return undefined;
              return (
                <CarModalCard car={car} handleOpen={props.handleOpen}/>
              );
            })}
          </div>
        </div>
        {props.children}
      </div>
    );
  }
  return props.children
}

const CarModalCard = (props) => {
  return (
    <div>
      <div className="cm-c-header-bar">
        <button onClick={() => props.handleOpen(false)} >X</button>
      </div>
      <div className="cm-c-content-container">
        <h3 style={{textAlign: 'center'}}>{props.car.label}</h3>
        <div className="cm-c-content-header">
          <PhotoGridFour images={props.car.images} right={true} />
          <div className="cm-c-stats">
            <p>Model:</p>
            <p>Year: {props.car.date}</p>
            <p>Mileage: N/A</p>
            <p>etc</p>
          </div>
        </div>
        <div className="cm-c-car-history">
          <h3>This Car's History</h3>
          <div className="cm-c-car-history-content">
            <div>
              <h4>{props.car.carHistory.title}</h4>
              <p>{props.car.carHistory.description}</p>
            </div>
            <img src={props.car.carHistory.image} alt={props.car.carHistory.title} />
          </div>
        </div>
        <div className="cm-c-brand-history">
          <h3>History Of The Brand</h3>
          <SmallCarouselFour 
            elements={props.car.brandHistory}
          />
        </div>
      </div>
    </div>
  );
}

export default CarGrid;
