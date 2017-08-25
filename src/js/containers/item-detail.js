import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetail extends Component {
  render() {
    if (!this.props.item) {
      return (<div>Select an item...</div>);
    }
    return (
      <div>
        <h2>{this.props.item.title}</h2>
        <h4>Category: {this.props.item.category}</h4>
        <p>{this.props.item.description}</p>
        <button>{this.props.item.price}</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem
  };
}

export default connect(mapStateToProps)(ItemDetail);
