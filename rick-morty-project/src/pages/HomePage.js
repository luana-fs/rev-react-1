import Card from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { HomePageContainer } from "./styles";

export function HomePage(props) {

    const { characters } = props
    const { handleNameInput, handleSpecieInput, handleImageInput } = props.handlers
    const {name, species, image} = props.states
    const { addCharacter } = props
    const { removeCharacter } = props
    

   
    const renderList = characters.map((person) => {
        return <Card 
                id={person.id}
                img={person.image}
                name={person.name}
                species={person.species}
                removeCharacter={removeCharacter}
                />
    })

    return <HomePageContainer>
        <Header/>
        <form action="">
           <label htmlFor="name">Nome: </label>
           <input id= "name" type="text" onChange={handleNameInput} value={name}/>
          
           <label htmlFor="species">Espécie: </label>
           <input id= "species" type="text" onChange={handleSpecieInput} value={species}/>
          
           <label htmlFor="image">Imagem: </label>
           <input id= "image" type="text" onChange={handleImageInput} value={image}/>
         
           {/* //button não pode ser aqui pq atualiza */}
           <button onClick={addCharacter}>Cadastrar</button>
        </form>

        <main>
           {renderList}
        </main>
    </HomePageContainer>
}