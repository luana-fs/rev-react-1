import { GlobalStyle } from './GlobalStyle';
import { HomePage } from './pages/HomePage';
import { results } from './data/data'
import { useState } from 'react';
//aqui faremos a renderização condicional de telas no futuro

function App() {

  const [characters, setCharactersList] = useState(results)

  const addPerson = () => {
    const character = {
      id: 200,
      name: "Teste",
      species: "Human",
      origin: {
        name: "Earth"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
    const newCharactersList = [...characters, character]
    setCharactersList(newCharactersList)
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <button onClick={addPerson}>Adicionar pessoa</button>
      <HomePage characters={characters}/>
      {/* <DetailsPage/> */}
   
    </div>
  );
}

export default App;
