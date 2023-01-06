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
                    <li>{userInfo.title}</li>
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
                    <li>{employmentInfo.whatDidYouDo[0]}</li>
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
                    <li>{educationInfo.university}</li>
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

class Main extends Component {
    constructor(props) {
        super(props);
    }  

    render() {
        return (
            <div>
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
        title: 'Nurse',
        email: 'nurse@example.com',
        phoneNumber: '555-555-5555',
    },
    employmentExperience: {
        position: 'Lead RN',
        company: 'So-So Hospital',
        startDate: 'July 2013',
        endDate: 'October 2021',
        whatDidYouDo: ["tolerated people", "ate snacks", "didn't get paid enough"]
    },
    education: {
        university: 'University of Whatever',
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
