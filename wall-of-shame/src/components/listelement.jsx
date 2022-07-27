import React from 'react'
import '../styles/list.css'

const ListElement = ({ user, setIsModalVisible, setConfigKey, currentUserAccess, fetchUrl }) => {

    const handleConfig = () => {
        if (user[1].access !== "admin" || currentUserAccess == "admin") {
            setIsModalVisible(true)
            setConfigKey(user[0])
        }
        else {
            window.alert("Sorry you dont have the permission to edit this user!")
        }
    }

    const handleDelete = () => {
        if (user[1].access !== "admin" || currentUserAccess == "admin") {
            fetchUrl(`user/${user[0]}`, "DELETE")
            fetchUrl("/users", 'GET')
        }
        else {
            window.alert("Sorry you dont have the permission to delete this user!")
        }
    }

    return (
        <div key={user[0]} className="listelement">
            <div className='username'>Username : {user[1].user} </div>
            <div className='access'> Access : {user[1].access}</div>
            <button className='modalbtn' onClick={handleConfig}> Cfg </button>
            <button className='deletebtn' onClick={handleDelete} > X </button>

        </div>
    );
}

export default ListElement;