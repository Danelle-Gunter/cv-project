import React, {useState} from 'react';
import DisplayUserInfo from './resumeDisplay';

const CVProject = () => {

    const [user, setUser] = useState({
        fullName:'',
        email:'',
        phoneNumber:'',
    });

    const [info, setInfo] = useState([]);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.fullName && user.email && user.phoneNumber) {
            const newInfo = {...user, id:new Date().getTime().toString()};
            setInfo([newInfo]);
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <fieldset>    
                <legend>Personal Information</legend>                
                    <label htmlFor='fullName'>Full Name:
                    <input
                        type='text'
                        id='fullName'
                        name='fullName'
                        value={user.fullName}
                        onChange={handleChange} 
                    /></label>
                    <br /> 
                    <label htmlFor='email'>Email:
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={user.email}
                        onChange={handleChange} 
                    /></label>
                    <br />     
                    <label htmlFor='phoneNumber'>Phone Number:
                    <input
                        type='text'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={user.phoneNumber}
                        onChange={handleChange} 
                    /></label>
                </fieldset>
                <fieldset>
                <legend>Employment History</legend>
                    <label htmlFor='position'>Position:
                    <input
                        type="text" 
                        id='position' 
                        name='position'    
                    /></label>
                    <br />
                    <label htmlFor='company'>Company:
                    <input
                        type='text'
                        id='company'
                        name='company' 
                    /></label>
                    <br />
                    <label htmlFor='startDate'>Start Date:
                    <input
                        type='text'
                        id='startDate'
                        name='startDate' 
                    /></label>
                    <br />     
                    <label htmlFor='endDate'>End Date:
                    <input
                        type='text'
                        id='endDate'
                        name='endDate' 
                    /></label>
                </fieldset>
                <button type='submit'>Submit Info</button>
            </form>
            <DisplayUserInfo info={info}/>
        </main>
    );
};

export default CVProject;
