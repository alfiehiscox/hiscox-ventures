import React from 'react';
import './tabs-styles/TabsCard.scss'

function TabsCard(props) {
	return (
		<div className='tabs-card'>
			<div className='tabs-image'>
				<img src={props.image} alt={props.title} />
			</div>
			<div className='tabs-card-content'>
				<div>
          <h2 className='title'>{props.title}</h2>
				  <p className='content'>{props.content}</p>
				  <a className='link' href={props.linkURL}>See more on {props.title}</a>
        </div>
			</div>
		</div>
	);
}

export default TabsCard;
