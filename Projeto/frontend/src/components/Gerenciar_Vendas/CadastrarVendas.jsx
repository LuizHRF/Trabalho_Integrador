import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import BasicSelect from "./BasicSelect";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography } from "@mui/material";

function CadastrarVendas(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            <Grid xs={6}>
                Cliente:
                <BasicSelect />
            </Grid>
            <Grid xs={6}>
                Destino:
                <BasicSelect />
            </Grid>


            <Grid xs={4}>
                Número de noites:
                <TextField fullWidth size="small" label="Nº de noites" variant="outlined" /> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>
            <Grid xs={4}>
                Número do orçamento:
                <TextField fullWidth size="small" label="Nº do orçamento" variant="outlined" />
            </Grid>
            <Grid xs={4}>
                Data de embarque:
                <TextField fullWidth size="small" label="Data de embarque" variant="outlined" />
            </Grid>

            
            <Grid xs={6}>
                Hotel: 
                <TextField fullWidth size="small" label="Hotel" variant="outlined" />
            </Grid>
            <Grid xs={6}>
                Operadora:  
                <TextField fullWidth size="small" label="Operadora" variant="outlined" />
            </Grid>
            

            <Grid xs={12}>
                <Divider textAlign="left">FINANCEIRO</Divider>
            </Grid>

            <Grid xs={4}>
                Valor da tarifa:
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} />
            </Grid>
            <Grid xs={4}>
                Valor da taxa:
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} />
            </Grid>
            <Grid xs={4}>
                Valor do Over:
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} />
            </Grid>

            <Grid xs={6}>
                Data da emissão:
                <TextField fullWidth size="small" label="Data da emissão" variant="outlined" />
            </Grid>
            <Grid xs={6}>
                Comissão:  
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} />
            </Grid>

            <Grid xs={12}>
                <Typography>
                    Valor final: R$XXX,00
                </Typography>
            </Grid>
        

        </Grid>
    </Box>
        
    );
}

export default CadastrarVendas;