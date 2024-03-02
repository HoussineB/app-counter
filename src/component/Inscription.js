import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Inscription = () => {
  //const {} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [fisrtName, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  //password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  //modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1>Inscription</h1>
      <TextField
        id="fisrtName"
        label="First Name"
        variant="standard"
        onChange={(e) => setFisrtName(e.target.value)}
      />
      <br></br>
      <TextField
        id="lastName"
        label="Last Name"
        variant="standard"
        onChange={(e) => setLastName(e.target.value)}
      />
      <br></br>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="Input-label-password">Password</InputLabel>
        <OutlinedInput
          id="id-password"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <br></br>
      <Button variant="outlined" onClick={handleClickOpen}>
        Inscription
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Inscription details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Hello Mr {lastName} {fisrtName} votre password est : {password} vous
            etes inscrit merci !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Inscription;
