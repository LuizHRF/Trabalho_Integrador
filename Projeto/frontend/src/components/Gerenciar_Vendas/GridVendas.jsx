import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const estilo = {
    border:"1px solid lightGrey",
    borderRadius:"5px",
    padding:"10px",
}
export default function GridVendas(props){

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Agente: {props.row.ag_nome}
                </Typography>
            </Grid>
            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Operadora:: {props.row.operadora}
                </Typography>
            </Grid>

            <Grid xs={5}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Data de embarque: {props.row.dt_embarque}
                </Typography>
            </Grid>
            <Grid xs={5}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Data de vnda: {props.row.dt_venda}
                </Typography>
            </Grid>
            <Grid xs={2}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Número de noites: {props.row.num_noites}
                </Typography>
            </Grid>

            <Grid xs={4}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Valor de taxas: {props.row.v_taxas}
                </Typography>
            </Grid>
            <Grid xs={4}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Valor do over: {props.row.v_over}
                </Typography>
            </Grid>
            <Grid xs={4}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Valor de tarifas: {props.row.v_tarifa}
                </Typography>
            </Grid>


            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Hotel: {props.row.hotel}
                </Typography>
            </Grid>
            <Grid xs={9}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Observações: {props.row.observacoes}
                </Typography>
            </Grid>
            

        </Grid>
    </Box>
    
    );
}