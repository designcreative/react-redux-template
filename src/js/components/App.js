import React from 'react';
import ItemList from '../containers/item-list';
import ItemDetail from '../containers/item-detail';
require('../../sass/style.sass');

const App = () => {
  <div>
    <h2>Item List</h2>
    <ItemList />
    <hr/>
    <h2>Item Detail</h2>
    <ItemDetail />
  </div>
};

export default App;
