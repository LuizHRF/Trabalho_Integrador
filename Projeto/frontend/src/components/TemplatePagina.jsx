import React from "react";
import Header from "./Header";
import Buttons from "./Dashboard/Buttons";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/system/Stack';

import DashBoard from "./Dashboard/DashBoard";
import CadastroVendas from "./Gerenciar_Vendas/GerenciarVendas";
import GerenciarClientes from "./Gerenciar_Clientes/GerenciarClientes";
import CadastrarClientes from "./Gerenciar_Clientes/CadastrarClientes";
import CadastrarVendas from "./Gerenciar_Vendas/CadastrarVendas";
import CadastrarDestinos from "./Gerenciar_Destinos/CadastrarDestinos";


function TemplatePagina(props){

    const [showDashBoard, setShwoDashBoard] = React.useState(true);
    const [showVendas, setShowVendas] = React.useState(false);
    const [showClientes, setShowClientes] = React.useState(false);
    const [showDestinos, setShowDestinos] = React.useState(false);
    const [mensagem, setMensagem] = React.useState("Bem vindo de volta!");

    return(

        <Stack spacing ={2} sx={{minHeight:"800px"}}style={{border:"2px solid black", margin:"150px", marginTop: "50px", boxShadow: "0px 0px 50px black"}}>
        <Header acesso="Agente de viagens" mensagem={mensagem}/>

        <Grid container spacing={0}>
            <Grid xs={3}>
                <Stack spacing={2} style ={{padding:"10px", marginBottom:"10px"}}>
                <Buttons sMensagem={setMensagem} sClientes={setShowClientes} sVendas={setShowVendas} sDestinos={setShowDestinos} sDashboard={setShwoDashBoard} />
                </Stack>
            </Grid>
            <Grid xs={9}>
                
            {showDashBoard && <DashBoard />}
            {showVendas && <CadastrarVendas />}
            {showClientes && <CadastrarClientes />}
            {showDestinos && <CadastrarDestinos />}

        </Grid>
        </Grid>
      
        </Stack>
    );
}

export default TemplatePagina;