import React, {useState} from 'react';
import DisplayUserInfo from './resumeDisplay';

const CVProject = () => {

    const [user, setUser] = useState({
        fullName:'',
        email:'',
        phoneNumber:''
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
                <button type='submit'>Submit Info</button>
            </form>
            <DisplayUserInfo info={info}/>
        </main>
    );
};

export default CVProject;
