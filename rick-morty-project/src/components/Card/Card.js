import { CardContainer } from "./styles";


//não requer chaves e podemos exportar com qualquer nome
function Card (props) {
    return <CardContainer>
        <img src={props.img}/>
        <h2>{props.name}</h2>
        <p>{props.species}</p>
        </CardContainer>
}

export default Card;