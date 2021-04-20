import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonStandard, defaultFont } from '../mixins'

import TableDatePicker from './DatePicker'

// styling
    const FormContainer = styled.div`

    .testing {
        color: #f7f7f7;
    }
        
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

            @media only screen and (max-width: 700px) {
                .input-container {
                margin-left: auto;
                margin-right: auto;
                flex-basis: 100%;
            }
            }
            
            button:not(.react-datepicker__navigation) {
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
        
        /* overwrite date picker library styling */
        .react-datepicker-wrapper {
            width: 100%;
        }

        .react-datepicker__month-container {
            background: #303538;

            * {
                color: #f7f7f7;
            }
        }

        .react-datepicker__header {
            background: #252A2E;
        }

        .react-datepicker__triangle {
            border-bottom-color: #252A2E !important;
        }

        .react-datepicker__day--keyboard-selected {
            background: #03A5F5;
        }

        .react-datepicker__day:hover {
            background: #252A2E;
        }
    `

const AddActivityForm = () => {

    const [ activityName, setActivityName ] = useState("")
    const [ activityDescription, setActivityDescription ] = useState("")
    const [ activityDate, setActivityDate] = useState(null)

    const [ activityCategory, setActivityCategory ] = useState("")

    // format the date iput from the form so it can be sent to the API
    const formatDate = (date) => {
        let d = date
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate()
        let year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-')
    }

    // 
    const handleActivityNameChange = e => {
        setActivityName(e.target.value)
    }

    const handleActivityDescriptionChange = e => {
        setActivityDescription(e.target.value)
    }

    const handleActivityDateChange = (date) => {
        setActivityDate(formatDate(date))
    }

    const handleActivityCateogryChange = e => {
        setActivityCategory(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        sendActivityDataToAPI()
        setActivityName("")
        setActivityDate(null)
        setActivityCategory("misc")
        setActivityDescription("")
    }

    const sendActivityDataToAPI = () => {

        fetch("http://localhost:3001/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                category: activityCategory,
                name: activityName,
                date: activityDate,
                description: activityDescription
            })
        })
            .then(resp => resp.json())
            .then(json => console.log(json))
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
                            <option value="Career Growth">Career Growth</option>
                            <option value="Exercise">Exercise</option>
                            <option value="Personal Finance">Personal Finance</option>
                            <option value="Personal Growth">Personal Growth</option>
                        </select>
                    </label>
                </div>
                
                <div className="input-container">
                    <label>
                        Activity Date:
                        <TableDatePicker 
                            updateDate={handleActivityDateChange}
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

            <div className="testing">
                Name: {activityName}
                <br />
                Category: {activityCategory}
                <br />
                Activity Date: {activityDate ? activityDate.toString() : "Not selected"}
                <br />
                Activity Description: {activityDescription}
            </div>
        </FormContainer>
    )
}

export default AddActivityForm