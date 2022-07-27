import React from 'react'

const Login = ({ setUser, setPass, fetchUrl }) => {

    return (
        <div >
            <h1 className='header' >Login</h1>
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
                <button className='button' onClick={() => fetchUrl("/login", 'POST')}>Login</button>
            </div>
        </div>
    );
}

export default Login;