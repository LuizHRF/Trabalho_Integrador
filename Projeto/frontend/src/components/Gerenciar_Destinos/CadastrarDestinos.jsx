import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function CadastrarDestinos(){

    const [nomeDestino, setNomeDestino] = React.useState("");
    const [pais, setPais] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [docs_obg, setDocs_obg] = React.useState("");

    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");

    function clearForm() {
        setNomeDestino("");
        setPais("");
        setDescricao("");
        setDocs_obg("");
    }

    async function handleSubmit() {
        if (nomeDestino !== "" && pais !== "" && descricao !== "" && docs_obg !== "") {
            try {

                const token = localStorage.getItem("token");
                await axios.post("/newDestino", {
                    nome: nomeDestino,
                    pais: pais,
                    descricao : descricao, 
                    doc_obrigatorios : docs_obg
                }, {headers: { Authorization: `bearer ${token}`}});
                setMessageText("Destino cadastrado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha no cadastro do destino!");
                setMessageSeverity("error");
            } finally {
                setOpenMessage(true);
            }
        } else {
            setMessageText("Dados de destino inválidos!");
            setMessageSeverity("warning");
            setOpenMessage(true);
        }
    }

    function handleCloseMessage(_, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpenMessage(false);
    } 

    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={12}>
                Nome do Destino:
                <TextField fullWidth size="small" label="Nome do destino" variant="outlined" onChange={(e) => setNomeDestino(e.target.value)} value={nomeDestino}/>
            </Grid>

            <Grid xs={12}>
                País:
                <TextField fullWidth size="small" label="País" variant="outlined" onChange={(e) => setPais(e.target.value)} value={pais}/>
            </Grid>

            <Grid xs={12}>
                Documentos Obrigatórios:
                <TextField fullWidth size="small" label="Documentos" variant="outlined" onChange={(e) => setDocs_obg(e.target.value)} value={docs_obg}/>
            </Grid>

            <Grid xs={12}>
                Descrição:
                <TextField fullWidth size="small" label="Descrição" variant="outlined" onChange={(e) => setDescricao(e.target.value)} value={descricao}/>
            </Grid>
            
            <Grid xs={12}>
                <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
                <Button style={{marginLeft: "10px"}}variant="contained" onClick={clearForm}>Limpar</Button>
            </Grid>

            <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
                <Alert severity={messageSeverity} onClose={handleCloseMessage}>
                    {messageText}
                </Alert>
            </Snackbar>

        </Grid>
    </Box>
        
    );
}

export default CadastrarDestinos;