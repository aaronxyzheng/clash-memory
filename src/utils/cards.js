const cardObjects = import.meta.glob("../assets/cards/*.png", { eager: true });
const cardUrls = Object.values(cardObjects).map((m) => m.default);

function chooseRandomCards(quantity = 5) {
    const shuffled = [...cardUrls].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, quantity)
}

export default chooseRandomCards