import React, {useState} from 'react';
import '../components/styles/housing.scss';
import { Layout } from '../components/layout';
import HousingTabs from '../components/HousingTabs';
import "@fontsource/quicksand"

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
            <h2 className="page-title" >The Homestead</h2>
          </div>
          <div>
            <h2 className="page-title" >Barn Conversion</h2>
          </div>
          <div>
            <h2 className="page-title" >Le Magerie Bas</h2>
          </div>
        </HousingTabs>

      </div>
    </Layout>
  );
}

export default HousingPage;
