import React, { useState, useEffect } from 'react';

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const suitSymbols = {
    Hearts: '♥️',
    Diamonds: '♦️',
    Clubs: '♣️',
    Spades: '♠️',
};

const generateDeck = () => {
    return suits.flatMap(suit => ranks.map(rank => ({ suit, rank })));
};

const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

const drawCard = (deck) => deck.pop();

function Game() {
    const [deck, setDeck] = useState(shuffleDeck(generateDeck()));
    const [drawnCard, setDrawnCard] = useState(null);

    useEffect(() => {
        const savedDeck = localStorage.getItem('deck');
        const savedDrawnCard = localStorage.getItem('drawnCard');

        if (savedDeck) setDeck(JSON.parse(savedDeck));
        if (savedDrawnCard) setDrawnCard(JSON.parse(savedDrawnCard));
    }, []);

    useEffect(() => {
        localStorage.setItem('deck', JSON.stringify(deck));
        if (drawnCard) localStorage.setItem('drawnCard', JSON.stringify(drawnCard));
    }, [deck, drawnCard]);

    const handleDrawCard = () => {
        if (deck.length === 0) {
            setDrawnCard('No more cards in the deck!');
            return;
        }

        const card = drawCard(deck);
        setDrawnCard(card);
        setDeck([...deck]); // Trigger re-render by creating a new array
    };

    const handleReset = () => {
        const newDeck = shuffleDeck(generateDeck());
        setDeck(newDeck);
        setDrawnCard(null);
        localStorage.removeItem('deck');
        localStorage.removeItem('drawnCard');
    };

    const renderCard = (card) => (
        <div className="w-24 h-32 border-2 border-gray-700 flex items-center justify-center text-3xl rounded-lg shadow-lg">
            <div className="text-center">
                <div className="text-4xl mb-1">{suitSymbols[card.suit]}</div>
                <div className="text-2xl">{card.rank}</div>
                <div className="text-4xl mt-1">{suitSymbols[card.suit]}</div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Card Drawer</h1>
            <div className="mb-4">
                <button
                    onClick={handleDrawCard}
                    className="p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Draw a Card
                </button>
                <button
                    onClick={handleReset}
                    className="p-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-4"
                >
                    Reset Deck
                </button>
            </div>
            <div className="mb-4">
                {drawnCard && (
                    typeof drawnCard === 'string' ? (
                        <p className="text-lg font-semibold">{drawnCard}</p>
                    ) : (
                        renderCard(drawnCard)
                    )
                )}
            </div>
            <div className="text-xl font-medium">
                Cards remaining: <span className="text-blue-600">{deck.length}</span>
            </div>
        </div>
    );
}

export default Game;
