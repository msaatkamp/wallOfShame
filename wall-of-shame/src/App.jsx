import logo from './logo.svg';
import './App.css';
import React, { Children, useState } from 'react'

const BaseElement = (props) => {
  console.log(props)
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
  let pokecorefetch
  const [pokei, setpokei] = useState('')
  const [pokei2, setpokei2] = useState('')

  const Uc = (p) => {
    if (typeof p.name == 'string') {
      return <>{p.name.toUpperCase()}</>
    }
  }


  const onMount = () => {
    // Todo request, deve aguardar um response
    // Timeout === the server did not response 
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokei, getRequestSample)
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
    fetch(`https://pokeapi.co/api/v2/pokemon/` + pokei2, getRequestSample)
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
  console.log(pokemon.name);
  console.log(typeof pokemon.name);
  const handleNewPoke = (e) => {
    setpokei(e.target.value)
  }
  const handleNewPoke2 = (e) => {
    setpokei2(e.target.value)
  }
  const [textft, setTextft] = useState('')
  const handleRandom = () => {
    const random = Math.random()
    console.log('log')
    console.log(random)
    if (random > 0.5) {
      setTextft(`What a shame, the wild ${pokemon.name} defeated your ${pokemon2.name}.`)
    } else
      setTextft(`congratulations, your ${pokemon2.name} won!!`)



    console.log(textft)

  }
  return (
    <BaseElement >
      <div >
        <button className='fbtn' onClick={handleRandom} >Fight!</button>

      </div>
      <div className='con'>

        <div className="container">
          <div className='p1'>
            {pokemon && pokemon.sprites && pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} />}
          </div>
          <span className='pname1'> <Uc name={pokemon.name} /></span>
          <div className='p2'>
            {pokemon2 && pokemon2.sprites && pokemon2.sprites.back_default && <img src={pokemon2.sprites.back_default} />}
            <span className='pname2'> <Uc name={pokemon2.name} /></span>
          </div>
        </div>
        <div>

          <div className='textbox'> {textft}</div>
        </div>

      </div>
      <div className='con'>

        <div>
          <input type="text" className='input' placeholder='insert wild poke name' value={pokei} onChange={handleNewPoke} />
        </div>
        <span>
          <button onClick={onMount}> VS </button>
        </span>
        <div>
          <input type="text" className='input' placeholder='insert trainer poke name' value={pokei2} onChange={handleNewPoke2} />
        </div>
      </div>




    </BaseElement>
  );
}

export default App;

//<span className='pname2'><Uc name2=name >{pokemon2.name}</Uc></span>