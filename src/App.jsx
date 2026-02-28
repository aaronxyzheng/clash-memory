import { useState, useRef } from "react";
import chooseRandomCards from "./utils/cards";
import useMusic from "./hooks/useMusic";
// Components
import MusicToggle from "./components/MusicToggle";
import CardSection from "./components/CardSection";
import Card from "./components/Card";
import LosingScreen from "./components/LosingScreen";

function App() {
    const [musicPlaying, toggleMusic] = useMusic();
    const [activeCardUrls, setActiveCardUrls] = useState(() => chooseRandomCards(5));
    const [gameLost, setGameLost] = useState(false);
    const clickedCards = useRef([]);

    const onCardClick = (url) => {
        if (clickedCards.current.includes(url)) {
            setGameLost(true);
        } else {
            clickedCards.current.push(url);
            console.log(url);
        }
    };

    const playAgain = () => {
        setActiveCardUrls(() => chooseRandomCards(5));
        setGameLost(false);
        clickedCards.current = [];
    };

    return (
        <>
            <CardSection>
                {activeCardUrls.map((url) => (
                    <Card key={url} url={url} onClick={onCardClick} />
                ))}
            </CardSection>

            <MusicToggle toggleMusic={toggleMusic} musicPlaying={musicPlaying} />
            {gameLost && <LosingScreen playAgain={playAgain} />}
        </>
    );
}

export default App;
