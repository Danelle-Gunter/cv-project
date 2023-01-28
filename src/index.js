import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { user } from './user';


const DisplayHeader = () => {
    return (
        <header>
            <h1>CV Creator</h1>
            <p>Put all your info into the form, submit it, and a version will display at the bottom of the page. Enjoy!</p>
        </header>
    );
}

const DisplayFooter = () => {
    return (
        <footer></footer>
    );
}

const DisplayUserInfo = (props) => {
    const userInfo = props.user.userInfo;
    
    return (
        <section className='personalInfo'>
            <h2>{userInfo.firstName} {userInfo.lastName}</h2>
            <p className='small'>{userInfo.email}</p>
            <p className='small'>{userInfo.phoneNumber}</p>   
        </section>
    )
}

const DisplayEmploymentExperience = (props) => {
    const employmentInfo = props.user.employmentExperience;
    
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

const DisplayEducation = (props) => {
    const educationInfo = props.user.education;
    
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

const DisplayAdditionalInfo = (props) => {
    const additionalInfo = props.user.additionalInfo;
        
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

const PersonalInfoForm = () => {
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

const EmploymentHistoryForm = () => {
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

const EducationForm = () => {
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

const AdditionalInfoForm = () => {
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

const DisplayForm = () => {
    return (
        <form>
            <PersonalInfoForm />
            <EmploymentHistoryForm />
            <EducationForm />
            <AdditionalInfoForm />          
            <button>Submit Info</button>
        </form> 
    )
}

const Main = (props) => {
    return (
        <div>
            <DisplayHeader />
            <DisplayForm />
            <div id='cvDisplay'>
                <DisplayUserInfo user={props.user} />
                <DisplayEmploymentExperience user={props.user} />
                <DisplayEducation user={props.user} />
                <DisplayAdditionalInfo user={props.user} />
            </div>
            <DisplayFooter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main user={user} />);
