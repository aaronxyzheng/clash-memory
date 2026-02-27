import styles from "./MusicToggle.module.css";
import volumeOffIcon from "../assets/svg/volume-off.svg";
import volumeOnIcon from "../assets/svg/volume-on.svg";
import { useState } from "react";

function MusicToggle({ toggleMusic, musicPlaying }) {
    return (
        <button className={styles.button} onClick={toggleMusic}>
            <img className={styles.icon} src={musicPlaying ? volumeOnIcon : volumeOffIcon} />
        </button>
    );
}

export default MusicToggle;
