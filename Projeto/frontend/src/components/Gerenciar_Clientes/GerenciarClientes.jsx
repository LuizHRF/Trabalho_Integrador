import React from "react";
import TemplatePagina from "../TemplatePagina";
import CadastrarClientes from "./CadastrarClientes";
import Opcoes from "./Opcoes";


function GerenciarClientes(props){
    return(
        <>
        <TemplatePagina pagina={<Opcoes />} mensagem="Gerenciar clientes"/>

        <TemplatePagina pagina={<CadastrarClientes />} mensagem="Cadastrar clientes"/>

        </>
    );
}
/*<TemplatePagina pagina={<CadastrarClientes />}/>*/

export default GerenciarClientes;