import React from "react";
import Button from '@mui/material/Button';

const estiloBotao = {
    borderRadius: "30px",
    padding: "10px"
}
const Psx = {
    fontSize: "20px",
}

export default function Buttons(){
    return(
        <>

        <Button sx={Psx} style={estiloBotao} variant="contained">FUNÇÃO 1</Button>
        
        <Button sx={Psx} style={estiloBotao} variant="contained">FUNÇÃO 2</Button>

        <Button sx={Psx} style={estiloBotao} variant="contained">FUNÇÃO 3</Button>

        </>
    )
}