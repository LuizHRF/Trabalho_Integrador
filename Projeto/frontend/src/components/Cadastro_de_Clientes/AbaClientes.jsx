import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';


function AbaClientes(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={12}>
                Nome:
                <TextField fullWidth size="small" label="Nome do cliente" variant="outlined" />
            </Grid>


            <Grid xs={4}>
                CPF:
                <TextField fullWidth size="small" label="CPF" variant="outlined" /> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>
            <Grid xs={4}>
                RG:
                <TextField fullWidth size="small" label="RG" variant="outlined" />
            </Grid>
            <Grid xs={4}>
                Data de nascimento:
                <TextField fullWidth size="small" label="Data de nascimento" variant="outlined" />
            </Grid>

            
            <Grid xs={9}>
                Logradouro:
                <TextField fullWidth size="small" label="Logradouro" variant="outlined" />
            </Grid>
            <Grid xs={3}>
                CEP: 
                <TextField fullWidth size="small" label="CEP" variant="outlined" />
            </Grid>


            <Grid xs={5}>
                Bairro:
                <TextField fullWidth size="small" label="Bairro" variant="outlined" /> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>
            <Grid xs={4}>
                Cidade:
                <TextField fullWidth size="small" label="Cidade" variant="outlined" />
            </Grid>
            <Grid xs={3}>
                Estado:
                <TextField fullWidth size="small" label="UF" variant="outlined" />
            </Grid>
            

            <Grid xs={9}>
                Email:
                <TextField fullWidth size="small" label="Email" variant="outlined" />
            </Grid>
            <Grid xs={3}>
                Telefone: 
                <TextField fullWidth size="small" label="Telefone" variant="outlined" />
            </Grid>


            <Grid xs={12}>
                <Divider textAlign="left">ACOMPANHANTES</Divider>
            </Grid>

            <Grid xs={9}>
                Nome do acompanhante:
                <TextField fullWidth size="small" label="Acompanhante" variant="outlined" />
            </Grid>
            <Grid xs={3}>
                Data de nascimento: 
                <TextField fullWidth size="small" label="Dt. de nascimento" variant="outlined" />
            </Grid>

            <Grid xs={6}>
               CPF do acompanhante:
                <TextField fullWidth size="small" label="CPF" variant="outlined" />
            </Grid>
            <Grid xs={6}>
                RG do acompanhante
                <TextField fullWidth size="small" label="RG" variant="outlined" />
            </Grid>
        

        </Grid>
    </Box>
        
    );
}

export default AbaClientes;