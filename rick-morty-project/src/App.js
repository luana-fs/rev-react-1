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
  const [orderParam, setOrderParam] = useState(""); //price, title ou id
  const [search, setSearch] = useState("")


  const handleNameInput = (event) => setName(event.target.value)
  const handleSpecieInput = (event) => setSpecies(event.target.value)
  const handleImageInput = (event) => setImage(event.target.value)
  const handleOrderInput = (event) => setOrderParam(event.target.value)
  const handleSearchInput = (event) => setSearch(event.target.value)

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
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage 
      characters={characters}
      handlers={{handleNameInput, handleSpecieInput, handleImageInput, handleOrderInput, handleSearchInput}}
      states={{name, species, image, orderParam, search}}
      addCharacter={addCharacter}
      removeCharacter={removeCharacter}
      />
      {/* <DetailsPage/> */}
   
    </div>
  );
}

export default App;
