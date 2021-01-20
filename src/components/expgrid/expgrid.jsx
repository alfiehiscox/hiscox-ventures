import React from 'react';
import './expgrid-styles.scss';
import { CSSTransition } from 'react-transition-group';
import data from './expgrid-data/expgrid-company-data';

export default class ExpGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: "",
      activeRow: "",
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleScroll = (item) => {
    const elem = document.getElementById(item);
    elem.scrollIntoView({behavior: 'smooth'});
  }

  handleClick(gridItem, rowNum) {
    if (this.state.currentItem !== gridItem ) {
      this.setState({currentItem: gridItem});
      this.setState({activeRow: rowNum});
      setTimeout(() => this.handleScroll(gridItem), 300);
    } else {
      this.setState({currentItem: ""});
      this.setState({activeRow: ""});
    }
  }

  render() {
    return (
      <div className="expgrid-container">
        <GridRow handleClick={this.handleClick} 
                 currentItem={this.state.currentItem}
                 rowNum="row1"
                 activeRow={this.state.activeRow}>
        {data.slice(0, 4).map((company) => {
          return(
            <div title={company.title} 
                 image={company.image} 
                 key={company.title} >
              <InfoCard
                title={company.title}
                image={company.image}
                content={company.content}
              />
            </div>
          );
        })}
        </GridRow>
        <GridRow handleClick={this.handleClick} 
                 currentItem={this.state.currentItem}
                 rowNum="row2"
                 activeRow={this.state.activeRow}>
        {data.slice(4, 8).map((company) => {
          return(
            <div title={company.title} 
                 image={company.image} 
                 key={company.title}>
              <InfoCard
                title={company.title}
                image={company.image}
                content={company.content}
              />
            </div>
          );
        })}
        </GridRow>
      </div>
    );
  }
}

class GridRow extends React.Component {
  render() {
    return (
      <div className="exp-grid">
        <div className="grid-row">
          {this.props.children.map((child) => {
            return (
              <GridItem
                image={child.props.image} 
                title={child.props.title}
                rowNum={this.props.rowNum} 
                handleClick={this.props.handleClick}
                key={child.props.title}
              />
            )
          })}
        </div>
        <CSSTransition
          in={this.props.rowNum === this.props.activeRow}
          classNames="container-transitions"
          timeout={400}
        >
            <div className='grid-item-content'>
              {this.props.children.map((child) => {
                return (
                  <CSSTransition
                    in={child.props.title === this.props.currentItem }
                    timeout={ 400 }
                    key={child.props.title}
                    classNames="transition-styles"
                  >
                    {child.props.children}
                  </CSSTransition>
                )
              })}
            </div>
        </CSSTransition>
      </div>
    );
  }
}

class GridItem extends React.Component {
  handleClick = (e) => {
    this.props.handleClick(this.props.title, this.props.rowNum);
  }

  render() {
    return (
      <div>
        <button className="grid-item" onClick={ this.handleClick }>
          <img src={this.props.image} alt={this.props.title} />
          <h4>{this.props.title}</h4>
        </button>
      </div>
    );
  }
}

function InfoCard(props) {
  return (
    <div id={props.title} className="info-card">
      <div className="info-card-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="info-card-content">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </div>
    </div>
  );
}