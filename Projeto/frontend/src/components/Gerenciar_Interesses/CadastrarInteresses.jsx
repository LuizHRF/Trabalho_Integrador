import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import BasicSelect from "./BasicSelect";


function CadastrarClientes(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={12}>
                Cliente:
                <TextField fullWidth size="small" label="Cliente" variant="outlined" />
            </Grid>


            <Grid xs={12}>
                Contato:
                <TextField fullWidth size="small" label="Contato" variant="outlined" /> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>


            <Grid xs={6}>
                Destino:
                <BasicSelect />
            </Grid>
            <Grid xs={6}>
                Data de interesse:
                <TextField fullWidth size="small" label="Data de interesse" variant="outlined" />
            </Grid>

        </Grid>
    </Box>
        
    );
}

export default CadastrarClientes;