import React from "react";
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function StackInteresseAlteracao(props){
    return(
        <Stack spacing={2}>
            Contato:
            <TextField fullWidth size="small" label={props.row.contato} variant="outlined" />
            Quantidade de passageiros:
            <TextField fullWidth size="small" label={props.row.qtd_passageiros} variant="outlined" />

            <Button variant="contained" style={props.estilo} >Cancelar</Button>
            <Button variant="contained" style={props.estilo} >Enviar</Button>

        </Stack>)
}