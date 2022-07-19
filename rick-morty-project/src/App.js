import { GlobalStyle } from './GlobalStyle';
import { HomePage } from './pages/HomePage';
import { results } from './data/data'
import { useState } from 'react';
//aqui faremos a renderização condicional de telas no futuro

function App() {

  const [characters, setCharacters] = useState(results)
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [image, setImage] = useState("")

  const handleNameInput = (event) => setName(event.target.value)
  const handleSpecieInput = (event) => setSpecies(event.target.value)
  const handleImageInput = (event) => setImage(event.target.value)

  const addCharacter = (event) => {
    event.preventDefault()
    const newCharacter = {
      name,
      species,
      image
    }

    const newCharactersList = [...characters, newCharacter]
    setCharacters(newCharactersList)

    setName("")
    setSpecies("")
    setImage("")
  }
  
  const removeCharacter = (id) => {
      const filteredList = characters.filter(char => {
        return char.id !== id
      })

      setCharacters(filteredList)
      console.log(characters)
      console.log("clicou")
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage 
      characters={characters}
      handlers={{handleNameInput, handleSpecieInput, handleImageInput}}
      states={{name, species, image}}
      addCharacter={addCharacter}
      removeCharacter={removeCharacter}
      />
      {/* <DetailsPage/> */}
   
    </div>
  );
}

export default App;
