import React from 'react'

import styled from 'styled-components'

import { defaultFont } from '../mixins'
import { renderActivityIcons } from '../renderActivityIcons'

const ActivityModalCard = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    background: #252A2E;
    padding: .75rem 1rem;
    border-radius: 5px;

    &:last-of-type {
        margin-bottom: .75rem;
    }

    .left {
        flex-basis: 70px;

        i {
            font-size: 2.25rem;
            margin-top: 6px;
            color: #FD3E58;
        }
    }

    h4.activity-title {
        ${defaultFont}
        font-size: 1.3rem;
        color: #17A3F6;
        margin-bottom: .1rem;
    }
    
    p {
        margin-bottom: 0;
        margin-left: 1rem;
    }
`

export const MonthModalActivity = (props) => {

    return (
        <ActivityModalCard>
            <div className="left">
                {renderActivityIcons(props.category)}
            </div>
            <div className="right">
                <h4 className="activity-title">{props.category}: {props.name}</h4>
                <p>- {props.description}</p>
            </div>
        </ActivityModalCard>
    )
}

