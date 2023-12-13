
import React from "react";
import CollapsibleTableVendas from "./CollapsibleTableVendas";
import Box from '@mui/system/Box';
import axios from "axios";

function ConsultarVendas(props){

    const [vendas, setVendas] = React.useState([]);

    async function getData () {
        const token = localStorage.getItem("token");
        console.log(token);
		const res = axios.get("/vendas", {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
        res.then((query) => {
            setVendas(query.data);
            console.log(query.data);
        })
    };


    React.useEffect(()=> {
        getData();
    }, []);


    return(
        <Box sx={{ flexGrow: 1 }}>
            <CollapsibleTableVendas rows={vendas}/>
        </Box>
    );
}

export default ConsultarVendas;
