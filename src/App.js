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
      swatchOrder: {
        gingham: {
          price: 10,
          qty: 0
        },
        stripes: {
          price: 5,
          qty: 0
        },
        checked: {
          price: 2,
          qty: 0
        }
      }
    };
  }

  filter(pattern) {
    this.setState({
      sortBy: pattern
    });
  }

  updateQuantity(pattern, qty) {
    const newSwatch = { ...this.state.swatchOrder };
    newSwatch[pattern].qty = qty;
    this.setState({
      swatchOrder: newSwatch
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Patterns!</h1>
        <Order
          value={this.state.swatchOrder}
          swatchOrder={this.state.swatchOrder}
          quantityUpdate={(pattern, qty) => this.updateQuantity(pattern, qty)}
        />
        <SortNav patternChange={e => this.filter(e)} />
        <PatternImages filterBy={this.state.sortBy} />
      </div>
    );
  }
}

export default App;
