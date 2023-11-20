import React from "react";
import Header from "./Header";
import Buttons from "./Dashboard/Buttons";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/system/Stack';


function TemplatePagina(props){
    return(

        <Stack spacing ={2} style={{border:"2px solid black", margin:"150px", marginTop: "50px", boxShadow: "0px 0px 50px black"}}>
        <Header acesso="Agente de viagens" mensagem={props.mensagem}/>

        <Grid container spacing={0}>
            <Grid xs={3}>
                <Stack spacing={2} style ={{padding:"10px", marginBottom:"10px"}}>
                    <Buttons />
                </Stack>
            </Grid>
            <Grid xs={9}>
                {props.pagina}
            </Grid>
        </Grid>
      
        </Stack>
    );
}

export default TemplatePagina;