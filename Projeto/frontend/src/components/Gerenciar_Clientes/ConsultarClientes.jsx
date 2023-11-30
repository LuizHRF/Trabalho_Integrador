import React from "react";
import axios from "axios";
import CollapsibleTableClientes from "./CollapsibleTableClientes";



function ConsultarClientes(props){

    const [clientes, setClientes] = React.useState([]);

    React.useEffect(()=> {
        const res = axios.get("/clientes");
        res.then((query) => {
            setClientes(query.data);
            console.log(query.data);
        })
    }, []);

    return(
        <CollapsibleTableClientes rows = {clientes}/>
    );
}

export default ConsultarClientes;