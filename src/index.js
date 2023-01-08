import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//import App from './App';

class DisplayUserInfo extends Component {
    render() {
        const userInfo = this.props.user.userInfo;
        
        return (
            <div>
                <h3>Personal Information</h3>
                <ul>
                    <li>{userInfo.firstName}</li>
                    <li>{userInfo.lastName}</li>
                    <li>{userInfo.email}</li>
                    <li>{userInfo.phoneNumber}</li>
                </ul>
            </div>
        )
    }
}

class DisplayEmploymentExperience extends Component {
    render() {
        const employmentInfo = this.props.user.employmentExperience;
        
        return (
            <div>
                <h3>Employment Experience</h3>
                <ul>
                    <li>{employmentInfo.position}</li>
                    <li>{employmentInfo.company}</li>
                    <li>{employmentInfo.startDate}</li>
                    <li>{employmentInfo.endDate}</li>
                    <li>{employmentInfo.jobRes[0]}</li>
                </ul>
            </div>
        )
    }
}

class DisplayEducation extends Component {
    render() {
        const educationInfo = this.props.user.education;
        
        return (
            <div>
                <h3>Education</h3>
                <ul>
                    <li>{educationInfo.school}</li>
                    <li>{educationInfo.location}</li>
                    <li>{educationInfo.degree}</li>
                    <li>{educationInfo.graduationDate}</li>
                </ul>
            </div>
        )
    }
}

class DisplayAdditionalInfo extends Component {
    render() {
        const additionalInfo = this.props.user.additionalInfo;
        
        return (
            <div>
                <h3>Additional Information</h3>
                <ul>
                    <li>{additionalInfo.languages}</li>
                    <li>{additionalInfo.courses}</li>
                    <li>{additionalInfo.interests[1]}</li>
                </ul>
            </div>
        )
    }
}

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
        )
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
        )
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
        )
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
        )
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
                <br />          
                <button onClick={this.handleSubmit}>Submit Info</button>
            </form> 
        )
    }
}

class Main extends Component {
    constructor(props) {
        super(props);
    }  

    render() {
        return (
            <div>
                <DisplayForm />
                <hr /> <br /> <hr />
                <DisplayUserInfo user={this.props.user} />
                <DisplayEmploymentExperience user={this.props.user} />
                <DisplayEducation user={this.props.user} />
                <DisplayAdditionalInfo user={this.props.user} />
            </div>
        );
    }
}
  
const USER = {
    userInfo: {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'nurse@example.com',
        phoneNumber: '555-555-5555',
    },
    employmentExperience: {
        position: 'Lead RN',
        company: 'So-So Hospital',
        startDate: 'July 2013',
        endDate: 'October 2021',
        jobRes: ["tolerated people", "ate snacks", "didn't get paid enough"]
    },
    education: {
        school: 'University of Whatever',
        location: 'California',
        degree: 'Bachelor of Science',
        graduationDate: '2011'
    },
    additionalInfo: {
        languages: 'Bullshit',
        courses: 'Try Not to Kill the Patients - 2014',
        interests: ['gardening', 'giving patients too much morphine']
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main user={USER} />);
