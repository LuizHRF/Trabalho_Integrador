import React from "react";
import Stack from '@mui/material/Stack';
import axios from "axios";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function StackInteresseAlteracao(props){

    const [contato, setContato] = React.useState(props.row.contato);
    const [qtd_pax, setQtd_pax] = React.useState(props.row.qtd_passageiros);
    const interesseId = props.row.id;

    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");

    function clearForm() {
        setContato("");
        setQtd_pax("");
        }

    async function handleSubmit() {
            const token = localStorage.getItem("token");
            try {
                await axios.put("/alterInteresse", {
                    contato: contato,
                    pax: qtd_pax,
                    id : interesseId,
                }, { headers: { Authorization: `bearer ${token}`,},});
                setMessageText("Interesse alterado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha na alteração do interesse");
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
        
        setMessageText("Alteração de interesse cancelada!");
        setMessageSeverity("warning");
        setOpenMessage(true);
        
        clearForm();
    }

    return(
        <Stack spacing={2}>
            Contato:
            <TextField fullWidth size="small" label="Contato" variant="outlined" onChange={(e) => setContato(e.target.value)} value={contato}/>
            Quantidade de passageiros:
            <TextField fullWidth size="small" label="Passageiros" variant="outlined" onChange={(e) => setQtd_pax(e.target.value)} value={qtd_pax}/>

            <Button variant="contained" style={props.estilo} onClick={handleSubmit}>Enviar</Button>
            <Button variant="contained" style={props.estilo} onClick={handleCancelClick}>Cancelar</Button>
            <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
                <Alert severity={messageSeverity} onClose={handleCloseMessage}>
                  {messageText}
                </Alert>
              </Snackbar>

        </Stack>)
}