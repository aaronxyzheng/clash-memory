import { useState, useRef } from "react";
import chooseRandomCards from "./utils/cards";
import useMusic from "./hooks/useMusic";
// Components
import MusicToggle from "./components/MusicToggle";
import CardSection from "./components/CardSection";
import Card from "./components/Card";
import LosingScreen from "./components/LosingScreen";
import WinScreen from "./components/WinScreen";
// Util
import CardManager from "./utils/cards";

function App() {
    const [musicPlaying, toggleMusic] = useMusic();
    const [gameCardUrls, setGameCardUrls] = useState(() => CardManager.chooseRandomCards(20));
    const [activeCardUrls, setActiveCardUrls] = useState(() => CardManager.chooseSubset(gameCardUrls, []));
    const [gameState, setGameState] = useState(null);
    const clickedCards = useRef([]);

    const onCardClick = (url) => {
        if (clickedCards.current.includes(url)) {
            setGameState("lost");
        } else {
            clickedCards.current.push(url);
            const next = CardManager.chooseSubset(gameCardUrls, clickedCards.current);
            if (next.length === 0) {
                setGameState("won");
            } else {
                setActiveCardUrls(next);
            }
        }
    };

    const playAgain = () => {
        const newCards = CardManager.chooseRandomCards(20);
        setGameCardUrls(newCards);
        setActiveCardUrls(CardManager.chooseSubset(newCards, []));
        setGameState(null);
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
            {gameState === "lost" && <LosingScreen playAgain={playAgain} />}
            {gameState === "won" && <WinScreen playAgain={playAgain} />}
        </>
    );
}

export default App;
