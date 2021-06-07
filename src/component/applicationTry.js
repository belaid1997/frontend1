import ModalCard from "./cardon/ModalCard";
import "./styles.css";
import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

export default function App() {
  const [result, setResult] = React.useState();
  const [title, setTitle] = React.useState("My Modal Title");

  const onClick = async () => {
    let result = await ModalCard.show({ title });
    setResult(result);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          id="standard-basic"
          label="Modal Title"
          value={title}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" onClick={onClick} color="primary">
          Open Material-UI modal
        </Button>
      </Grid>
      <br />
      Custom Alert Card result is:
      {result == null ? "empty" : result ? "Yes" : "No"}
    </div>
  );
}
