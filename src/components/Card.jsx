import Tilt from "react-parallax-tilt";

function Card({ url, onClick }) {
    return (
        <Tilt tiltMaxAngleX={15} tiltReverse={true} tiltMaxAngleY={15} scale={1.05}>
            <div onClick={() => onClick(url)}>
                <img src={url} />
            </div>
        </Tilt>
    );
}

export default Card;
