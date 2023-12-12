import React from "react";
import axios from "axios";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Stack from '@mui/system/Stack'; 
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function GridDestinoAlteracao(props){


    const [pais, setPais] = React.useState(props.row.pais);
    const [descricao, setDescricao] = React.useState(props.row.descricao);
    const [docs_obg, setDocs_obg] = React.useState(props.row.doc_obrigatorios);
    const idDestino = props.row.id;

    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");

    function clearForm() {
        setPais("");
        setDescricao("");
        setDocs_obg("");
    }

    async function handleSubmit() {
            const token = localStorage.getItem("token");
            try {
                await axios.put("/alterDestino", {
                    pais: pais,
                    descricao : descricao, 
                    docs_obrigatorios : docs_obg,
                    id : idDestino,
                }, { headers: { Authorization: `bearer ${token}`,},});
                setMessageText("Destino alterado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha na alteração do destino");
                setMessageSeverity("error");
            } finally {
                setOpenMessage(true);
            }
        
    }

    function handleCloseMessage(_, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpenMessage(false);
    } 

    function handleCancelClick() {
        if (pais !== "" && descricao !== "" && docs_obg !== "") {
            setMessageText("Alteração de destino cancelada!");
            setMessageSeverity("warning");
            setOpenMessage(true);
        }
        clearForm();
    }

    return(
        <Box sx={{ margin: 1 }} style={{padding:"20px"}}>
              
                <Stack spacing={2}>
                    
                    <TextField fullWidth size="small" label="País" variant="outlined" onChange={(e) => setPais(e.target.value)} value={pais}/>
                    
                    <Box>
                        
                        <TextField fullWidth size="small" label="Descrição"ariant="outlined" onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
                    </Box>
                    <Box style={{margin:"1px solid black"}}>
                        
                        <TextField fullWidth size="small" label="Documentos Obrigatórios" variant="outlined" onChange={(e) => setDocs_obg(e.target.value)} value={docs_obg}/>
                    </Box>
                </Stack>

                <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
                    <Alert severity={messageSeverity} onClose={handleCloseMessage}>
                        {messageText}
                    </Alert>
                </Snackbar>

                <Button variant="contained" style={props.estilo} onClick={handleCancelClick} >Cancelar</Button>
                <Button variant="contained" style={props.estilo} onClick={handleSubmit}>Enviar</Button>
            </Box>
    );
}