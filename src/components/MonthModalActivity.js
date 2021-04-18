import React from 'react'

import styled from 'styled-components'

import { defaultFont } from '../mixins'

const ActivityModalCard = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    padding: .5rem 1rem;
    border-radius: 5px;
    background: #262B2E;

    h4.activity-title {
        ${defaultFont}
        font-size: 1.3rem;
        color: #17A3F6;
    }
    
    p {
        margin-bottom: 0;
        margin-left: 1rem;
    }
`

export const MonthModalActivity = (props) => {
    return (
        <ActivityModalCard>
            <h4 className="activity-title">{props.category}: {props.name}</h4>
            <p>- {props.description}</p>
        </ActivityModalCard>
    )
}

