import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';

import Snackbar from '@mui/material/Snackbar';
import axios from "axios";
import Alert from '@mui/material/Alert';


function CadastrarClientes(){


    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [dt_nasc, setDt_nasc] = React.useState("");
    const [renda, setRenda] = React.useState("");
    const [profissao, setProfissao] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [observacoes, setObservacoes] = React.useState("");


    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");


    function clearForm() {
        setNome("");
        setCpf("");
        setTelefone("");
        setDt_nasc("");
        setRenda("");
        setProfissao("");
        setEndereco("");
        setObservacoes("");
    }

    function handleCancelClick() {
        if (nome !== "" || cpf !== "" || telefone !== "" || dt_nasc !== "" || renda !== "" || profissao !== "" || endereco !== "" || observacoes !== "") {
            setMessageText("Cadastro de cliente cancelado!");
            setMessageSeverity("warning");
            setOpenMessage(true);
        }
        clearForm();
    }

    async function handleSubmit() {
        if (nome !== "" && cpf !== "" && telefone !== "" && dt_nasc !== "" && renda !== "" && profissao!== "" && endereco !== "" && observacoes !== "") {
            try {
                await axios.post("/newCliente", {
                    nome : nome, 
                    cpf : cpf, 
                    telefone : telefone,
                    dt_nasc : dt_nasc,
                    renda : renda,
                    profissao : profissao, 
                    endereco : endereco, 
                    observacoes : observacoes
                });
                setMessageText("Cliente cadastrado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha no cadastro do cliente!");
                setMessageSeverity("error");
            } finally {
                setOpenMessage(true);
            }
        } else {
            setMessageText("Dados de cliente inválidos!");
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
                Nome:
                <TextField fullWidth size="small" label="Nome do cliente" variant="outlined" />
            </Grid>


            <Grid xs={6}>
                CPF:
                <TextField fullWidth size="small" label="CPF" variant="outlined" /> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>
            <Grid xs={6}>
                Data de nascimento:
                <TextField fullWidth size="small" label="Data de nascimento" variant="outlined" />
            </Grid>
            <Grid xs={3}>
                Telefone: 
                <TextField fullWidth size="small" label="Telefone" variant="outlined" />
            </Grid>

            
            <Grid xs={9}>
                Endereço:
                <TextField fullWidth size="small" label="endereco" variant="outlined" />
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

export default CadastrarClientes;