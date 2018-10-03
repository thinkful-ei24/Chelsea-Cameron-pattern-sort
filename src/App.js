import React, { Component } from 'react';
import './App.css';
import PatternImages from './patternImages';
import SortNav from './sortNav';
import Order from './order';


class App extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: '',
      swatchOrder: [{name:'gingham',
      price: 10,
      qty: 0},
      {name:'stripes',
      price: 5,
      qty: 0},
      {name:'checked',
      price: 2,
      qty: 0}]
    };
  }

  filter(pattern) {
    this.setState({
      sortBy: pattern
    });
  }

  render() {
    return (
      <div className="App">
        <Order />
        <SortNav patternChange={e => this.filter(e)} />
        <PatternImages filterBy={this.state.sortBy} />
      </div>
    );
  }
}

export default App;
