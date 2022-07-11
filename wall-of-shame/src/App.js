import './App.css';
import React from 'react'

const WrapperDiv = (props) => { 
  // Props => { pokemon, children, Camila ... }
  const { pokemon, children } = props
  return props.pokemon ? <div className="App">
  <header className="App-header">
    Name: {pokemon.name}
    Photo: {children}
  </header>
</div> : <div className="App">
  <header className="App-header">SEM POKEMONS</header></div>
}

// REST API
const getRequestSample =  { 
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default' 
};

function App() {

  const [ pokemon, setPokemon ] = React.useState(``);

  const errorFunction = (e) => console.log(`Could not fetch pokemon, error: ${e}`)
  const fetchPokemon = (pokemonName) => {
    console.log({ mingala: "noob"});

    // Todo request, deve aguardar um response
    // Timeout === the server did not response

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, getRequestSample) 
    
    .then(res => {
      if ( res.status === 200 ) {
        return res.json(); // Reading the body stream response and returning it to the next level
      }
      throw "nao tem pokemon"
    }
    )

    .then(answer => {
      setPokemon(answer)
    })
    
    .catch(errorFunction)
    
    .finally(() => { 
      console.log("Fetch end")
    });
  }
  
  // onMount useEffect to fetch the first page render
  React.useEffect(() => {
    fetchPokemon("dragonite")
  }, [])

  return (
    <WrapperDiv>
      <div>
        {pokemon && pokemon.sprites && pokemon.sprites.back_default && <img src={pokemon.sprites.back_default} />}
      </div>
    </WrapperDiv>
  );
}


export default App;
