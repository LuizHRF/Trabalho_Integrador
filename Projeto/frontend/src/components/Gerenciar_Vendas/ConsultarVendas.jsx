import React from "react";
import CollapsibleTableVendas from "./CollapsibleTableVendas";
import Box from '@mui/system/Box';
import axios from "axios";

function ConsultarVendas(props){

    const [vendas, setVendas] = React.useState([]);

    React.useEffect(()=> {
        const token = localStorage.getItem("token");
		const res = axios.get("/vendas", {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
        res.then((query) => {
            setVendas(query.data);
            console.log(query.data);
        })
    }, []);

    return(
        <Box sx={{ flexGrow: 1 }}>
            <CollapsibleTableVendas rows={vendas}/>
        </Box>
    );
}

export default ConsultarVendas;