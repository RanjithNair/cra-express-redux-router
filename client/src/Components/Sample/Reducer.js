import * as Actions from './ActionTypes'
export const initialState = {
  name: ''
}

export default function SampleReducer (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.SET_SAMPLE_DATA:
      return Object.assign({}, state, {
        name: payload.name
      })
    default:
      return state
  }
}
