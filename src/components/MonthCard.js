import React from 'react'
import styled from 'styled-components'

import { CardBaseStyling } from '../mixins'

// styling
    const Card = styled.div`
        ${CardBaseStyling}
        margin: .75rem .5rem;
        flex-basis: calc((100% / 3) - 1rem);
        padding-top: calc(1rem + 5px);
        background: #252A2E;
    `

const MonthCard = () => {
    return (
        <Card>
            <h4>January</h4>

            <div className="tasks-container">
                <span>Activity Name: Jan: 2:</span>
                <span>Activity Name: Jan. 4</span>
                <span>Activity Name: Jan. 7</span>
            </div>
            <div className="see-more-container">
                <button>See More <i className="fad fa-plus-square"></i></button>
            </div>
        </Card>
    )
}

export default MonthCard
