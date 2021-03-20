export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS'
export const GET_ACTIVITIES_FAILURE = 'GET_ACTIVITIES_FAILURE'

export const getActivities = () => ({
    type: GET_ACTIVITIES
})

export const getActivitiesSuccess = (activities) => ({
    type: GET_ACTIVITIES_SUCCESS,
    payload: activities
})

export const getActivitiesFailure = () => ({
    type: GET_ACTIVITIES_FAILURE
})

export function fetchActivities() {
    return async (dispatch) => {
        dispatch(getActivities())

        try {
            const response = await fetch('http://localhost:3001/activities')
            const data = await response.json()

            dispatch(getActivitiesSuccess(data))
        } catch (error) {
            dispatch(getActivitiesFailure())
        }
    }
}