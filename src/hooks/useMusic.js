import { useRef, useState, useEffect } from "react";

function useMusic() {

    const audioRef = useRef(new Audio("/main-music.ogg"));
    const [musicPlaying, setMusicPlaying] = useState(false);
    
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

    return [musicPlaying, toggleMusic]
}

export default useMusic;