function Card({ url, onClick }) {
    return (
        <div onClick={() => onClick(url)}>
            <img src={url} />
        </div>
    );
}

export default Card;
