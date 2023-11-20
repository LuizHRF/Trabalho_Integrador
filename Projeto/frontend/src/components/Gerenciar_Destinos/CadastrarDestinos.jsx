import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';

function CadastrarDestinos(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={12}>
                Nome do destino:
                <TextField fullWidth size="small" label="Nome" variant="outlined" />
            </Grid>

            <Grid xs={12}>
                País:
                <TextField fullWidth size="small" label="País" variant="outlined" />
            </Grid>

            <Grid xs={12}>
                Documentos Obrigatórios:
                <TextField fullWidth size="small" label="Documentos" variant="outlined" />
            </Grid>

            <Grid xs={12}>
                Descrição:
                <TextField fullWidth size="small" label="Descrição" variant="outlined" />
            </Grid>
            

        </Grid>
    </Box>
        
    );
}

export default CadastrarDestinos;