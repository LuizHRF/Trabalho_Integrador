import React from "react";
import axios from "axios";
import CollapsibleTableAgentes from "./CollapsibleTableAgentes";


function ConsultarDestinos(props){

    const [agentes, setAgentes] = React.useState([]);

    React.useEffect(()=> {
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
    }, []);

    return(
        
        <CollapsibleTableAgentes rows={agentes} />      
    );
}

export default ConsultarDestinos;