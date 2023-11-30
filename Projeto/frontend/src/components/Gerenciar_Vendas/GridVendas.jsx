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
                    Email: {props.row.email}
                </Typography>
            </Grid>
            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Telefone: {props.row.telefone}
                </Typography>
            </Grid>

            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Data de nascimento: {props.row.dt_nasc}
                </Typography>
            </Grid>
            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Renda: {props.row.renda}
                </Typography>
            </Grid>
            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Profissão: {props.row.profissao}
                </Typography>
            </Grid>

            <Grid xs={12}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Endereço: {props.row.endereco}
                </Typography>
            </Grid>

            <Grid xs={12}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Observações: {props.row.observacoes}
                </Typography>
            </Grid>

        </Grid>
    </Box>
    
    );
}