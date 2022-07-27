import React from 'react'
import "../App.css"
import "../styles/modal.css"

const Modal = ({ setIsModalVisible, configKey, users, setUser, setPass, setUserAccess, fetchUrl }) => {
    let userOnModal = users[configKey]

    const handleUpdate = () => {
        fetchUrl(`user/${configKey}`, "PUT")
        fetchUrl("/users", 'GET')
        setIsModalVisible(false)
    }


    return (
        <div className='modal'>

            <div>
                <button onClick={() => setIsModalVisible(false)} className="closebtn" >Close</button>
                <p>
                    <h3>
                        Username : {userOnModal.user}
                    </h3>
                    <div>
                        <label> New username</label>
                    </div>
                    <input type="text" className='input' onChange={(e) => { setUser(e.target.value) }} />
                </p>
                <p>
                    <h3>
                        Password : {userOnModal.pass}
                    </h3>
                    <div>
                        <label> New password</label>
                    </div>
                    <input type="password" className='input' onChange={(e) => { setPass(e.target.value) }} />
                </p>
                <p>
                    <h3>
                        Access : {parseFloat(userOnModal.access)}
                    </h3>
                    <div>
                        <label> New access</label>
                    </div>
                    <select className='input' onChange={(e) => { setUserAccess(e.target.value) }}>
                        <option value="user" > Normal user </option>
                        <option value="moderator" > Moderator </option>
                        <option value="admin"> Admin </option>
                    </select>

                </p>
                <p>
                    Key : {configKey}
                </p>
            </div>
            <button onClick={handleUpdate}>Update User</button>

        </div>
    );
}

export default Modal;