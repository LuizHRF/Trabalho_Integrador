import React from "react";
import axios from "axios";
import CollapsibleTableAgentes from "./CollapsibleTableAgentes";


function ConsultarAgentes(props){

    const [agentes, setAgentes] = React.useState([]);

    async function getData () {
        const token = localStorage.getItem("token");
        console.log(token);
		const res = axios.get("/agentes", {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
        res.then((query) => {
            setAgentes(query.data);
            console.log(query.data);
        })
    };


    React.useEffect(()=> {
        getData();
    }, []);

    return(
        
        <CollapsibleTableAgentes rows={agentes} />      
    );
}

export default ConsultarAgentes;

