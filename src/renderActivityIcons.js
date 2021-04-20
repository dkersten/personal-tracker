// function that dynamically returns an icon based on activity category
export const renderActivityIcons = (category) => {
        
    if (category === 'Exercise') {
        return(
            <i className="fad fa-running"></i>
        )
    } else if (category === 'Career Growth') {
        return(
            <i className="fad fa-code"></i>
        )
    } else if (category === 'Personal Finance') {
        return(
            <i className="fad fa-sack-dollar"></i>
        )
    } else if (category === 'Personal Growth') {
        return(
            <i className="fad fa-user-astronaut"></i>
        )
    }
}