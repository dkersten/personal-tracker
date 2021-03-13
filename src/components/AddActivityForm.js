import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'

import { ButtonStandard, defaultFont } from '../mixins'

// styling
    const FormContainer = styled.div`
        
        form {
            margin-bottom: 3rem;

            background: #303538;
            padding: 2rem;
            border-radius: 12px;
            display: flex;
            flex-wrap: wrap;

            .input-container {
                margin: 1rem .75rem;
                flex-basis: calc(50% - 1.5rem);
            }
            
            button {
                margin-left: right;
                align-self: flex-start;
                ${ defaultFont };
                ${ ButtonStandard }
            }
        }

        label {
            color: #f7f7f7;
            ${ defaultFont }
            width: 100%;

            input, select {
                display: block;
                margin-top: .5rem;
                /* margin-right: 1.5rem; */
                min-height: 30px;
                background: #252A2E;
                border: none;
                padding: 0 .5rem;
                color: #f7f7f7;
                width: 100%;

                ::placeholder {
                    color: #f7f7f7;
                    ${ defaultFont }
                    font-size: 1.05rem;
                }
            }
        }
    `

const AddActivityForm = () => {

    const [ activityName, setActivityName ] = useState("")
    const [ activityDescription, setActivityDescription ] = useState("")
    const [ activityDate, setActivityDate] = useState(new Date())
    const [ activityCategory, setActivityCategory ] = useState("misc")

    const handleActivityNameChange = e => {
        setActivityName(e.target.value)
    }

    const handleActivityDescriptionChange = e => {
        setActivityDescription(e.target.value)
    }

    const handleActivityDateChange = date => {
        setActivityDate(date)
    }

    const handleActivityCateogryChange = e => {
        setActivityCategory(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (

        <FormContainer key={6}>


            <form key={1} onSubmit={handleSubmit}>

                <div className="input-container">
                    <label>
                        Activity Name:
                        <input type="text" key={2} className="name-input" id="activityName" name="activityName" onChange={handleActivityNameChange} value={activityName} placeholder="Name"/>
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        Activity Category:
                        <select key={3} value={activityCategory} id="activityCategory" name="category" onChange={handleActivityCateogryChange}>
                            <option value="misc"></option>
                            <option value="career">Career</option>
                            <option value="personal-wellness">Personal Wellness</option>
                        </select>
                    </label>
                </div>
                
                <div className="input-container">
                    <label>
                        Activity Date:
                        <DatePicker
                            key={4}
                            selected={ activityDate }
                            onChange={handleActivityDateChange}
                            name="date"
                            dateFormat="MM/dd/yyyy"
                        />
                    </label>
                </div>

                <div className="input-container">
                    <label>
                        Activity Description:
                        <input type="text" key={5} className="desc-input" id="activityDescription" name="activityDescription" onChange={handleActivityDescriptionChange} value={activityDescription} placeholder="Description" />
                    </label>
                </div>

                <div className="input-container">
                    <button type="submit">Submit</button>
                </div>

            </form>

            <div>
                Name: {activityName}
                <br />
                Category: {activityCategory}
                <br />
                Activity Description: {activityDescription}
            </div>
        </FormContainer>
    )
}

export default AddActivityForm