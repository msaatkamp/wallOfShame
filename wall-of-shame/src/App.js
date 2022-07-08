import logo from './logo.svg';
import './App.css';
import React, { Children } from 'react'

const BaseElement = (props) => { 
  return <div className="App">
  <header className="App-header">
    HOME PAGE READY
    {props.children}
  </header>
</div>
}

// REST API
const getRequestSample =  { 
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default' 
};

function App() {

  const [ pokemon, setPokemon ] = React.useState(``)

  const onMount = () => {
    console.log({ mingala: "noob"});

    // Todo request, deve aguardar um response
    // Timeout === the server did not response 
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, getRequestSample) 
    .then(res => {
      console.log({ "response": res, });
      if ( res.status === 200 ) {
        return res.json(); // Reading the body stream response and returning it to the next level
      }
      throw "nao tem pokemon"
    }
    )
    .then(answer => {
      setPokemon(answer)
    }).catch(e => console.log(`Could not fetch pokemon, error: ${e}`)).finally(() => { 
      console.log("Fetch end")
    });
  }

  
  // onMount useEffect to fetch the first page render
  React.useEffect(onMount, [])

  return (
    <BaseElement>
      <div>
        {pokemon && pokemon.sprites && pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} />}
      </div>
    </BaseElement>
  );
}

export default App;
