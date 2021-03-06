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



const ActivitiesYearMonth = (props) => {
    return (
        <MonthsContainer>
            <MonthCard
                month={"January"}
                activityName1={"Exercise: cardio"}
                activityName2={"Exercise: strength training"}
                activityName3={"Career: applied to new job"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"February"}
                activityName1={"Career: interviewed for new position"}
                activityName2={"Exercise: strength training"}
                activityName3={"Exercise: cardio"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"March"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"April"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"May"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"June"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"July"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"August"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"September"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"October"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"November"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
            <MonthCard
                month={"December"}
                activityName1={"Exercise: cardio"}
                activityName2={"Applied to new job"}
                activityName3={"Exercise: Strength training"}
                toggleModal={props.toggleModal}
            />
            
        </MonthsContainer>
    )
}

export default ActivitiesYearMonth
