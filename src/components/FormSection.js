import React, { Component } from 'react';


class PersonalInfoForm extends Component {
    render() {
        return (
            <fieldset>
                <legend>Personal Information</legend>
                <label>
                    First Name:
                        <input
                            name='firstName' 
                            type="text" 
                        />
                </label>
                <br />
                <label>
                    Last Name:
                        <input
                            name='lastName' 
                            type='text'
                        />
                </label>
                <br />     
                <label>
                    Email:
                        <input
                            name='email' 
                            type='text'
                        />
                </label>
                <br />     
                <label>
                    Phone Number:
                        <input
                            name='phoneNumber' 
                            type='text'
                        />
                </label>
            </fieldset>
        );
    }
}

class EmploymentHistoryForm extends Component {
    render() {
        return (
            <fieldset>
                <legend>Employment History</legend>
                <label>
                    Position:
                        <input
                            name='position' 
                            type="text" 
                        />
                </label>
                <br />
                <label>
                    Company:
                        <input
                            name='company' 
                            type='text'
                        />
                </label>
                <br />
                <label>
                    Start Date:
                        <input
                            name='startDate' 
                            type='text'
                        />
                </label>
                <br />     
                <label>
                    End Date:
                        <input
                            name='endDate' 
                            type='text'
                        />
                </label>
                <br />     
                <label>
                    Job Responsibilities:
                        <input
                            name='jobRes' 
                            type='text'
                        />
                </label>
            </fieldset>
        );
    }
}

class EducationForm extends Component {
    render() {
        return (
            <fieldset>
                <legend>Education</legend>
                <label>
                    School:
                        <input
                            name='school' 
                            type="text" 
                        />
                </label>
                <br />
                <label>
                    Location:
                        <input
                            name='location' 
                            type='text'
                        />
                </label>
                <br />
                <label>
                    Degree:
                        <input
                            name='degree' 
                            type='text'
                        />
                </label>
                <br />     
                <label>
                    Graduation Date:
                        <input
                            name='graduationDate' 
                            type='text'
                        />
                </label>
            </fieldset>
        );
    }
}

class AdditionalInfoForm extends Component {
    render() {
        return (
            <fieldset>
                <legend>Additional Information</legend>
                <label>
                    Languages:
                        <input
                            name='languages' 
                            type="text" 
                        />
                </label>
                <br />
                <label>
                    Courses:
                        <input
                            name='courses' 
                            type='text'
                        />
                </label>
                <br />
                <label>
                    Interests:
                        <input
                            name='interests' 
                            type='text'
                        />
                </label>
            </fieldset>
        );
    }
}

class DisplayForm extends Component {
    render() {
        return (
            <form>
                <PersonalInfoForm />
                <EmploymentHistoryForm />
                <EducationForm />
                <AdditionalInfoForm />          
                <button>Submit Info</button>
            </form> 
        );
    }
}

export default DisplayForm;