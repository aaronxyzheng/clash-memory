import { useRef, useEffect } from "react";
import MusicToggle from "./components/MusicToggle";

function App() {
    const audioRef = useRef(new Audio("/main-music.ogg"));    

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        const startMusic = () => {
            audio.play();
            document.removeEventListener("click", startMusic);
        };
        document.addEventListener("click", startMusic);
        return () => document.removeEventListener("click", startMusic);
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        audio.paused ? audio.play() : audio.pause()
    }

    return (
        <>
            <MusicToggle toggleMusic={toggleMusic}/>
        </>
    );
}

export default App;
