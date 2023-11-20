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

        <Button sx={Psx} style={estiloBotao} variant="contained">Gerenciar Vendas</Button>
        
        <Button sx={Psx} style={estiloBotao} variant="contained">Gerenciar Clientes</Button>

        <Button sx={Psx} style={estiloBotao} variant="contained">Gerenciar Destinos</Button>

        <Button sx={Psx} style={estiloBotao} variant="contained">Gerenciar Interesses</Button>

        </>
    )
}