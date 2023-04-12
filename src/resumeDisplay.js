import React from 'react';

const DisplayUserInfo = ({info}) => {        
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

export default DisplayUserInfo;