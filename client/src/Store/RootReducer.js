import { combineReducers } from 'redux'
import SampleReducer from '../Components/Sample/Reducer'

const rootReducer = combineReducers({
  sample: SampleReducer
})

export default rootReducer
