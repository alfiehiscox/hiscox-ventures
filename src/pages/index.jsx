import React from "react";
import {Layout} from '../components/layout';
import IndexHeader from '../components/index-header';
import {TabsLarge, Title} from '../components/tabs/TabsLarge';
import IndexValues from '../components/index-values';
import SingleProfile from '../components/single-profile';
import Teamwork from '../images/values-img/teamwork.svg';
import IndexAchievements from '../components/index-achievements';
import Building from '../images/building.png';

// markup
const IndexPage = () => {
  const valuesTitle = <Title 
                    title="We Are What We Value" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sagittis velit, et consequat felis laoreet aliquet. Maecenas pellentesque purus quam, eget lobortis nulla feugiat ac." 
                    color="white" />;

  const achievementsTitle = <Title 
                    title="Our achievements span sectors" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sagittis velit, et consequat felis laoreet aliquet. Maecenas pellentesque purus quam, eget lobortis nulla feugiat ac." 
                    color="white" />;


  return (
    <Layout>
      <IndexHeader 
        title="Hiscox Ventures"
        ltd="true"
        tagline="A something consultancy and friendly company"
        image={Building}
        gradient={true}
      />
      <TabsLarge />
      <IndexValues 
        title={valuesTitle}
      />
      <SingleProfile
        img={Teamwork}
        title="From our family to yours"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sagittis velit, et consequat felis laoreet aliquet. Maecenas pellentesque purus quam, eget lobortis nulla feugiat ac."
        link="Meet the family"
        to="people"
      />
      <IndexAchievements 
        title={achievementsTitle}
      />
    </Layout>
  )
}

export default IndexPage
