import React from 'react'
import styled from 'styled-components'

import { CardBaseStyling, headerSm } from '../mixins'

// styling
    const Card = styled.div`
        ${CardBaseStyling}
        margin: .75rem .5rem;
        flex-basis: calc((100% / 3) - 1rem);
        padding-top: calc(1rem + 5px);
        background: #252A2E;
    `

    const MonthName = styled.h4`
        ${ headerSm }
        margin-bottom: 1.5rem;
    `

    const TaskContainer = styled.div`
        display: flex;
        flex-direction: column;
    `

    const ActivityName = styled.span`
        margin-bottom: .75rem;
        margin-left: 1.5rem;
        position: relative;
        
        &::before {
            content: '\f058';
            font-family: FontAwesome;
            left: -1.37rem;
            top: 3px;
            color: #FD3E58;
            position: absolute;
            font-size: .7rem;
        }
    `

    const ActivityDate = styled.span`
        color: #17A4F6;
    `

    const ShowAllBtn = styled.button`
        background: rgba(0,0,0,0);
        border: none;
        display: block;
        margin-top: 1rem;
        font-size: 1rem;

        &:hover {
            cursor: pointer;
        }
    `

const MonthCard = () => {
    return (
        <Card>
            <MonthName>January</MonthName>

            <TaskContainer>
                <ActivityName>Activity Name: <ActivityDate>Jan: 2</ActivityDate></ActivityName>

                <ActivityName>Activity Name: <ActivityDate>Jan: 4</ActivityDate></ActivityName>

                <ActivityName>Activity Name: <ActivityDate>Jan: 7</ActivityDate></ActivityName>

            </TaskContainer>
            <div className="see-more-container">
                <ShowAllBtn>See All Tasks</ShowAllBtn>
            </div>
        </Card>
    )
}

export default MonthCard
