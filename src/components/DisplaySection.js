import React, { Component} from 'react';

class DisplayUserInfo extends Component {
    render() {
        const userInfo = this.props.user.userInfo;
        
        return (
            <section className='personalInfo'>
                <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                <p className='small'>{userInfo.email}</p>
                <p className='small'>{userInfo.phoneNumber}</p>   
            </section>
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

export { DisplayUserInfo, DisplayEmploymentExperience, DisplayEducation, DisplayAdditionalInfo };