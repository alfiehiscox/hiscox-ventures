import React from "react";
import {Layout} from '../components/layout';
import IndexHeader from '../components/index-header';
import TabsLarge from '../components/tabs/TabsLarge';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <IndexHeader 
        title="Hiscox Ventures"
        ltd="true"
        tagline="A something consultancy and friendly company"
      />
      <TabsLarge />
    </Layout>
  )
}

export default IndexPage
