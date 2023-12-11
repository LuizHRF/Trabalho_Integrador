import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CadastrarDestinos(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={9}>
                Nome:
                <TextField fullWidth size="small" label="Nome do agente" variant="outlined" />
            </Grid>
            <Grid xs={3}>
                CPF:
                <TextField fullWidth size="small" label="CPF" variant="outlined" /> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>

            <Grid xs={4}>
                Data de nascimento:
                <TextField fullWidth size="small" label="Data de nascimento" variant="outlined" />
            </Grid>
            <Grid xs={8}>
                Comissão: 
                <TextField fullWidth size="small" label="Comissao" variant="outlined" />
            </Grid>

            
            <Grid xs={3}>
                Salário:
                <TextField fullWidth size="small" label="Salário" variant="outlined" />
            </Grid>
            <Grid xs={9}>
                Endereço:
                <TextField fullWidth size="small" label="Endereço" variant="outlined" />
            </Grid>

            <Grid xs={3}>
                Nível de Acesso:
                <TextField fullWidth size="small" label="Acesso" variant="outlined" />
            </Grid>
            <Grid xs={9}>
                Férias disponíveis:
                <TextField fullWidth size="small" label="Férias" variant="outlined" />
            </Grid>
            

        </Grid>
    </Box>
        
    );
}

export default CadastrarDestinos;