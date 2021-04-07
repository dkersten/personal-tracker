import { combineReducers } from 'redux'

import activitiesReducer from './activitiesReducer'
import activitiesMonthReducer from './activitiesMonthReducer'
import modalReducer from './modalReducer'

const rootReducer = combineReducers({
    activities: activitiesReducer,
    activitiesMonth: activitiesMonthReducer,
    modal: modalReducer
})

export default rootReducer