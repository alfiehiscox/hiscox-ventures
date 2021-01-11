import React from 'react';
import './tabs-styles/TabsLarge.scss';
import TabsData from './tabs-data/TabsLargeData';
import Tabs from './Tabs';
import TabsCard from './TabsCard';

class TabsLarge extends React.Component {
  

  render() {
    return (
      <div className="container">
        <Title
          title="Our Expertise"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Donec fringilla, nunc nec ultrices posuere, diam lacus
                       ornare enim, sed aliquet ex purus in sapien. Fusce at lacus mi."
          color="black"
        />
        <Tabs>
          {TabsData.map((data) => {
            return (
              <div label={data.title} key={data.title}>
                <TabsCard 
                  title={data.title}
                  content={data.content}
                  image={data.image}
                  linkURL={data.linkURL}
                />
              </div>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

function Title(props) {
  return (
    <div style={{color: props.color}}>
      <div className="title">{props.title}</div>
      <hr className="title-line" />
      <div className="title-description">{props.description}</div>
    </div>
  );
}

export { TabsLarge, Title };
