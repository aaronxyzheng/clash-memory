const cardObjects = import.meta.glob("../assets/cards/*.png", { eager: true });
const cardUrls = Object.values(cardObjects).map((m) => m.default);

class CardManager {
    static chooseRandomCards(quantity = 5) {
        const shuffled = [...cardUrls].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, quantity);
    }

    static chooseSubset(gameCards, clickedCards) {
        let subset = [];

        if (gameCards.every((n) => clickedCards.includes(n))) return [];

        while (true) {
            const shuffled = [...gameCards].sort(() => Math.random() - 0.5);
            subset = shuffled.slice(0, 5);
            if (!subset.every((n) => clickedCards.includes(n))) {
                break;
            }
        }
        return subset;
    }
}

export default CardManager;
