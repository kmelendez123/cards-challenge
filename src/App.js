import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Cards from "./components/Cards";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  paper: {
    maxWidth: "4rem",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box m={10}>
      <Paper className={classes.paper}>
        <Cards />
      </Paper>
    </Box>
  );
}

export default App;
