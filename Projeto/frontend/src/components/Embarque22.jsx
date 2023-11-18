import React from "react";
import DashBoard from "./Dashboard/DashBoard";
import CadastroVendas from "./Cadastro_de_Vendas/CadastroVendas";
import CadastroClientes from "./Cadastro_de_Clientes/CadastroClientes";

function Embarque22(){
    return(
        <>
            <DashBoard />
            <CadastroVendas />
            <CadastroClientes />
        </>
    )
}
export default Embarque22;