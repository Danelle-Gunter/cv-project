import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </ React.StrictMode>
);


// const DisplayEmploymentExperience = (props) => {
//     const employmentInfo = props.user.employmentExperience;
    
//     return (
//         <div>
//             <h3>Employment Experience</h3>
//             <ul>
//                 <li>{employmentInfo.position}</li>
//                 <li>{employmentInfo.company}</li>
//                 <li>{employmentInfo.startDate}</li>
//                 <li>{employmentInfo.endDate}</li>
//                 <li>{employmentInfo.jobRes[0]}</li>
//             </ul>
//         </div>
//     )
// }

// const DisplayEducation = (props) => {
//     const educationInfo = props.user.education;
    
//     return (
//         <div>
//             <h3>Education</h3>
//             <ul>
//                 <li>{educationInfo.school}</li>
//                 <li>{educationInfo.location}</li>
//                 <li>{educationInfo.degree}</li>
//                 <li>{educationInfo.graduationDate}</li>
//             </ul>
//         </div>
//     )
// }

// const DisplayAdditionalInfo = (props) => {
//     const additionalInfo = props.user.additionalInfo;
        
//     return (
//         <div>
//             <h3>Additional Information</h3>
//             <ul>
//                 <li>{additionalInfo.languages}</li>
//                 <li>{additionalInfo.courses}</li>
//                 <li>{additionalInfo.interests[1]}</li>
//             </ul>
//         </div>
//     )
// }



// const EmploymentHistoryForm = () => {
//     return (
//         <fieldset>
//             <legend>Employment History</legend>
//             <label>
//                 Position:
//                     <input
//                         name='position' 
//                         type="text" 
//                     />
//             </label>
//             <br />
//             <label>
//                 Company:
//                     <input
//                         name='company' 
//                         type='text'
//                     />
//             </label>
//             <br />
//             <label>
//                 Start Date:
//                     <input
//                         name='startDate' 
//                         type='text'
//                     />
//             </label>
//             <br />     
//             <label>
//                 End Date:
//                     <input
//                         name='endDate' 
//                         type='text'
//                     />
//             </label>
//             <br />     
//             <label>
//                 Job Responsibilities:
//                     <input
//                         name='jobRes' 
//                         type='text'
//                     />
//             </label>
//         </fieldset>
//     )
// }

// const EducationForm = () => {
//     return (
//         <fieldset>
//             <legend>Education</legend>
//             <label>
//                 School:
//                     <input
//                         name='school' 
//                         type="text" 
//                     />
//             </label>
//             <br />
//             <label>
//                 Location:
//                     <input
//                         name='location' 
//                         type='text'
//                     />
//             </label>
//             <br />
//             <label>
//                 Degree:
//                     <input
//                         name='degree' 
//                         type='text'
//                     />
//             </label>
//             <br />     
//             <label>
//                 Graduation Date:
//                     <input
//                         name='graduationDate' 
//                         type='text'
//                     />
//             </label>
//         </fieldset>
//     )
// }

// const AdditionalInfoForm = () => {
//     return (
//         <fieldset>
//             <legend>Additional Information</legend>
//             <label>
//                 Languages:
//                     <input
//                         name='languages' 
//                         type="text" 
//                     />
//             </label>
//             <br />
//             <label>
//                 Courses:
//                     <input
//                         name='courses' 
//                         type='text'
//                     />
//             </label>
//             <br />
//             <label>
//                 Interests:
//                     <input
//                         name='interests' 
//                         type='text'
//                     />
//             </label>
//         </fieldset>
//     )
// }

// const DisplayForm = () => {
//     return (
//         <form>
//             <PersonalInfoForm />
//             <EmploymentHistoryForm />
//             <EducationForm />
//             <AdditionalInfoForm />          
//             
//         </form> 
//     )
// }

// const Main = (props) => {
//     return (
//         <div>
//             <DisplayHeader />
//             <DisplayForm />
//             <div id='cvDisplay'>
//                 <DisplayUserInfo user={props.user} />
//                 <DisplayEmploymentExperience user={props.user} />
//                 <DisplayEducation user={props.user} />
//                 <DisplayAdditionalInfo user={props.user} />
//             </div>
//             <DisplayFooter />
//         </div>
//     );
// }


