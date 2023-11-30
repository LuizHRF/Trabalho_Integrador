import React from "react";
import axios from "axios";
import CollapsibleTableDestinos from "./CollapsibleTableDestinos";


function ConsultarDestinos(props){

    const [destinos, setDestinos] = React.useState([]);

    React.useEffect(()=> {
        const res = axios.get("/destinos");
        res.then((query) => {
            setDestinos(query.data);
            console.log(query.data);
        })
    }, []);

    return(
        
        <CollapsibleTableDestinos rows={destinos} />      
    );
}

export default ConsultarDestinos;