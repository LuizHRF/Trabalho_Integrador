import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
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


    async function handleSubmit() {
        if (nome !== "" && cpf !== "" && telefone !== "" && dt_nasc !== "" && renda !== "" && profissao!== "" && endereco !== "" && observacoes !== "") {
            try {
                const token = localStorage.getItem("token");
                console.log(token);
		        const res = await axios.post("/newCliente", {
                        nome : nome, 
                        cpf : cpf, 
                        telefone : telefone,
                        dt_nasc : dt_nasc,
                        renda : renda,
                        profissao : profissao, 
                        endereco : endereco, 
                        observacoes : observacoes
                }, {headers: {Authorization: `bearer ${token}`}},)            
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
                <TextField fullWidth size="small" label="Nome do cliente" variant="outlined" onChange={(e) => setNome(e.target.value)} value={nome}/>
            </Grid>


            <Grid xs={6}>
                CPF:
                <TextField fullWidth size="small" label="CPF" variant="outlined" onChange={(e) => setCpf(e.target.value)} value={cpf}/> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>
            <Grid xs={6}>
                Data de nascimento:
                <TextField fullWidth size="small" label="Data de nascimento" variant="outlined" onChange={(e) => setDt_nasc(e.target.value)} value={dt_nasc}/>
            </Grid>
            <Grid xs={3}>
                Telefone: 
                <TextField fullWidth size="small" label="Telefone" variant="outlined" onChange={(e) => setTelefone(e.target.value)} value={telefone}/>
            </Grid>

            
            <Grid xs={9}>
                Endereço:
                <TextField fullWidth size="small" label="endereço" variant="outlined" onChange={(e) => setEndereco(e.target.value)} value={endereco}/>
            </Grid>
            <Grid xs={6}>
                Renda:
                <TextField fullWidth size="small" label="renda" variant="outlined" onChange={(e) => setRenda(e.target.value)} value={renda}/>
            </Grid>
            <Grid xs={6}>
                Profissao:
                <TextField fullWidth size="small" label="profissão" variant="outlined" onChange={(e) => setProfissao(e.target.value)} value={profissao}/>
            </Grid>

            <Grid xs={6}>
                Observações:
                <TextField fullWidth size="small" label="observações" variant="outlined" onChange={(e) => setObservacoes(e.target.value)} value={observacoes}/>
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

export default CadastrarClientes;