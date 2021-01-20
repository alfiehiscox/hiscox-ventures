import React, { useState }from 'react';
import { Layout } from '../components/layout';
import '../components/styles/people-page.scss';
import { Title } from '../components/tabs/TabsLarge';
import { PeopleCardDefault, PeopleCardDetail } from '../components/cards/people-card';
import FamilyImage from '../images/family.png';
import peopleData from '../data/people-data';

const PeoplePage = () => {
  const [currentPerson, setCurrentPerson] = useState("default");

  let person;
  if (currentPerson === "default") {
    person = <PeopleCardDefault
          image={FamilyImage}
          name="Some Catchy Title"
          description="We are proud to have a family team that supports the running of Hiscox Ventures. 
          Overseen, by Martin Hiscox the team covers a wide variety of different sectors 
          and therefore allows HVL to consult on a wide array of industries."
          info="See profiles of all our people by clicking on their image below: " />
  } else {
    const target = peopleData[currentPerson];
    person = <PeopleCardDetail
          image={target.image}
          name={target.name}
          profileContent1={target.profileContent1}
          profileContent2={target.profileContent2}
          companyInfo={target.companyInfo}
          historyInfo={target.historyInfo}
    />
  }

  return (
    <Layout>
      <div className="people-header">
        <Title 
          title="Our People"
          description=""
          color="white"
        />
        { person }
      </div>
      <div className="people-grid-container">
        <p className="people-title">Meet the Family</p>
        <p>Click on a picture to find out more information</p>
        <div className="people-grid">
          { Object.keys(peopleData).map(key => {
            return (
              <ProfileThumbnail
                label={key}
                image={peopleData[key].image}
                name={peopleData[key].name}
                title={peopleData[key].title} 
                key={key}
                clickHandler={setCurrentPerson}
              />
            );
          })}

        </div>
      </div>
    </Layout>
  );
}

const ProfileThumbnail = (props) => {
  return (
    <div className="thumbnail-container" onClick={() => props.clickHandler(props.label)}>
      <img src={props.image} alt={props.name} />
      <h4 className="thumbnail-name">{props.name}</h4>
      <p className="thumbnail-title">{props.title}</p>
    </div>
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







