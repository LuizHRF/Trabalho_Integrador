import React from "react";
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';

export default function Opcoes(props){

    const estiloBotao = {
        borderRadius: "30px",
        padding: "10px"
    }
    
    return(

        <Stack spacing={2} style ={{padding:"10px", marginBottom:"10px"}}>

            <Button sx={{fontSize: "20px"}} style={estiloBotao} variant="contained">Cadastrar cliente</Button>
            <Button sx={{fontSize: "20px"}} style={estiloBotao} variant="contained">Consultar cliente</Button>

        </Stack>

    );
}