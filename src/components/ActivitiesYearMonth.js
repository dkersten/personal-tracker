import React from 'react'
import styled from 'styled-components'

import MonthCard from './MonthCard'

// styling
    const MonthsContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: flex-start;
    `

const ActivitiesYearMonth = () => {
    return (
        <MonthsContainer>
            <MonthCard
                month={"January"}
                activityName1={"Exercise: cardio"}
                activityName2={"Exercise: strength training"}
                activityName3={"Career: applied to new job"}
            />
            
            <MonthCard
                month={"February"}
                activityName1={"Career: interviewed for new position"}
                activityName2={"Exercise: strength training"}
                activityName3={"Exercise: cardio"}
            />
            
            <MonthCard
                month={"March"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"April"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"May"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"June"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"July"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"August"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"September"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"October"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"November"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
            <MonthCard
                month={"December"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
            />
            
        </MonthsContainer>
    )
}

export default ActivitiesYearMonth
