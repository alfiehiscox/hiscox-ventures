import React, {useState, useEffect} from 'react';

function PeopleCardDefault(props) {
  return (
    <div className="people-card default">
      <img className="main-image" src={props.image} alt={props.name} />
      <div className="people-card-content">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <p>{props.info}</p>
      </div>
    </div>
  );
}

const PeopleCardDetail = (props) => {
  return (
    <div className="people-card">
      <img className="main-image" src={props.image} alt={props.name} />
      <PeopleTabs images={false}>
        <div label="Profile">
          <div className="profile-card">
            <h2>{props.name}</h2>
            <p>{props.profileContent1}</p>
            <p>{props.profileContent2}</p>
          </div>
        </div>
        <div label="Current Roles">
          <CurrentRoles 
            introCurrentRoles="Martin currently has non-executive roles at the following companies:"
            companyInfo={props.companyInfo}
          />
        </div>
        <div label="Work History">
          <CurrentRoles 
            introCurrentRoles="Martin’s previous roles:"
            companyInfo={props.historyInfo}
          />
        </div>
        <div label="Interests">
          <div>
            <h1>Hello from Interests</h1>
          </div>
        </div>
      </PeopleTabs> 
    </div>
  );
}

const PeopleTabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const tabDisplay = ( props.images ? "people-tabs-images" : "people-tabs")
  const tabDisplayList = (props.images ? "people-tab-list-images" : "people-tab-list")

  useEffect(() => {
    setActiveTab(props.children[0].props.label);
  }, [props.children]);

  return (
    <div className={tabDisplay}>
      <div className={tabDisplayList}>
        {props.children.map((child) => {
          const tabActive = (activeTab !== child.props.label ? "" : " people-tab-active" ) 
          const imageActive = (activeTab !== child.props.label ? "" : " people-image-active" ) 
          if (props.images) {
            return (
              <img 
                key={child.props.label} 
                className={"people-company-images" + imageActive}
                onClick={() => setActiveTab(child.props.label)} 
                src={child.props.image} 
                alt={child.props.label} />
            );
          } else {
            return (
              <button className={"people-card-tabs-button" + tabActive} key={child.props.label} onClick={() => setActiveTab(child.props.label)}>{child.props.label}</button>
            );
          }
        })}
      </div>
      <div className="people-tab-content">
        {props.children.map((child) => {
          if (activeTab !== child.props.label) return undefined;
          return child.props.children
        })}
      </div>
    </div>
  );
}

const CurrentRoles = (props) => {
  return (
    <div className="current-roles-card">
      <p>{props.introCurrentRoles}</p>
      <PeopleTabs
        images={true}>
        {props.companyInfo.map((info) => {
          console.log(info.name);
          return (
            <div key={info.name} label={info.name} image={info.image}>
              <h4>{info.name}</h4>
              <p>{info.description}</p>
            </div>
          );
        })}
      </PeopleTabs>
    </div>
  );
}

export { PeopleCardDefault, PeopleCardDetail };