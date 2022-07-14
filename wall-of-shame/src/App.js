import './App.css';
import React, { useState } from 'react'

const WrapperDiv = (props) => { 
  return  <div className="App">
  <header className="App-header">
    {props.children}
  </header>
</div> 
}

// REST API
const getRequestSample =  { 
  method: 'GET',
  headers: new Headers(),
  cache: 'default' 
};

const postRequestSample =  { 
  method: 'POST',
  cache: 'default' ,
  headers: {
    "Content-Type": "application/json",
  credentials: "same-origin"
  },
};

function App() {
 
  const [ loading, setLoading ] = useState(true)

  const fetchUrl = (url = "/mingawa", method = "GET", body = {}) => {

  const post = {
    ...postRequestSample,
    body: JSON.stringify({ user: "Misawa", password: "podre"})
  }

  console.log({ post })
  console.log({url})
    fetch(url, method == "GET" ? getRequestSample : post)     
    .then(res => {
      if ( res.ok ) {
        return res.json(); // Reading the body stream response and returning it to the next level
      }
      throw "URL nao encontrada"
    }
    )
    .then(answer => {
      console.log({fromServer: answer})
      setLoading(false)
    })
    
    .catch(e => console.log({ error: e}))
  }

  // onMount useEffect to fetch the first page render
  React.useEffect(() => {
    fetchUrl("/register", "POST")
  }, [])

  return (
    <WrapperDiv>
      <div>
        <h2>{loading ? "is loading, wait. . . " : " The application is ready"}</h2>
      </div>
    </WrapperDiv>
  );
}


export default App;
