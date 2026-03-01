import styles from "./EndScreen.module.css";
import hogScreamEmote from "../assets/emotes/emote_hog_scream.png";
import kingCryEmote from "../assets/emotes/emote_king_cry.png";

function LosingScreen({ playAgain }) {
    return (
        <div className={styles.screen}>
            <div>
                <div className={styles.emojiDiv}>
                    <img src={hogScreamEmote} />
                    <img src={kingCryEmote} />
                    <img src={hogScreamEmote} />
                </div>
                <div className={styles.textDiv}>
                    <div className={styles.mainText}>You Lost</div>
                    <button onClick={playAgain}>Play Again</button>
                </div>
                <div className={styles.emojiDiv}>
                    <img src={kingCryEmote} />
                    <img src={hogScreamEmote} />
                    <img src={kingCryEmote} />
                </div>
            </div>
        </div>
    );
}

export default LosingScreen;
