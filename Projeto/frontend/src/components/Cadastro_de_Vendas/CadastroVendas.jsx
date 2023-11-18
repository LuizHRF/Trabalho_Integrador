import React from "react";
import TemplatePagina from "../TemplatePagina";
import AbaVendas from "./AbaVendas";

function CadastroVendas(props){
    return(

        <TemplatePagina pagina={<AbaVendas />}/>
    );
}

export default CadastroVendas;