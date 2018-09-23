import { combineReducers } from 'redux'
import RestaurantReducer from './restaurants'
import SelectedRestaurant from './selected_restaurant'

const restReducer = combineReducers({
  restaurants: RestaurantReducer,
  selectedRestaurant: SelectedRestaurant
})

export default restReducer