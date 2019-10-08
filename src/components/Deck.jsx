import React from "react";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDeck: [],
      pickedCards: []
    };
  }

  render() {
    let id = 1;
    const initialDeck = this.state.cardDeck;
    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const ranks = [
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
    for (let x = 0; x < suits.length; x++) {
      for (let y = 0; y < ranks.length; y++) {
        let card = { id: id, suit: suits[x], val: ranks[y] };
        initialDeck.push(card);
        id++;
      }
    }

    const shuffleDeck = () => {
      const shuffledDeck = initialDeck;
      for (let i = shuffledDeck.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);
        let temp = shuffledDeck[i];
        shuffledDeck[i] = shuffledDeck[rand];
        shuffledDeck[rand] = temp;
      }
      this.setState({ cardDeck: shuffledDeck, pickedCards: [] });
    };

    const drawCard = () => {
      let cards = initialDeck;
      let cardsDrawnArray = this.state.pickedCards;
      const randCard = cards[Math.floor(Math.random() * cards.length)];
      const newCards = cards.filter(
        element => element.index !== randCard.index
      );
      this.setState({ cardDeck: newCards, pickedCards: [] });
      cardsDrawnArray.length < 52 && cardsDrawnArray.push(randCard);
      this.setState({ pickedCards: cardsDrawnArray });
    };
    return (
      <Grid container spacing={3}>
        <Grid item={4}>
          {initialDeck.map(function(card) {
            return <Cards key={card.id} suit={card.suit} value={card.val} />;
          })}
        </Grid>
        <Grid item={4}>
          <Button
            style={{ marginRight: "2rem" }}
            variant="contained"
            onClick={() => shuffleDeck()}
          >
            Shuffle
          </Button>
          <Button
            id="drawButton"
            variant="contained"
            onClick={() => drawCard()}
          >
            Draw Card
          </Button>
        </Grid>
        <Grid item={4}>
          {this.state.pickedCards.map(function(card) {
            return <Cards key={card.id} suit={card.suit} value={card.val} />;
          })}
        </Grid>
      </Grid>
    );
  }
}

export default Deck;
