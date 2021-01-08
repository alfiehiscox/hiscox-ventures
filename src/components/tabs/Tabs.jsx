import React from 'react';
import './tabs-styles/Tabs.scss';

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.children[0].props.label,
		};
	}

	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab });
	}

	render() {
		const {
				onClickTabItem,
				props: {
					children,
				},
				state: {
					activeTab,
				}
			} = this;

			return (
				<div className='tabs'>
					<div className='tab-list'>
						{children.map((child) => {
							const { label } = child.props;

							return (
								<Tab 
									activeTab={activeTab}
									key={label}
									label={label}
									onClick={onClickTabItem}
								/>
							);
						})}
					</div>
					<div className="tab-content">
						{children.map((child) => {
							if (child.props.label !== activeTab) return undefined;
							return child.props.children;
						})}
					</div>
				</div>
			);
	};
}

class Tab extends React.Component {
	onClick = () => {
		const {label, onClick} = this.props;
		onClick(label);
	}

	render() {
		const {
			onClick,
			props: {
				activeTab,
				label,	
			},
		} = this;

		let className = 'tab-list-item';

		if (activeTab === label ) {
			className += ' tab-list-active';
		} 

		return (
			<div 
        role="button"
        tabIndex={-1}
				className={className}
				onClick={onClick}
        onKeyDown={onClick}
			>
				{label}
			</div>
		);
	}
}

export default Tabs;