import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <h2>Sélecteur de Langue Native</h2>
      <label htmlFor="language">Choisissez votre langue :</label>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
        <option value="es">Espagnol</option>
        <option value="de">Allemand</option>
      </select>
      <br></br>
      <hr></hr>
      <h2>Sélecteur de Langue MUI</h2>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="input-label-select-langue">
          <Stack direction="row" spacing={2} justifyContent="center">
            <LanguageIcon />
            <span style={{ marginLeft: "5px" }}>Langue</span>
          </Stack>
        </InputLabel>

        <Select
          labelId="label-select-langue"
          id="select-langue"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <MenuItem value="Mr Houssine">Français</MenuItem>
          <MenuItem value="Mr Mouhamed">Anglais</MenuItem>
          <MenuItem value="Mr Chadi">Espagnol</MenuItem>
          <MenuItem value="Mme Rayen">Allemand</MenuItem>
        </Select>
      </FormControl>
      <p>Enseignent : {selectedLanguage}</p>
    </>
  );
};

export default LanguageSelector;
