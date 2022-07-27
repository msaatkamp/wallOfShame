import React from 'react';
import '../styles/register.css';

const Register = ({ setUser, setPass, fetchUrl }) => {



    return (
        <div className='rcontainer'>
            <h1 className='header' >Registration</h1>
            <div>
                <label>Username</label>
            </div>
            <div>
                <input placeholder='Please insert username.' className='input' type="text" onChange={(e) => { setUser(e.target.value) }}></input>
            </div>
            <div>
                <label>Password</label>
            </div>
            <div>
                <input placeholder='Please insert password.' className='input' type="password" onChange={(e) => { setPass(e.target.value) }}></input>
            </div>
            <div>
                <button className='button' onClick={() => fetchUrl("/register", 'POST')}>Register</button>
            </div>
        </div>
    );
}

export default Register;