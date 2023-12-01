import React from "react";
import axios from "axios";
import CollapsibleTableDestinos from "./CollapsibleTableDestinos";


function ConsultarDestinos(props){

    const [destinos, setDestinos] = React.useState([]);

    React.useEffect(()=> {
        getDestinos();
    }, []);

    async function getDestinos(){
        const token = localStorage.getItem("token");
		const res = axios.get("/destinos", {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
        res.then((query) => {
            setDestinos(query.data);
            console.log(query.data);
        })
    }

    return(
        
        <CollapsibleTableDestinos rows={destinos} />      
    );
}

export default ConsultarDestinos;