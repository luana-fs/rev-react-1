import Card from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { HomePageContainer } from "./style";

export function HomePage(props) {

    const { characters } = props

    const renderList = characters.map((person) => {
        return <Card 
                img={person.image}
                name={person.name}
                species={person.species}
                />
    })

    return <HomePageContainer>
        <Header/>

        <main>
           {renderList}
        </main>
    </HomePageContainer>
}