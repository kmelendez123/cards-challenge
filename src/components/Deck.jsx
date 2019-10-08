import React from "react";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDeck: [],
      pickedCards: [],
      initialDeck: []
    };
    let id = 1;
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
    for (const x of suits) {
      for (const y of ranks) {
        let card = { id: id, suit: x, val: y };
        this.state.initialDeck.push(card);
        id++;
      }
    }
  }

  async componentDidMount() {
    this.setState({ cardDeck: this.state.initialDeck })
  }

  render() {
    const shuffleDeck = () => {
      const shuffledDeck = this.state.initialDeck;
      for (let i = shuffledDeck.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * i);
        let temp = shuffledDeck[i];
        shuffledDeck[i] = shuffledDeck[rand];
        shuffledDeck[rand] = temp;
      }
      this.setState({ cardDeck: shuffledDeck, pickedCards: [] });
    };

    const drawCard = () => {
      let cards = this.state.cardDeck;
      let cardsDrawnArray = this.state.pickedCards;
      const randCard = cards[Math.floor(Math.random() * cards.length)];
      const newCards = cards.filter(element => element.id !== randCard.id);
      cardsDrawnArray.length < 52 && cardsDrawnArray.push(randCard);
      this.setState({ cardDeck: newCards, pickedCards: cardsDrawnArray });
    };

    return (
      <Grid container spacing={2}>
        <Grid item md={4}>
          {this.state.cardDeck.map(function(card) {
            return <Cards key={card.id} suit={card.suit} value={card.val} />;
          })}
        </Grid>
        <Grid item md={4}>
          <Button
            style={{ marginRight: "1rem" }}
            variant="contained"
            onClick={() => shuffleDeck()}
          >
            Shuffle
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            id="drawButton"
            variant="contained"
            onClick={() => drawCard()}
          >
            Draw Card
          </Button>
        </Grid>
        <Grid item md={4}>
          {this.state.pickedCards.map(function(card) {
            return <Cards key={card.id} suit={card.suit} value={card.val} />;
          })}
        </Grid>
      </Grid>
    );
  }
}

export default Deck;
