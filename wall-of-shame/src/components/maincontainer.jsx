import React from 'react'
import Login from './logincontainer';
import Register from './registercontainer';
import placeholder from "../imgs/placeholder.jpg"
import List from './listcontainer';
import "../styles/imgs.css"

const img = { "placeholder": placeholder }
const Container = ({ currentUserAccess, setConfigKey, setUser, setPass, fetchUrl, containerType, loggedIn, users, setUsers, setIsModalVisible }) => {
    if (containerType === 'REGISTER') {
        return (
            <div>
                <Register setUser={setUser} setPass={setPass} fetchUrl={fetchUrl} />
            </div>
        )
    }
    else if (containerType === "LOGIN" && loggedIn == false) {
        return (<div>
            <Login setUser={setUser} setPass={setPass} fetchUrl={fetchUrl} />
        </div>)

    }
    else if (loggedIn == true) {
        return (
            <div>
                <List currentUserAccess={currentUserAccess} setIsModalVisible={setIsModalVisible} setConfigKey={setConfigKey} fetchUrl={fetchUrl} users={users} setUsers={setUsers} />
            </div>
        )
    }

    else {
        return (
            <div className='imgContainer'>
                <img className='img' src={img['placeholder']} alt="Failed to load img" />
            </div>
        )
    }
}

export default Container;