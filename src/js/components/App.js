import React, { Component } from 'react';
import ItemList from '../containers/item-list';
import ItemDetail from '../containers/item-detail';
require('../../scss/main.scss');

class App extends Component {
  render() {
    return (
      <div>
        <h2>Item List</h2>
        <ItemList />
        <hr/>
        <h2>Item Detail</h2>
        <ItemDetail />
      </div>
    );
  }
}

export default App;
