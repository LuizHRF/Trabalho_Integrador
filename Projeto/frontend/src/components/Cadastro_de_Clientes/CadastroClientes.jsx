import React from "react";
import TemplatePagina from "../TemplatePagina";
import AbaClientes from "./AbaClientes";


function CadastroClientes(props){
    return(

        <TemplatePagina pagina={<AbaClientes />}/>
    );
}

export default CadastroClientes;