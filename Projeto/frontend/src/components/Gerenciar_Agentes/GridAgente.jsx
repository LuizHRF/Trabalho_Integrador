import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const estilo = {
    border:"1px solid lightGrey",
    borderRadius:"5px",
    padding:"10px",
}
export default function GridCliente(props){

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={4}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Data Nascimento: {props.row.dtnasc}
                </Typography>
            </Grid>
            <Grid xs={9}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Comissão e acordos: {props.row.comissao}
                </Typography>
            </Grid>

            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Salário {props.row.salario}
                </Typography>
            </Grid>
            <Grid xs={9}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Endereço: {props.row.ender}
                </Typography>
            </Grid>
            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Nível de acesso: {props.row.nivel_acesso}
                </Typography>
            </Grid>

            <Grid xs={9}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Férias: {props.row.ferias_disp}
                </Typography>
            </Grid>


        </Grid>
    </Box>
    
    );
}