import React from 'react';
import '../components/styles/housing.scss';
import { Layout } from '../components/layout';
import HousingTabs from '../components/HousingTabs';
import PhotoGridFour from '../components/grids/PhotoGridFour';
import "@fontsource/quicksand";
import SmallCarouselFour from '../components/grids/smallCarouselFour';
import FullPageImageGrid from '../components/grids/FullPageImageGrid';

// Data
import Data from '../data/renovation-18th-data';
import LandscapingData from '../data/landscaping-data';

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
          <PeriodRenovations pageTitle="Period Renovations" />
          <PeriodRenovations pageTitle="Hard Wood Construction" />
          <Landscaping pageTitle="Landscaping" />
        </HousingTabs>
      </div>
    </Layout>
  );
}

const PeriodRenovations = (props) => {
  return (
    <div>
      <h2 className="page-title">{props.pageTitle}</h2>
      <div className="renovation-intro">
        <div className="renovation-intro-content">
          <h3>A Love to Build</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed at ligula non nunc laoreet dapibus eu vitae justo. 
            Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
            interdum tincidunt tellus eleifend id. Aenean volutpat
            ipsum porta justo finibus vehicula.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed at ligula non nunc laoreet dapibus eu vitae justo. 
            Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
            interdum tincidunt tellus eleifend id. Aenean volutpat 
            ipsum porta justo finibus vehicula.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed at ligula non nunc laoreet dapibus eu vitae justo. 
            Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
            interdum tincidunt tellus eleifend id. Aenean volutpat
            ipsum porta justo finibus vehicula.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed at ligula non nunc laoreet dapibus eu vitae justo. 
            Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
            interdum tincidunt tellus eleifend id. Aenean volutpat 
            ipsum porta justo finibus vehicula.
          </p>
        </div>
        <PhotoGridFour
          images={Data}
        />
      </div>
      <div className="renovation-body-1">
        <h3>Mixing The Modern With The Classical</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed at ligula non nunc laoreet dapibus eu vitae justo. 
            Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
            interdum tincidunt tellus eleifend id. Aenean volutpat
            ipsum porta justo finibus vehicula.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed at ligula non nunc laoreet dapibus eu vitae justo. 
            Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
            interdum tincidunt tellus eleifend id. Aenean volutpat 
            ipsum porta justo finibus vehicula.</p>
        <PhotoGridFour
          images={Data}
          right={true}
        />
      </div>
      <div className="renovation-body-1">
        <h3>18th Century Architecture</h3>
        <SmallCarouselFour 
          elements={Data}
        />
      </div>
    </div>
  );
}

const Landscaping = (props) => {
  return (
    <div>
      <h2 className="page-title">{props.pageTitle}</h2>
      <FullPageImageGrid 
        data={LandscapingData}
      />
    </div>
  );
}

export default HousingPage;
