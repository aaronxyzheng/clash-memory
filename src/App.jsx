import { useRef, useEffect, useState } from "react";
import chooseRandomCards from "./utils/cards";
import MusicToggle from "./components/MusicToggle";
import CardSection from "./components/CardSection";

function App() {
    const audioRef = useRef(new Audio("/main-music.ogg"));
    const [musicPlaying, setMusicPlaying] = useState(false);
    const [activeCardUrls, setActiveCardUrls] = useState(() => chooseRandomCards(5));

    // For the Audio
    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        const startMusic = () => {
            audio.play();
            setMusicPlaying(true);
            document.removeEventListener("click", startMusic);
        };
        document.addEventListener("click", startMusic);
        return () => document.removeEventListener("click", startMusic);
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play();
            setMusicPlaying(true);
        } else {
            audio.pause();
            setMusicPlaying(false);
        }
    };

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
