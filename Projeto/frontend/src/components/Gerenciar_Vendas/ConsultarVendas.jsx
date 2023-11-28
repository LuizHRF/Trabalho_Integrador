import React from "react";
import DataTable from "../DataTable";
import Box from '@mui/system/Box';

function ConsultarVendas(props){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <DataTable />
        </Box>
    );
}

export default ConsultarVendas;