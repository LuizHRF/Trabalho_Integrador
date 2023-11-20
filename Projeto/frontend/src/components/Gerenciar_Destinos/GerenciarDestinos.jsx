import React from "react";
import TemplatePagina from "../TemplatePagina";
import CadastrarDestinos from "./CadastrarDestinos";


function GerenciarDestinos(props){
    return(

        <TemplatePagina pagina={<CadastrarDestinos />} mensagem="Gerenciar Destinos"/>
    );
}

export default GerenciarDestinos;