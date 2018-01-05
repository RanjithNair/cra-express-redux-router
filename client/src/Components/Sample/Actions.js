import * as Actions from './ActionTypes'
export const fetchSampleData = () => async (dispatch, getState) => {
  const data = await fetch('/sample')
  const sampleData = await data.json()
  dispatch({
    type: Actions.SET_SAMPLE_DATA,
    payload: sampleData
  })
}
