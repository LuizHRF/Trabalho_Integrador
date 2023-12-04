import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 

import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function GridVendas(props){

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={6}>
                Agente:
                <TextField fullWidth size="small" label={props.rows.ag_vendedor} variant="outlined" />
            </Grid>
            <Grid xs={6}>
                Operadora:
                <TextField fullWidth size="small" label={props.rows.operadora} variant="outlined" />
            </Grid>

            <Grid xs={5}>
                Data de embarque:
                <TextField fullWidth size="small" label={props.rows.dt_embarque} variant="outlined" />
            </Grid>
            <Grid xs={5}>
                Data de venda:
                <TextField fullWidth size="small" label={props.rows.dt_venda} variant="outlined" />
            </Grid>
            <Grid xs={2}>
                Número de noites:
                <TextField fullWidth size="small" label={props.rows.num_noites} variant="outlined" />
            </Grid>

            <Grid xs={4}>
                Valor de taxas:
                <TextField fullWidth size="small" label={props.rows.v_taxas}variant="outlined" />
            </Grid>
            <Grid xs={4}>
                Valor do over:
                <TextField fullWidth size="small" label={props.rows.v_over} variant="outlined" />
            </Grid>
            <Grid xs={4}>
                Valor de tarifas:
                <TextField fullWidth size="small" label={props.rows.v_tarifa} variant="outlined" />
            </Grid>


            <Grid xs={3}>
                Hotel:
                <TextField fullWidth size="small" label={props.rows.hotel} variant="outlined" />
            </Grid>
            <Grid xs={9}>
                Observações:
                <TextField fullWidth size="small" label={props.rows.observacoes} variant="outlined" />
            </Grid>

            <Grid xs={9}>
                <Button variant="contained" style={props.estilo} >Cancelar</Button>
                <Button variant="contained" style={props.estilo} >Enviar</Button>
            </Grid>
            

        </Grid>
    </Box>
    
    );
}