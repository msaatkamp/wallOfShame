import './App.css';
import React, { Children } from 'react'

const BaseElement = (props) => {
  return <div className="App">
    <header className="App-header">
      Pokemon Battle
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

    const pokemon1 = fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    const pokemon2 = fetch('https://pokeapi.co/api/v2/pokemon/charizard')

    var pokemonsArray = []

    Promise.all([pokemon1, pokemon2]).then(values => {
      return Promise.all(values.map(res => res.json()))

    }).then(([pokemon1, pokemon2]) => {

      var pokemonsArray = [pokemon1, pokemon2]
      return pokemonsArray

    }).then(answer => {
      setPokemon(answer)

    }).catch(e => {
      console.log(`Could not fetch pokemon error: ${e}`)

    }).finally(() => {
      console.log("Fetch end")
    })
  }

  // onMount useEffect to fetch the first page render
  React.useEffect(onMount, [])

  return <BaseElement>
    <div className="container">
      {
        pokemon.length && pokemon.map((pkm, index) => {

          const isUp = index % 2
          const imgKey = isUp ? 'back_default' : 'front_default'

          return <div key={index} className={(isUp ? 'down' : 'up')}>

            {pkm.sprites && pkm.sprites[imgKey] && <img src={pkm.sprites[imgKey]} />}
            <span className={(isUp ? 'down-name' : 'up-name')}>{pkm.name}</span>
          </div>
        }
        )
      }
    </div>
    <div>

    </div>
  </BaseElement>
}

export default App;