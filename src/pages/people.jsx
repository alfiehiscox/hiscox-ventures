import React from 'react';
import { Layout } from '../components/layout';
import '../components/styles/people-page.scss';
import { Title } from '../components/tabs/TabsLarge';
import { PeopleCardDefault, PeopleCardDetail } from '../components/cards/people-card';
import FamilyImage from '../images/family.png';
import Martin from '../images/Dad-1.png';
import BluJay from '../images/company-logos/BluJay.jpg';
import ByBox from '../images/company-logos/ByBox.jpeg';
import Dematic from '../images/company-logos/Dematic.png';
import LSRetail from '../images/company-logos/LSRetail.png';

const PeoplePage = () => {
  return (
    <Layout>
      <div className="people-header">
        <Title 
          title="Our People"
          description=""
          color="white"
        />
        {/*<PeopleCardDefault
          image={FamilyImage}
          name="Some Catchy Title"
          description="We are proud to have a family team that supports the running of Hiscox Ventures. 
          Overseen, by Martin Hiscox the team covers a wide variety of different sectors 
          and therefore allows HVL to consult on a wide array of industries."
          info="See profiles of all our people by clicking on their image below: "
         />*/}
         <PeopleCardDetail 
          image={Martin}
          name="Martin Hiscox"
          content1='The founder of Hiscox Ventures and a...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque pretium risus sed dictum viverra.'
          content2="Proin quis massa vitae tortor porttitor bibendum eget 
                    quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
                    eros blandit. Integer feugiat consectetur nunc, 
                    sit amet sollicitudin metus interdum in."
          companyInfo={
            [{
                image: BluJay,
                name: "BluJay",
                description: `Proin quis massa vitae tortor porttitor bibendum eget 
                    quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
                    eros blandit.`
                }, 
              {
                image: ByBox,
                name: "ByBox",
                description: `Proin quis massa vitae tortor porttitor bibendum eget 
                    quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
                    eros blandit.`
              }, 
              {
                image: Dematic,
                name: "Dematic",
                description: `Proin quis massa vitae tortor porttitor bibendum eget 
                    quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
                    eros blandit.`
              }, 
              {
                image: LSRetail,
                name: "LSRetail",
                description: `Proin quis massa vitae tortor porttitor bibendum eget 
                    quis diam. Sed auctor eros nec quam pulvinar, non vehicula 
                    eros blandit.`
              }
            ]}
          />
      </div>
    </Layout>
  );
}

export default PeoplePage;

// Things to include in the Card Details
// Image
// Name
// Content 1: For profile
// Content 2: For profile 
// Company Info Array of Hashes: For Current Roles
// Company Info Array of Hashes: For Past Roles







