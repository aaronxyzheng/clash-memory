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
    const [isShuffling, setIsShuffling] = useState(false);
    const [turn, setTurn] = useState(0); // So that cards remount between rounds
    const clickedCards = useRef([]);

    const onCardClick = (url) => {
        if (isShuffling) return;
        if (clickedCards.current.includes(url)) {
            setGameState("lost");
        } else {
            clickedCards.current.push(url);
            setIsShuffling(true);
            setTimeout(() => {
                const next = CardManager.chooseSubset(gameCardUrls, clickedCards.current);
                if (next.length === 0) {
                    setGameState("won");
                } else {
                    setActiveCardUrls(next);
                    setTurn((t) => t + 1);
                    setIsShuffling(false);
                }
            }, 350);
        }
    };

    const playAgain = () => {
        const newCards = CardManager.chooseRandomCards(20);
        setGameCardUrls(newCards);
        setActiveCardUrls(CardManager.chooseSubset(newCards, []));
        setGameState(null);
        setTurn((t) => t + 1);
        setIsShuffling(false);
        clickedCards.current = [];
    };

    return (
        <>
            <CardSection>
                {activeCardUrls.map((url, index) => (
                    <Card key={`${url}-${turn}`} url={url} onClick={onCardClick} isShuffling={isShuffling} index={index} />
                ))}
            </CardSection>

            <MusicToggle toggleMusic={toggleMusic} musicPlaying={musicPlaying} />
            {gameState === "lost" && <LosingScreen playAgain={playAgain} />}
            {gameState === "won" && <WinScreen playAgain={playAgain} />}
        </>
    );
}

export default App;
