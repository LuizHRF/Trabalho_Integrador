import React from "react";
import TemplatePagina from "../TemplatePagina";
import CadastrarVendas from "./CadastrarVendas";

function GerenciarVendas(props){
    return(

        <TemplatePagina pagina={<CadastrarVendas />} mensagem="Gerenciar vendas"/>
    );
}

export default GerenciarVendas;