import React, { useState } from 'react'
import styled from 'styled-components'

import { defaultFont } from '../mixins'

// styling
    const FormContainer = styled.div`
        
        form {
            margin-bottom: 3rem;

            background: #303538;
            padding: 2rem;
            border-radius: 12px;
            display: flex;
            align-items: flex-start;
            
            button {
                margin-left: auto;
                align-self: flex-end;
                background: #FD3E58;
                border: none;
                color: #f7f7f7;
                padding: 10px 24px;
                border-radius: 15px;
                ${ defaultFont };

                &:hover {
                    background: #fd1c3b;
                    cursor: pointer;
                }
            }
        }

        label {
            color: #f7f7f7;
            ${ defaultFont }

            input, select {
                display: block;
                margin-top: .5rem;
                margin-right: 1.5rem;
                min-height: 30px;
                background: #252A2E;
                border: none;
                padding: 0 .5rem;
                color: #f7f7f7;

                ::placeholder {
                    color: #f7f7f7;
                    ${ defaultFont }
                    font-size: 1.05rem;
                }
            }

            .name-input {
                min-width: 250px;
            }
            
            .desc-input {
                min-width: 400px;
            }
        }
    `

const AddActivityForm = () => {

    const [ activityName, setActivityName ] = useState("")
    const [ activityDescription, setActivityDescription ] = useState("")
    const [ activityCategory, setActivityCategory ] = useState("misc")

    const handleActivityNameChange = e => {
        setActivityName(e.target.value)
    }

    const handleActivityDescriptionChange = e => {
        setActivityDescription(e.target.value)
    }

    const handleActivityCateogryChange = e => {
        setActivityCategory(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (

        <FormContainer key="5">


            <form key="1" onSubmit={handleSubmit}>

                <label>
                    Activity Name:
                    <input type="text" key="2" className="name-input" id="activityName" name="activityName" onChange={handleActivityNameChange} value={activityName} placeholder="Name"/>
                </label>

                <label>
                    Category:
                    <select key="3" value={activityCategory} id="activityCategory" name="category" onChange={handleActivityCateogryChange}>
                        <option value="misc"></option>
                        <option value="career">Career</option>
                        <option value="personal-wellness">Personal Wellness</option>
                    </select>
                </label>

                <label>
                    Activity Description:
                    <input type="text" key="4" className="desc-input" id="activityDescription" name="activityDescription" onChange={handleActivityDescriptionChange} value={activityDescription} placeholder="Description" />
                </label>

                <button type="submit">Submit</button>

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