import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { headerMd } from '../mixins'

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

        // let formatttedActivities = [];
        console.log(activities)
        
        for (let i = 0; i < activities.length; i++) {
            // let activityObject;
            const d = new Date(activities[i].date)
            let month = '' + (d.getMonth() + 1)
            let day = '' + d.getDate()
            let year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            // console.log([month, day, year].join('-'))
        }

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
