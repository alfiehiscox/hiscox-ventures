import React from 'react';
import {Layout} from '../components/layout';
import CarGrid from '../components/grids/CarGrid';

const CarsPage = () => {
  return (
    <Layout
      dark={true}
    >
      <div className="housing-page-container">
        <h1 className="housing-main-title" >Classic Car Renovations</h1>
        <p className="housing-main-discription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed at ligula non nunc laoreet dapibus eu vitae justo. 
          Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
          interdum tincidunt tellus eleifend id. 
          Aenean volutpat ipsum porta justo finibus vehicula.
        </p>
        <br />
        <p className="housing-main-discription">
          Click on a car below to see it in more detail
        </p>
        <CarGrid/>
      </div>
    </Layout>
  );
}

export default CarsPage;
