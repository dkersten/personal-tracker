import React, { useState } from 'react'

const AddActivityForm = () => {

    const [ activityName, setActivityName ] = useState("")
    const [ activityDescription, setActivityDescription ] = useState("")
    const [ activityCategory, setActivityCategory ] = useState("misc")

    const handleActivityNameChange = e => {
        setActivityName(e.target.value)
        console.log(activityName)
    }

    const handleActivityDescriptionChange = e => {
        setActivityDescription(e.target.value)
        console.log(activityDescription)
    }

    const handleActivityCateogryChange = e => {
        setActivityCategory(e.target.value)
        console.log(activityCategory)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input name="activityName" onChange={handleActivityNameChange} value={activityName} placeholder="Activity Name"/>

                <label>
                    Category:

                    <select name="category" onChange={handleActivityCateogryChange}>
                        <option value="misc"></option>
                        <option value="career">Career</option>
                        <option value="personal-wellness">Personal Wellness</option>
                    </select>
                </label>

                <input name="activityDescription" onChange={handleActivityDescriptionChange} value={activityDescription} placeholder="Activity Description"/>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddActivityForm