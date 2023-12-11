import React from "react";
import Header from "./Header";
import Buttons from "./Dashboard/Buttons";
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/system/Stack';
import axios from "axios";
import Login from "./Login";
import DashBoard from "./Dashboard/DashBoard";

import CadastrarClientes from "./Gerenciar_Clientes/CadastrarClientes";
import CadastrarVendas from "./Gerenciar_Vendas/CadastrarVendas";
import CadastrarDestinos from "./Gerenciar_Destinos/CadastrarDestinos";
import ConsultarVendas from "./Gerenciar_Vendas/ConsultarVendas";
import ConsultarDestinos from "./Gerenciar_Destinos/ConsultarDestinos";
import ConsultarClientes from "./Gerenciar_Clientes/ConsultarClientes";
import CadastrarInteresses from "./Gerenciar_Interesses/CadastrarInteresses";
import ConsultarInteresses from "./Gerenciar_Interesses/ConsultarInteresses";
import CadastrarAgentes from "./Gerenciar_Agentes/CadastrarAgentes";
import ConsultarAgentes from "./Gerenciar_Agentes/ConsultarAgentes"

axios.defaults.baseURL = "http://localhost:3010";
axios.defaults.headers.common["Content-Type"] = 
"application/json;charset=utf-8";

function TemplatePagina(props){

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);


    React.useEffect(() => {
        // verifica se já está logado
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
           }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        axios.post("\logout", {});
    };

    const [showDashBoard, setShwoDashBoard] = React.useState(true);


    const [showVendas, setShowVendas] = React.useState(false); //Cadastro de vendas
    const [showConsultaVendas, setShowConsultaVendas] = React.useState(false);  //Consulta de vendas

    const [showClientes, setShowClientes] = React.useState(false); //Cadastro de Clientes
    const [showConsultaClientes, setShowConsultaClientes] = React.useState(false); //Consulta de clientes

    const [showDestinos, setShowDestinos] = React.useState(false); //Cadastro de destinos
    const [showConsultaDestinos, setShowConsultaDestinos] = React.useState(false); // Consulta de destinos

    const [showInteresses, setShowInteresses] = React.useState(false);
    const [showConsultaInteresses, setShowConsultaInteresses] = React.useState(false);

    const [showAgentes, setShowAgentes] = React.useState(false);
    const [showConsultaAgentes, setShowConsultaAgentes] = React.useState(false);

    const [mensagem, setMensagem] = React.useState("Bem vindo de volta!");

    return(
        <>
        {isLoggedIn ? (
            <Stack spacing ={2} sx={{minHeight:"800px"}}style={{border:"2px solid black", margin:"150px", marginTop: "50px", boxShadow: "0px 0px 50px black"}}>
            <Header acesso="Agente de viagens" mensagem={mensagem}/>

            <Grid container spacing={0}>
                <Grid xs={3}>
                    <Stack spacing={2} style ={{padding:"10px", marginBottom:"10px"}}>
                    <Buttons sMensagem={setMensagem} 
                        sClientes={setShowClientes} 
                        sVendas={setShowVendas} 
                        sDestinos={setShowDestinos} 
                        sDashboard={setShwoDashBoard} 
                        sConsultaVendas ={setShowConsultaVendas} 
                        sConsultaClientes = {setShowConsultaClientes} 
                        sConsultaDestinos = {setShowConsultaDestinos}
                        sInteresses = {setShowInteresses}
                        sConsultaInteresses = {setShowConsultaInteresses}
                        sAgentes = {setShowAgentes}
                        sConsultaAgentes={setShowConsultaAgentes}
                        logOut = {handleLogout} />

                    </Stack>
                </Grid>
                <Grid xs={9}>

                {showDashBoard && <DashBoard />}
                {showVendas && <CadastrarVendas />}
                {showClientes && <CadastrarClientes />}
                {showDestinos && <CadastrarDestinos />}
                {showConsultaVendas && <ConsultarVendas />}
                {showConsultaDestinos && <ConsultarDestinos />}
                {showConsultaClientes && <ConsultarClientes />}
                {showInteresses && <CadastrarInteresses />}
                {showConsultaInteresses && <ConsultarInteresses /> }
                {showAgentes && <CadastrarAgentes />}
                {showConsultaAgentes && <ConsultarAgentes />}

                </Grid>
            </Grid>
        
            </Stack> ) : (<Login onLogin={handleLogin} />)}
        </>
    );
}

export default TemplatePagina;