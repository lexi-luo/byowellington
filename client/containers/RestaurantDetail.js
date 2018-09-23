import React, { Component } from 'react';
import { connect } from 'react-redux';



class RestaurantDetail extends Component {
  render() {
    if (!this.props.restaurants) {
      return <div>pick something</div>
    }
    return (
      <div>
        <h2>Details</h2>
        <div><h3>{this.props.restaurants.name}</h3></div>
        <div>Category: {this.props.restaurants.category}</div>
        <div>Location: {this.props.restaurants.location}</div>
        <div>Dollars: {this.props.restaurants.price}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.selectedRestaurant
  }
}

export default connect(mapStateToProps)(RestaurantDetail)