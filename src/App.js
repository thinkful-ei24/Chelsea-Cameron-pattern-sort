import React, { Component } from 'react';
import './App.css';
import PatternImages from './patternImages';
import SortNav from './sortNav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: ''
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
        <SortNav patternChange={e => this.filter(e)} />
        <PatternImages filterBy={this.state.sortBy} />
      </div>
    );
  }
}

export default App;
