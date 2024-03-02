import React, { useState } from "react";
import Button from '@mui/material/Button';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Calculator = () => {
    const [Calc, setCalc] = useState("");
    return (
        <div>
            <input type="text" value={Calc}/>
            <br />
            <Button onClick={() => setCalc(Calc + '1')} variant="outlined" color="error">1</Button>
            <Button onClick={() => setCalc(Calc + '2')} variant="outlined" color="error">2</Button>
            <Button onClick={() => setCalc(Calc + '3')} variant="outlined" color="error">3</Button>
            <Button onClick={() => setCalc('')} variant="outlined" color="error">c</Button>
            <br />
            <Button onClick={() => setCalc(Calc + '4')} variant="outlined" color="error">4</Button>
            <Button onClick={() => setCalc(Calc + '5')} variant="outlined" color="error">5</Button>
            <Button onClick={() => setCalc(Calc + '6')} variant="outlined" color="error">6</Button>
            <Button onClick={() => setCalc(Calc + '-')} variant="outlined" color="error">-</Button>
            <br />
            <Button onClick={() => setCalc(Calc + '7')} variant="outlined" color="error">7</Button>
            <Button onClick={() => setCalc(Calc + '8')} variant="outlined" color="error">8</Button>
            <Button onClick={() => setCalc(Calc + '9')} variant="outlined" color="error">9</Button>
            <Button onClick={() => setCalc(Calc + '/')} variant="outlined" color="error">/</Button>
            <br />
            <Button onClick={() => setCalc(Calc + '0')} variant="outlined" color="error">0</Button>
            <Button onClick={() => setCalc(Calc + '*')} variant="outlined" color="error">*</Button>
            <Button onClick={() => setCalc(Calc + '+')} variant="outlined" color="error">+</Button>
            <Button onClick={() => setCalc(eval(Calc))} variant="outlined" color="error">=</Button>

        </div>
    );
};

export default Calculator;