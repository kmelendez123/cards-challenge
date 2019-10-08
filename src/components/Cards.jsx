import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  blackCard: {
    color: "black",
    marginBottom: 4
  },
  redCard: {
    color: "red",
    marginBottom: 4
  },
  paper: {
      maxWidth: "5rem",
  }
});

const Cards = (props) => {
  const classes = useStyles();
  if (props.suit === "♣︎" || props.suit === "♠︎") {
    return (
      <Paper className={classes.paper}>
        <Card className={classes.blackCard}>
          <CardContent>
            {props.value}
            {props.suit}
          </CardContent>
        </Card>
      </Paper>
    );
  } else {
    return (
      <Paper className={classes.paper}>
        <Card className={classes.redCard}>
          <CardContent>
            {props.value}
            {props.suit}
          </CardContent>
        </Card>
      </Paper>
    );
  }
};

export default Cards;
