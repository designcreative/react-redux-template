import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectItem } from '../actions/index';

class ItemList extends Component {
  renderList() {
    return this.props.items.map((item) => {
      return (
        <li key={item.id} onClick={() => this.props.selectItem(item)}>
          { item.title }
        </li>
      );
    });
  }
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function matchDispathToProps(dispatch) {
  return bindActionCreators({selectItem: selectItem}, dispatch);
}

export default connect(mapStateToProps, matchDispathToProps)(ItemList);
