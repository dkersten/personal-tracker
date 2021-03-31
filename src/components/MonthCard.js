import React from 'react'
import styled from 'styled-components'

import { CardBaseStyling, headerSm, twoColLayoutMediumScreens, oneColLayoutSmallScreens } from '../mixins'

// styling
    const Card = styled.div`
        ${CardBaseStyling}
        margin: .75rem .5rem;
        flex-basis: calc((100% / 3) - 1rem);
        padding-top: calc(1rem + 5px);
        background: #252A2E;
        display: flex;
        flex-direction: column;
        position: relative;

        @media only screen and (min-width: 1200px) and (max-width: 1299px) {
            flex-basis: calc((100% / 2) - 1rem);
        }

        @media only screen and (max-width: 900px) {
            ${ twoColLayoutMediumScreens }
        }

        @media only screen and (max-width: 675px) {
            ${ oneColLayoutSmallScreens }
        }
    `

    const MonthName = styled.h4`
        ${ headerSm }
        margin-bottom: 1.5rem;
    `

    const TaskContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
    `

    const ActivityName = styled.span`
        margin-bottom: .6rem;
        margin-left: 1.5rem;
        position: relative;
        line-height: 1.2;
        
        &::before {
            content: '\f058';
            font-family: FontAwesome;
            left: -1.37rem;
            top: 3px;
            color: #17A4F6;
            position: absolute;
            font-size: .7rem;
        }
    `

    const ShowAllBtn = styled.button`
        background: rgba(0,0,0,0);
        border: none;
        display: block;
        margin-top: 1rem;
        margin-left: auto;
        font-size: 1rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;

        &:hover {
            cursor: pointer;
        }
    `

const MonthCard = (props) => {

    // console.log(props)

    const openModal = () => {
        props.toggleModal('year overview')
    }

    return (
        <Card>
            <MonthName>{props.month}</MonthName>

            <TaskContainer>
                <ActivityName>{props.activityName1}</ActivityName>

                <ActivityName>{props.activityName2}</ActivityName>

                <ActivityName>{props.activityName3}</ActivityName>

            </TaskContainer>
            <div className="see-more-container">
                <ShowAllBtn onClick={openModal}>See All Tasks</ShowAllBtn>
            </div>
        </Card>
    )
}

export default MonthCard
