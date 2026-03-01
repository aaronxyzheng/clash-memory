import styles from "./EndScreen.module.css";
import royalHogGoldEmote from "../assets/emotes/emote_royal_hog_gold.png";
import royalHogFireworkEmote from "../assets/emotes/emote_royal_hog_firework.png";
import kingGamerEmote from "../assets/emotes/emote_king_gamer.png";
import kingNr1Emote from "../assets/emotes/emote_king_nr1.png";
import goblinLaughEmote from "../assets/emotes/emote_goblin_laugh.png";
import giantSantaEmote from "../assets/emotes/emote_giant_santa.png";

function WinScreen({ playAgain }) {
    return (
        <div className={styles.screen}>
            <div>
                <div className={styles.emojiDiv}>
                    <img src={royalHogFireworkEmote} />
                    <img src={kingGamerEmote} />
                    <img src={goblinLaughEmote} />
                </div>
                <div className={styles.textDiv}>
                    <div className={styles.mainText}>You Won!</div>
                    <button onClick={playAgain}>Play Again</button>
                </div>
                <div className={styles.emojiDiv}>
                    <img src={kingNr1Emote} />
                    <img src={giantSantaEmote} />
                    <img src={royalHogGoldEmote} />
                </div>
            </div>
        </div>
    );
}

export default WinScreen;
