import Card from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { HomePageContainer } from "./style";

export function HomePage() {
    return <HomePageContainer>
        <Header/>

        <main>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </main>
    </HomePageContainer>
}