import { useState } from "react";
import chooseRandomCards from "./utils/cards";
import useMusic from "./hooks/useMusic";
// Components
import MusicToggle from "./components/MusicToggle";
import CardSection from "./components/CardSection";

function App() {
    const [musicPlaying, toggleMusic] = useMusic();
    const [activeCardUrls, setActiveCardUrls] = useState(() => chooseRandomCards(5));

    return (
        <>
            <CardSection>
                {activeCardUrls.map((url) => (
                    <img key={url} src={url} />
                ))}
            </CardSection>

            <MusicToggle toggleMusic={toggleMusic} musicPlaying={musicPlaying} />
        </>
    );
}

export default App;
