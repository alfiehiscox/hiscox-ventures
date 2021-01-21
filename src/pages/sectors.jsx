import React from 'react';
import { Layout } from '../components/layout';
import MobilePeopleCard from '../components/cards/mobile-people-card.tsx';
import peopleData from '../data/people-data';

const SectorsPage = () => {
  const person = peopleData['martinHiscox'];
  return (
    <Layout>
      <div className="people-header">
        <MobilePeopleCard
          image={person.image}

        />
    
      </div>
    </Layout>
  );
} 

export default SectorsPage;