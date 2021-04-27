import * as actions from '../actions/activityYearActions'

export const initialState = {
    activitiesYear: [],
    loading: false,
    hasErrors: false
}

export default function activitiesYearRedducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_ACTIVITIES_YEAR:
            return {...state, loading: true}
        case actions.GET_ACTIVITIES_YEAR_SUCCESS:
            return {activitiesYear: action.payload, loading: false, hasErrors: false}
        case actions.GET_ACTIVITIES_YEAR_FAILURE:
            return {...state, loading: false, hasErrors: true}
        default:
            return state
    }
}