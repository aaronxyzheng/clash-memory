import { useState, useRef } from "react";
import useMusic from "./hooks/useMusic";
// Components
import MusicToggle from "./components/MusicToggle";
import CardSection from "./components/CardSection";
import Card from "./components/Card";
import LosingScreen from "./components/LosingScreen";
import WinScreen from "./components/WinScreen";
import ScorePanel from "./components/ScorePanel";
// Util
import CardManager from "./utils/cards";

function App() {
    const [musicPlaying, toggleMusic] = useMusic();
    const [gameCardUrls, setGameCardUrls] = useState(() => CardManager.chooseRandomCards(20));
    const [activeCardUrls, setActiveCardUrls] = useState(() => CardManager.chooseSubset(gameCardUrls, []));
    const [gameState, setGameState] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [deckKey, setDeckKey] = useState(0); // Incremented each deal to force cards to remount and re-animate
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const clickedCards = useRef([]);

    const onCardClick = (url) => {
        if (isShuffling) return;
        if (clickedCards.current.includes(url)) {
            setGameState("lost");
        } else {
            clickedCards.current.push(url);
            const newScore = clickedCards.current.length;
            setScore(newScore);
            setHighScore((h) => Math.max(h, newScore));
            setIsShuffling(true);
            setTimeout(() => {
                const next = CardManager.chooseSubset(gameCardUrls, clickedCards.current);
                if (next.length === 0) {
                    setGameState("won");
                } else {
                    setActiveCardUrls(next);
                    setDeckKey((k) => k + 1);
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
        setDeckKey((k) => k + 1);
        setIsShuffling(false);
        setScore(0);
        clickedCards.current = [];
    };

    return (
        <>
            <ScorePanel score={score} total={gameCardUrls.length} highScore={highScore} />
            <CardSection>
                {activeCardUrls.map((url, index) => (
                    <Card
                        key={`${url}-${deckKey}`}
                        url={url}
                        onClick={onCardClick}
                        isShuffling={isShuffling}
                        index={index}
                    />
                ))}
            </CardSection>

            <MusicToggle toggleMusic={toggleMusic} musicPlaying={musicPlaying} />
            {gameState === "lost" && <LosingScreen playAgain={playAgain} />}
            {gameState === "won" && <WinScreen playAgain={playAgain} />}
        </>
    );
}

export default App;
