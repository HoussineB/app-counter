import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Counter = ({ message }) => {
  const initialCounter = 0;
  const [count, setCount] = useState(initialCounter);

  const handelPlus = () => {
    setCount(count + 1);
  };

  const handelMoins = () => {
    setCount(count - 1);
  };

  const handelReset = () => {
    setCount(initialCounter);
  };

  return (
    <>
      <h1>{message}</h1>
      <center>
        <Avatar>{count}</Avatar>
      </center>
      <br></br>

      <Stack direction="row" spacing={3} justifyContent="center">
        <Button onClick={handelMoins} variant="outlined" color="error">
          -(Moins)
        </Button>
        <Button onClick={handelPlus} variant="outlined" color="success">
          +(Plus)
        </Button>
        <Button onClick={handelReset} variant="outlined" color="primary">
          RESET
        </Button>
      </Stack>
    </>
  );
};
export default Counter;
