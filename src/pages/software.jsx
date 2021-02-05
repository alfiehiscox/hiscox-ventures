import React, {useState, useEffect} from 'react';
import {Layout} from '../components/layout';
import {SoftwareScroller, SoftwareContent} from '../components/softwarePage';
import SoftwareData from '../data/software-data';

const SoftwarePage = () => {
  const [viewport, setViewport] = useState(typeof window !== `undefined` ? window.innerWidth : null);

  useEffect(() => {
    window.addEventListener("resize", () => setViewport(window.innerWidth));
  });

  return (  
    <Layout dark={true} >
      <div className="housing-page-container">
        <h1 className="housing-main-title" >Software</h1>
        <p className="housing-main-discription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed at ligula non nunc laoreet dapibus eu vitae justo. 
          Maecenas eu velit mauris. Vivamus rhoncus vulputate orci, 
          interdum tincidunt tellus eleifend id. 
          Aenean volutpat ipsum porta justo finibus vehicula.
        </p>
        <h4 className="software-intro" >Below are some of the software projects that we have been apart of: </h4>
        <SoftwareScroller viewport={viewport}>
          {SoftwareData.map((data) => {
            return (
              <SoftwareContent 
                label={data.label}
                introduction={data.intro}
                companies={data.companies}
                key={data.label}
              />
            );
          })}  
        </SoftwareScroller>
      </div>
    </Layout>
  );
}

export default SoftwarePage;
