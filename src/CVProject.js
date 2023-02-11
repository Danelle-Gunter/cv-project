import React, {useState} from 'react';

const CVProject = () => {

    const [user, setUser] = useState({
        fullName:'',
        email:'',
        phoneNumber:''
    });

    const [info, setInfo] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]:value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.fullName && user.email && user.phoneNumber) {
            const newInfo = {...user, id:new Date().getTime().toString()};
            setInfo([newInfo]);
        }
    };

    const DisplayUserInfo = () => {        
        return (
            <section>
            {info.map((data) => {
                const {id, fullName, email, phoneNumber} = data;
                return (
                    <article className='personalInfo' key={id}>
                        <h2>{fullName}</h2>
                        <ul>
                            <li className='small'>{email}</li>
                            <li className='small'>{phoneNumber}</li>   
                        </ul>
                    </article>
                )
            })}
            </section>
        )
    }

    return (
        <article>
            <form>
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
            
                <button type='submit' onClick={handleSubmit}>Submit Info</button>
            </form>
            <DisplayUserInfo />
        </article>
    );
};

export default CVProject;
