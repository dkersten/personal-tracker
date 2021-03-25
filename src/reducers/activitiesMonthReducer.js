import * as actions from '../actions/activityMonthActions'

export const initialState = {
    activities: [],
    loading: false,
    hasErrors: false,
}

export default function activitiesMonthReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ACTIVITIES_MONTH:
            return {...state, loading: true}
        case actions.GET_ACTIVITIES_MONTH_SUCCESS:
            return {activitiesMonth: action.payload, loading: false, hasErrors: false}
        case actions.GET_ACTIVITIES_MONTH_FAILURE:
            return {...state, loading: false, hasErrors: true}
        default:
            return state
    }
}