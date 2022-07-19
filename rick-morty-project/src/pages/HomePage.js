import Card from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { HomePageContainer } from "./styles";

export function HomePage(props) {

    const { characters } = props
    const { 
        handleNameInput, 
        handleSpecieInput, 
        handleImageInput,
        handleOrderInput,
        handleSearchInput
    } = props.handlers

    const {
        name, 
        species,
        image,
        orderParam,
        search
    } = props.states

    const { addCharacter } = props
    const { removeCharacter } = props
    

   
    // const renderList = characters.map((person) => {
    //     return <Card 
    //             id={person.id}
    //             img={person.image}
    //             name={person.name}
    //             species={person.species}
    //             removeCharacter={removeCharacter}
    //             />
    // })

    const renderList = characters
                            .filter(person => search === ""|| person.name.toLowerCase().includes(search))
                            .sort((a, b) => orderParam === "" || orderParam === "cresc" && a.name > b.name ? 1 : -1)
                            .sort((a, b) => orderParam === "" || orderParam === "desc" && a.name > b.name ? -1 : 1)
                            .map((person) => {
        return <Card 
                id={person.id}
                img={person.image}
                name={person.name}
                species={person.species}
                removeCharacter={removeCharacter}
                />
    })

    return (
    <>
    <Header/>
    <HomePageContainer>

        <aside>
        <form action="">
            <h2>Adicionar personagem</h2>
           <label htmlFor="name">Nome: </label>
           <input id= "name" type="text" onChange={handleNameInput} value={name}/>
          
           <label htmlFor="species">Espécie: </label>
           <input id= "species" type="text" onChange={handleSpecieInput} value={species}/>
          
           <label htmlFor="image">Imagem: </label>
           <input id= "image" type="text" onChange={handleImageInput} value={image}/>
         
           <button onClick={addCharacter}>Cadastrar</button>

            <br />
            <br />
            <br />
            
            <h2>Busca</h2>
            <input id= "search" type="text" onChange={handleSearchInput} value={search}/>

            <h2>Ordenar</h2>
            <select onChange={handleOrderInput} value={orderParam}>
                <option value="cresc">Crescente</option>
                <option value="desc">Decrescente</option>
            </select>
        </form>
        </aside>

        <main>
           {renderList}
        </main>
    </HomePageContainer>
    </>
    )
}