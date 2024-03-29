import { Header } from "../../components/Header/Header";
import { Container } from './styles'


export function DetailsPage (props) {
    const {characters, id, changePage} = props

    const [character] = characters.filter(char => char.id === id)
    console.log(character)

    return (
        <>
        <Header/>
        <Container>
            <h2>{character?.name}</h2>
            <img src={character?.image} alt="" />
            <p>Espécie: {character?.species}</p>
            <p>Planeta: {character?.origin?.name}</p>
            <button onClick={() => changePage("home")}>Voltar</button>
        </Container>
        </>
    )
}