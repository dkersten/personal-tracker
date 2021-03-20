import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { headerMd } from '../mixins'
// import activities from '../ActivitiesTestData.js'

import { fetchActivities } from '../actions/activityActions'

import ActivityTrackerCard from '../components/ActivityTrackerCard'

// styling
    const Header = styled.h2`
     ${ headerMd }

        i {
            font-size: 1rem;
        }
    `

    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    `

const ActivitiesWeek = ({dispatch, loading, activities, hasErrors}) => {

    useEffect(() => {
        dispatch(fetchActivities())
    }, [dispatch])

    const renderContent = () => {
        if (loading) return <p>Loading activities...</p>
        if (hasErrors) return <p>Unable to display activities.</p>
        return activities.map((activity) => <ActivityTrackerCard 
                key={activity.id}
                category={activity.category}
                name={activity.name}
                date={activity.date}
                description={activity.description}
            />)

    }

    return (
        <div>
            <Header><i className="fal fa-check"></i> Activites This Week</Header>
            <CardContainer className="card-container">
                {renderContent()}
                {/* {
                    activities.map(activity => <ActivityTrackerCard 
                        key={activity.id}
                        category={activity.activityCategory}
                        name={activity.activityName}
                        date={activity.activityDate}
                        description={activity.activityDescription}
                    />)
                } */}
            </CardContainer>
        </div>
    )
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
    loading: state.activities.loading,
    activities: state.activities.activities,
    hasErrors: state.activities.hasErrors
})

export default connect(mapStateToProps)(ActivitiesWeek)
