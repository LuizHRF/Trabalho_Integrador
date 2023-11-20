import React from "react";
import DashBoard from "./Dashboard/DashBoard";
import CadastroVendas from "./Gerenciar_Vendas/GerenciarVendas";
import GerenciarClientes from "./Gerenciar_Clientes/GerenciarClientes";
import GerenciarDestinos from "./Gerenciar_Destinos/GerenciarDestinos";
import TemplatePagina from "./TemplatePagina";
import CadastrarClientes from "./Gerenciar_Clientes/CadastrarClientes";

function Embarque22(){
    return(
        <>
            <DashBoard />
            <CadastroVendas />
            <GerenciarDestinos />

            <GerenciarClientes />
            
        </>
    )
}
export default Embarque22;