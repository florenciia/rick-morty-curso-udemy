import { useState } from 'react';
import './App.css';
import { Characters } from './Components/Characters';
import imgrickmorty from './img/rick-morty.home.png';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty </h1>

      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
      ) : (
        <> 
        <img className='img-home' src={imgrickmorty} alt='rickandmorty' />
        <button onClick={reqApi} className='btn-search'> Buscar personaje </button>
        </>
      )}

       
      </header>
    </div>
  );
}

export default App;