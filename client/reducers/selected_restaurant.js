//state arg is not app state only this reducer state
export default function (state = null, action) {
  switch (action.type) {
    case 'SELECTED_RESTAURANT': state
      return action.payload;
  }
  return state
}