import { useMemo } from "react";
import Tilt from "react-parallax-tilt";
import styles from "./Card.module.css";

function Card({ url, onClick, isShuffling, index }) {
    const canHover = useMemo(() => window.matchMedia("(hover: hover)").matches, []);

    return (
        <div
            className={`${styles.card} ${isShuffling ? styles.gathering : ""}`}
            style={{ "--deal-delay": `${index * 60}ms` }}
        >
            <Tilt tiltMaxAngleX={15} tiltReverse={true} tiltMaxAngleY={15} scale={1.05} tiltEnable={canHover}>
                <div onClick={() => onClick(url)}>
                    <img src={url} />
                </div>
            </Tilt>
        </div>
    );
}

export default Card;
