import React, { useState } from 'react'

const AddActivityForm = () => {

    const [ activityName, setActivityName ] = useState("")
    const [ activityDescription, setActivityDescription ] = useState("")

    const handleActivityNameChange = e => {
        setActivityName(e.target.value)
    }

    const handleActivityDescriptionChange = e => {
        setActivityDescription(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input name="activityName" onChange={handleActivityNameChange} value={activityName} placeholder="Activity Name"/>

                <input name="activityDescription" onChange={handleActivityDescriptionChange} value={activityDescription} placeholder="Activity Description"/>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddActivityForm