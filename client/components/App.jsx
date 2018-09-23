import React from 'react'
import Restaurant from './Restaurant'
import RestaurantList from '../containers/RestaurantList'
import RestaurantDetail from '../containers/RestaurantDetail'

const App = () => (
  <div >
    <Restaurant />
    <RestaurantList />
    <RestaurantDetail />
  </div>
)

export default App
