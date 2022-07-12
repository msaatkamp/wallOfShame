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
const getRequestSample = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};

function App() {

  const [pokemon, setPokemon] = React.useState([])

  const onMount = () => {

    console.log({ mingala: "noob" });

    const pokemon1 = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')

    var pokemonsArray = []

    Promise.all([pokemon1, pokemon2]).then(values => {
      return Promise.all(values.map(res => res.json()))

    }).then(([pokemon1, pokemon2]) => {

      var pokemonsArray = [pokemon1, pokemon2]
      return pokemonsArray

    }).then(answer => {
      setPokemon(answer)
    }
    )
      .catch(e => {
        console.log(`Could not fetch pokemon error: ${e}`)
      }).finally(() => {
        console.log("Fetch end")
      })
  }

  // onMount useEffect to fetch the first page render
  React.useEffect(onMount, [])

  return <BaseElement>
    {
      pokemon.length && pokemon.map(pkm => {
        return <div>
          {pkm.sprites && pkm.sprites.back_default && <img src={pkm.sprites.back_default} />}
        </div>
      }
      )
    }
  </BaseElement>
}

export default App;