export const GET_ACTIVITIES_MONTH = 'GET_ACTIVITIES_MONTH'
export const GET_ACTIVITIES_MONTH_SUCCESS = 'GET_ACTIVITIES_MONTH_SUCCESS'
export const GET_ACTIVITIES_MONTH_FAILURE = 'GET_ACTIVITIES_MONTH_FAILURE'

export const getActivitiesMonth = () => ({
    type: GET_ACTIVITIES_MONTH
})

export const getActivitiesMonthSuccess = (activitiesMonth) => ({
    type: GET_ACTIVITIES_MONTH_SUCCESS,
    payload: activitiesMonth
})

export const getActivitiesMonthFailure = () => ({
    type: GET_ACTIVITIES_MONTH_FAILURE
})

export function fetchActivitiesMonth() {
    return async (dispatch) => {
      dispatch(getActivitiesMonth())
  
      try {
        const response = await fetch('http://localhost:3001/activities/month')
        const data = await response.json()
  
        dispatch(getActivitiesMonthSuccess(data))
      } catch (error) {
        dispatch(getActivitiesMonthFailure())
      }
    }
  }