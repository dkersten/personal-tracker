import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import ActivitiesContainer from './ActivitiesContainer'
import TrackerContainer from './TrackerContainer'
import GoalsContainer from './GoalsContainer'
import StatsContainer from './StatsContainer'
import PlanningContainer from './PlanningContainer'
import Welcome from '../components/Welcome'

// styling
    const Main = styled.main`
        background: #25292E;
        max-height: 100vh;
        flex-grow: 1;
        overflow-y: scroll;
        padding: 2rem 3rem;

        @media only screen and (max-width: 1199px) {
            flex-basis: 100%;
        }

        @media only screen and (max-width: 450px) {
            padding: 2rem 1.25rem;
        }
    `

const MainContainer = () => {

    return (
        <Main>
            <Switch>
                <Route exact path="/" render={() => <Welcome />} />
                <Route path="/activities" render={() => <ActivitiesContainer />} />
                <Route path="/tracker" render={() => <TrackerContainer />} />
                <Route path="/goals" render={() => <GoalsContainer />} />
                <Route path="/planning" render={() => <PlanningContainer />} />
                <Route path="/stats" render={() => <StatsContainer />} />
            </Switch>
        </Main>
    )
}

export default MainContainer
