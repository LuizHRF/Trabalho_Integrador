import React from "react";
import axios from "axios";
import CollapsibleTableInteresses from "./CollapsibleTableIntresses";


function ConsultarInteresses(props){
    const [interesses, setInteresses] = React.useState([]);

    React.useEffect(()=> {
        const res = axios.get("/interesses");
        res.then((query) => {
            setInteresses(query.data);
            console.log(query.data);
        })
    }, []);

    return(
        
        <CollapsibleTableInteresses rows={interesses} />      
    );
}

export default ConsultarInteresses;