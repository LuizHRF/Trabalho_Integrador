import React from "react";
import axios from "axios";
import CollapsibleTableClientes from "./CollapsibleTableClientes";



function ConsultarClientes(props){

    const [clientes, setClientes] = React.useState([]);

    React.useEffect(()=> {
        const token = localStorage.getItem("token");
        console.log(token);
		const res = axios.get("/clientes", {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
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