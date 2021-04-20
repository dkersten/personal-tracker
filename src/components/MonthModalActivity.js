import React from 'react'

import styled from 'styled-components'

import { defaultFont } from '../mixins'
import { renderActivityIcons } from '../renderActivityIcons'

const ActivityModalCard = styled.div`
    width: 100%;
    margin-bottom: .75rem;

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

