import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectedRestaurant } from '../actions/index'
import { bindActionCreators } from 'redux'


class RestaurantList extends Component {

  renderList() {
    return this.props.restaurants.map((restaurant) => {
      return (
        <li
          key={restaurant.name} >
          {restaurant.id}. {restaurant.name}<button className='btn btn-outline-primary'
            onClick={() => this.props.selectedRestaurant(restaurant)}>more</button>

        </li>
      )
    })
  }

  render() {
    console.log('RL', this.props)
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedRestaurant: selectedRestaurant }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)