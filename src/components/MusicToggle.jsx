import styles from "./MusicToggle.module.css";
import volumeOffIcon from "../assets/svg/volume-off.svg";
import volumeOnIcon from "../assets/svg/volume-on.svg";
import { useState } from "react";

function MusicToggle({ toggleMusic }) {
    const [musicOn, setMusicOn] = useState(true);

    const buttonClick = () => {
        toggleMusic();
        setMusicOn(!musicOn);
    };

    return (
        <button className={styles.button} onClick={buttonClick}>
            <img className={styles.icon} src={musicOn ? volumeOnIcon : volumeOffIcon} />
        </button>
    );
}

export default MusicToggle;
