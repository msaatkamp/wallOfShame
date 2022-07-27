import React, { useState, useEffect } from 'react'
import ListElement from './listelement'
import placeholder from "../imgs/placeholder.jpg"
import "../styles/imgs.css"

const img = { "placeholder": placeholder }
const List = ({ fetchUrl, users, setUsers, setIsModalVisible, setConfigKey, currentUserAccess }) => {
    const handleButton = () => {
        fetchUrl("/users", 'GET')
    }

    if (currentUserAccess == "moderator" || currentUserAccess == "admin") {
        return (
            <div>
                <div>
                    {Object.entries(users).map((user) => <ListElement fetchUrl={fetchUrl} currentUserAccess={currentUserAccess} setConfigKey={setConfigKey} setIsModalVisible={setIsModalVisible} user={user} />)}
                </div>

                <button className='button' onClick={handleButton}>Generate list</button>
            </div>
        );
    } else {
        return (
            <div className='imgContainer'>
                <h2>Coming Soon!</h2>
            </div>
        )
    }
}

export default List;