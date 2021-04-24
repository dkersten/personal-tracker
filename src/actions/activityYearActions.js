export const GET_ACTIVITIES_YEAR = 'GET_ACTIVITIES_YEAR'
export const GET_ACTIVITIES_YEAR_SUCCESS = 'GET_ACTIVITIES_YEAR_SUCCESS'
export const GET_ACTIVITIES_YEAR_FAILURE = 'GET_ACTIVITIES_YEAR_FAILURE'

export const getActivitiesYear = () => ({
    type: GET_ACTIVITIES_YEAR
})

export const getActivitiesYearSuccess = (activitiesYear) => ({
    type: GET_ACTIVITIES_YEAR_SUCCESS,
    payload: activitiesYear
})

export const getActivitiesYearFailure = () => ({
    type: GET_ACTIVITIES_YEAR_FAILURE
})

export function fetchActivitiesYear(id) {
    return async (dispatch) => {
        dispatch(getActivitiesYear())

        try {
            const response = await fetch(`http://localhost:3001/activities/month/${id}`)
            const data = await response.json()

            dispatch(getActivitiesYearSuccess(data))
        } catch (error) {
            dispatch(getActivitiesYearFailure())
        }
    }
}