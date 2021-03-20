import * as actions from '../actions/activityActions'

export const initialState = {
    activities: [],
    loading: false,
    hasErrors: false,
}

export default function activitiesReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ACTIVITIES:
            return {...state, loading: true}
        case actions.GET_ACTIVITIES_SUCCESS:
            return {activities: action.payload, loading: false, hasErrors: false}
        case actions.GET_ACTIVITIES_FAILURE:
            return {...state, loading: false, hasErrors: true}
        default:
            return state
    }
}