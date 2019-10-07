import React from "react";
import Cards from "./Cards";

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let cardDeck = [];
    let card = [];

    for (let x = 0; x < suits.length; x++) {
      for (let y = 0; y < values.length; y++) {
        card = { suit: suits[x], val: values[y] };
        cardDeck.push(card);
      }
    }

    return (
      <div>
        {cardDeck.map(function(card) {
          return <Cards suit={card.suit} value={card.val} />;
        })}
      </div>
    );
  }
}

export default Deck;
