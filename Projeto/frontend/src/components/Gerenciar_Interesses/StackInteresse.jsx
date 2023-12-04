import React from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function StackInteresse(props){
    return(
        <Stack spacing={2}>
            <Typography variant="h6" gutterBottom component="div">
                Contato:
            </Typography>
                {props.row.contato}
            <Typography variant="h6" gutterBottom component="div">
                Quantidade de passageiros:
            </Typography>
            {props.row.qtd_passageiros}
        </Stack>)
}