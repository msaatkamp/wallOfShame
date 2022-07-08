import logo from './logo.svg';
import './App.css';
import React, { Children } from 'react'

const BaseElement = (props) => {
  return <div className="App">
    <header className="App-header">
      {props.children}
    </header>
  </div>
}

// REST API
const getRequestSample = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};

function App() {

  const [pokemon, setPokemon] = React.useState(``)
  const [pokemon2, setPokemon2] = React.useState(``)

  const onMount = () => {
    console.log({ mingala: "noob" });

    // Todo request, deve aguardar um response
    // Timeout === the server did not response 
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, getRequestSample)
      .then(res => {
        console.log({ "response": res, });
        if (res.status === 200) {
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

  const onMount2 = () => {
    console.log({ mingala: "noob" });

    // Todo request, deve aguardar um response
    // Timeout === the server did not response 
    fetch(`https://pokeapi.co/api/v2/pokemon/totodile`, getRequestSample)
      .then(res => {
        console.log({ "response": res, });
        if (res.status === 200) {
          return res.json(); // Reading the body stream response and returning it to the next level
        }
        throw "nao tem pokemon"
      }
      )
      .then(answer => {
        setPokemon2(answer)
      }).catch(e => console.log(`Could not fetch pokemon, error: ${e}`)).finally(() => {
        console.log("Fetch end")
      });
  }


  // onMount useEffect to fetch the first page render
  React.useEffect(onMount, [])
  React.useEffect(onMount2, [])

  return (
    <BaseElement >

      <div className="container">
        <div className='p1'>
          {pokemon && pokemon.sprites && pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} />}
        </div>
        <span className='pname1'>{pokemon.name.toUpperCase()}</span>
        <div className='p2'>
          {pokemon2 && pokemon2.sprites && pokemon2.sprites.back_default && <img src={pokemon2.sprites.back_default} />}
        </div>
        <span className='pname2'>{pokemon2.name.toUpperCase()}</span>
      </div>
    </BaseElement>
  );
}

export default App;
