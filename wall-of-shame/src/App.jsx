import logo from './logo.svg';
import './App.css';
import React, { Children, useState } from 'react'
import Text from './components/textbox';
import FButton from './components/fightbutton';
import Container from './components/container';
import Input from './components/input';
import VS from './components/vsbutton';

const BaseElement = (props) => {
  return <div className="App">
    <header className="App-header">
      {props.children}
    </header>
  </div>
}

function App() {
  const [pokemon, setPokemon] = React.useState([])
  const [pokeo, setPokeo] = useState({
    wild: '',
    trainer: ''
  })
  const [textft, setTextft] = useState('')



  return (
    <BaseElement >
      <FButton set={setTextft} poke={pokemon} />
      <div className='con'>
        <Container pokemon={pokemon} />
        <Text tft={textft} />
      </div>
      <div className='con'>
        <Input set={setPokeo} name={'wild'} />
        <VS pokeo={pokeo} setPokemon={setPokemon} />
        <Input set={setPokeo} name={'trainer'} />
      </div>




    </BaseElement>
  );
}

export default App;

//<span className='pname2'><Uc name2=name >{pokemon2.name}</Uc></span>