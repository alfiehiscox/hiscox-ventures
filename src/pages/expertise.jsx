import React from 'react';
import { Layout } from '../components/layout';
import ExpertiseHeader from '../components/expertise-header';
import {Title} from '../components/tabs/TabsLarge';
import ExpGrid from '../components/expgrid/expgrid';

const ExpertisePage = () => {
  return (
    <Layout>
      <ExpertiseHeader />
      <Title
        title="We’ve Helped Many"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce blandit euismod nisl a vulputate.Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Fusce blandit euismod nisl a vulputate. 
        Click on a company to expand."
        color="black"
       />
       <ExpGrid />
    </Layout>
  );
};

export default ExpertisePage;