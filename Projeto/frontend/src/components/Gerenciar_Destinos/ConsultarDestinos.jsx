import React from "react";
import axios from "axios";
import CollapsibleTableDestinos from "./CollapsibleTableDestinos";


function ConsultarDestinos(props){

    const [destinos, setDestinos] = React.useState([]);

    React.useEffect(()=> {  
        getDestinos();
    }, []);

    React.useEffect(()=> {
        const token = localStorage.getItem("token");
        console.log(token);
		const res = axios.get("/destinos", {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
        res.then((query) => {
            setDestinos(query.data);
            console.log(query.data);
        })
    }, []);

    async function getDestinos(){
        try{
            const token = localStorage.getItem("token");
            const res = axios.get("/destinos", {
                headers: {
                    Authorization: `bearer ${token}`,
                },
            });
            
            setDestinos(res.data);
            console.log(res.data);
        } catch (error) {
            setDestinos([]);
        }   
    
    }

    return(
        
        <CollapsibleTableDestinos rows={destinos} />      
    );
}

export default ConsultarDestinos;