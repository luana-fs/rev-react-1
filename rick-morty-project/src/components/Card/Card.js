import { CardContainer } from "./styles";


//não requer chaves e podemos exportar com qualquer nome
function Card () {
    return <CardContainer>
        <img src="https://rickandmortyapi.com/api/character/avatar/14.jpeg"/>
        <h2>Subtítulo</h2>
        <p>Descrição do Card</p>
        </CardContainer>
}

export default Card;