import { CardContainer } from "./styles";


//não requer chaves e podemos exportar com qualquer nome
function Card (props) {

    const {id, img, name, species, removeCharacter, changePage} = props
    return <CardContainer>
        <img src={img}/>
        <h2>{name}</h2>
        <p>{species}</p>
        <button onClick={()=> changePage("detailsPage", id)}>Detalhes</button>
        <button onClick={() => removeCharacter(id)}>Remover</button>
        </CardContainer>
}

export default Card;