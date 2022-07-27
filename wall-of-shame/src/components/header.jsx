import React from 'react';
import '../styles/header.css'

const Header = ({ containerType, setContainerType, loggedIn, setLoggedIn, setCurrentUserAccess }) => {

    const handleLogout = () => {
        setLoggedIn(false)
        setCurrentUserAccess("")
    }

    if (containerType == 'REGISTER' && loggedIn == false) {
        return (
            <div>
                <button className='btn'
                    onClick={() => setContainerType('LOGIN')}>LOGIN</button>
            </div>)
    }
    else if (containerType == 'LOGIN' && loggedIn == false) {
        return (
            <div>
                <button className='btn' onClick={() => setContainerType('REGISTER')} >REGISTER</button>
            </div>)
    } else if (loggedIn == true) {
        return (
            <div>
                <button className='btn' onClick={handleLogout} >LOGOUT</button>
            </div>)
    }

    else {
        return (
            <div>
                <div>
                    <button className='btn' onClick={() => setContainerType('LOGIN')}>LOGIN</button>
                </div>
                <div>
                    <button className='btn' onClick={() => setContainerType('REGISTER')} >REGISTER</button>
                </div>
            </div>
        )
    }

}

export default Header;