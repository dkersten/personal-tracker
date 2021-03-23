import { combineReducers } from 'redux'

import activitiesReducer from './activitiesReducer'
import activitiesMonthReducer from './activitiesMonthReducer'

const rootReducer = combineReducers({
    activities: activitiesReducer,
    activitiesMonth: activitiesMonthReducer,
})

export default rootReducer