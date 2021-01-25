import React from 'react';
import '../components/styles/housing.scss';
import { Layout } from '../components/layout';
import HousingTabs from '../components/HousingTabs';
import PhotoGridFour from '../components/grids/PhotoGridFour';
import "@fontsource/quicksand"

// Images
import Deer from '../images/renovations-images/deer.jpeg';
import Museum from '../images/renovations-images/museum.jpeg';
import Sculpter from '../images/renovations-images/sculpter.jpeg';
import Garden from '../images/renovations-images/garden.jpeg';

const HousingPage = () => {
  return (
    <Layout
      dark={true}
    >
      <div className="housing-page-container">
        <h1 className="housing-main-title" >Housing Development</h1>
        <p className="housing-main-discription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed at ligula non nunc laoreet dapibus eu vitae justo. 
          Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
          interdum tincidunt tellus eleifend id. 
          Aenean volutpat ipsum porta justo finibus vehicula.
        </p>
        <HousingTabs>
          <div>
            <h2 className="page-title">Period Renovations</h2>
            <PhotoGridFour
              images={[{label: "deer", image: Deer}, 
                       {label: "museum", image: Museum}, 
                       {label: "sculpter", image: Sculpter}, 
                       {label: "garden", image: Garden}]}
            />
          </div>
          <div>
            <h2 className="page-title">Hard Wood Construction</h2>
          </div>
          <div>
            <h2 className="page-title">Landscaping</h2>
          </div>
        </HousingTabs>
      </div>
    </Layout>
  );
}

export default HousingPage;
