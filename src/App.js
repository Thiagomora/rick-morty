import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';


function App() {
  const [characters,setCharacters] = useState(null);

  const reqApi = async () =>{ //funcion asincrona
    const api = await fetch ("https://rickandmortyapi.com/api/character"); //recibe informacion de la api
    const characterApi = await api.json(); // se convierte en objetos json
    setCharacters(characterApi.results); //hacemos que characters reciba los objetos en lista
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ?(
          <Characters characters={characters} setCharacters={setCharacters}/>
        ):(
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqApi} className='btn-search'>Mostrar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
