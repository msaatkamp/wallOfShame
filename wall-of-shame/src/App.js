import './App.css';
import React, { useState } from 'react'
import Container from './components/maincontainer';
import Header from './components/header';
import Modal from './components/modal';

const WrapperDiv = (props) => {
  return <div className="App">
    <header className="App-header">
      {props.children}
    </header>
  </div>
}

// REST API
const GET_HEADER = {
  method: 'GET',
  headers: new Headers(),
  cache: 'default'
};

const POST_HEADERS = {
  method: 'POST',
  cache: 'default',
  headers: {
    "Content-Type": "application/json",
    credentials: "same-origin"
  },
};

const PUT_HEADERS = {
  method: 'PUT',
  cache: 'default',
  headers: {
    "Content-Type": "application/json",
    credentials: "same-origin"
  },
};
const DELETE_HEADERS = {
  method: 'DELETE',
  cache: 'default',
  headers: {
    "Content-Type": "application/json",
    credentials: "same-origin"
  },
};




function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [userAccess, setUserAccess] = useState('')
  const [containerType, setContainerType] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState({})
  const [configKey, setConfigKey] = useState('0')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentUserAccess, setCurrentUserAccess] = useState('')

  const fetchUrl = (url = "/", method = "GET", body = {}) => {
    let fetchmethod

    const post = {
      ...POST_HEADERS,
      body: JSON.stringify({ user: user, password: pass, access: "user" })
    }
    const put = {
      ...PUT_HEADERS,
      body: JSON.stringify({ user: user, password: pass, access: userAccess })
    }


    if (method == 'GET') {
      fetchmethod = GET_HEADER
    }
    else if (method === 'POST') {
      fetchmethod = post
    } else if (method === 'PUT') {
      fetchmethod = put
    } else if (method === 'DELETE') {
      fetchmethod = DELETE_HEADERS
    }




    console.log({ post })
    console.log({ url })
    console.log({ method })
    fetch(url, fetchmethod)
      .then(res => {
        if (res.ok) {
          console.log(res)
          if (url == '/register') {
            window.alert('Successfully registered!')
          }
          if (url == '/login') {
            setLoggedIn(true)
            window.alert('Success! now you are logged in')
          }


          return res.json(); // Reading the body stream response and returning it to the next level
        }
        if (url == '/register') {
          window.alert('user already registered, please change username and try again.')
        }
        if (url == '/login') {
          window.alert('Wrong combination of user and password, please check and try again.')
        }
        throw "URL nao encontrada"
      }
      )
      .then(answer => {
        if (url == '/users') {
          setUsers(answer)
        }
        if (url == '/login') {
          setCurrentUserAccess(answer)
          console.log(currentUserAccess)
        }

        console.log({ fromServer: answer })
        setLoading(false)
      })

      .catch(e => console.log({ error: e }))
  }

  // onMount useEffect to fetch the first page render
  React.useEffect(() => {
    fetchUrl("/", "GET")
  }, [])

  return (

    <WrapperDiv>

      <div className='mainheader'>
        <Header containerType={containerType} setCurrentUserAccess={setCurrentUserAccess} setContainerType={setContainerType} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      </div>
      <div className='maincontainer'>
        <Container currentUserAccess={currentUserAccess} containerType={containerType} setConfigKey={setConfigKey} users={users} setIsModalVisible={setIsModalVisible} setUsers={setUsers} loggedIn={loggedIn} setUser={setUser} setPass={setPass} fetchUrl={fetchUrl} />
      </div>
      {isModalVisible ?
        <div className='modalcontainer'>
          <Modal setUser={setUser} setPass={setPass} setUserAccess={setUserAccess} fetchUrl={fetchUrl} setIsModalVisible={setIsModalVisible} users={users} configKey={configKey} />
        </div> : null
      }

      <div className='mainfooter'>
        <h2>{loading ? "is loading, wait. . . " : " The application is ready"}</h2>
      </div>
    </WrapperDiv>
  );
}


export default App;
