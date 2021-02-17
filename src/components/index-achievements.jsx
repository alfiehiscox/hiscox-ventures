import React from 'react';
import {Link} from 'gatsby';

const achData = [
  {
    title: "Housing",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "housing"
  },
  {
    title: "Car Restoration",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "restoration"
  },
  {
    title: "Software",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "software"
  },
  // {
  //   title: "Cinematography",
  //   content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   link: "cinematography"
  // }
];

export default function IndexAchievements(props) {
  const card = achData.map((data) => <AchievementsCard key={data.title} title={data.title} content={data.content} />)

  return (
    <div className="i-achievements-container">
      <div className="ach-title">{props.title}</div>
      <div className="ach-card-container">
        {card}
      </div>
    </div>
  );
}

const AchievementsCard = (props) => {
  return (
    <div className="ach-card">
      <div className="ach-card-title">{props.title}</div>
      <div className="ach-card-content">{props.content}</div>
      <Link to={"/" + props.link + "/"} className="ach-card-link">See more {props.title}</Link>
    </div>
  );
}