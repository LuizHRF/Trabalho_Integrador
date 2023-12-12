import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Stack from '@mui/system/Stack';

export default function GridDestino(props){

    return(
        <Box sx={{ margin: 1 }} style={{padding:"20px"}}>
              <Typography variant="h5" gutterBottom component="div">
                Informações
              </Typography>
                <Stack spacing={2}>
                    <Typography variant="h6" gutterBottom component="div">
                    {props.row.pais}
                    </Typography>
                    <Box>
                        <Typography variant="h6" gutterBottom component="div">
                            Descrição:
                        </Typography>
                            {props.row.descricao}
                    </Box>
                    <Box style={{margin:"1px solid black"}}>
                        <Typography variant="h6" gutterBottom component="div">
                            Documentos Obrigatórios:
                        </Typography>
                            {props.row.doc_obrigatorios}
                    </Box>
                </Stack>
            </Box>
    
    );
}