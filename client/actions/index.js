
export function selectedRestaurant(restaurant) {
  console.log('restaurant', restaurant.name)
  return {
    type: 'SELECTED_RESTAURANT',
    payload: restaurant
  }
}
