import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from "axios";


const estilo = {
    border:"1px solid lightGrey",
    borderRadius:"5px",
    padding:"10px",
}
export default function GridClienteAlteracao(props){

    const [telefone, setTelefone] = React.useState(props.row.telefone);
    const [email, setEmail] = React.useState(props.row.email);
    const [dt_nasc, setDt_nasc] = React.useState(props.row.dt_nasc);
    const [renda, setRenda] = React.useState(props.row.renda);
    const [profissao, setProfissao] = React.useState(props.row.profissao);
    const [endereco, setEndereco] = React.useState(props.row.endereco);
    const [observacoes, setObservacoes] = React.useState(props.row.observacoes);
    const cpf = props.row.cpf;

    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");

    function clearForm() {
        setTelefone(props.row.telefone);
        setEmail(props.row.email);
        setDt_nasc(props.row.dt_nasc);
        setRenda(props.row.renda);
        setProfissao(props.row.profissao);
        setEndereco(props.row.endereco);
        setObservacoes(props.row.observacoes);
        }

    async function handleSubmit() { //FALAT FAZER O BACK
            const token = localStorage.getItem("token");
            try {
                await axios.put("/alterCliente", {
                    telefone: telefone,
                    email: email,
                    dt_nasc: dt_nasc,
                    renda: renda,
                    profissao: profissao,
                    endereco : endereco,
                    observacoes: observacoes,
                    cpf: cpf,
                }, { headers: { Authorization: `bearer ${token}`,},});
                setMessageText("Cliente alterado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha na alteração do cliente");
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
        
        setMessageText("Alteração de cliente cancelada!");
        setMessageSeverity("warning");
        setOpenMessage(true);
        
        clearForm();
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Email: <TextField fullWidth size="small" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Typography>
            </Grid>
            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Telefone: <TextField fullWidth size="small" label="Telefone" variant="outlined" onChange={(e) => setTelefone(e.target.value)} value={telefone}/>{}
                </Typography>
            </Grid>

            <Grid xs={6}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Data de nascimento: <TextField fullWidth size="small" label="Data nasc." variant="outlined" onChange={(e) => setDt_nasc(e.target.value)} value={dt_nasc}/>
                </Typography>
            </Grid>
            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Renda: <TextField fullWidth size="small" label="Renda" variant="outlined" onChange={(e) => setRenda(e.target.value)} value={renda}/>
                </Typography>
            </Grid>
            <Grid xs={3}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Profissão: <TextField fullWidth size="small" label="Profissão" variant="outlined" onChange={(e) => setProfissao(e.target.value)} value={profissao}/>
                </Typography>
            </Grid>

            <Grid xs={12}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Endereço: <TextField fullWidth size="small" label="Endereço" variant="outlined" onChange={(e) => setEndereco(e.target.value)} value={endereco}/>
                </Typography>
            </Grid>

            <Grid xs={12}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Observações: <TextField fullWidth size="small" label="Observações" variant="outlined" onChange={(e) => setObservacoes(e.target.value)} value={observacoes}/>
                </Typography>
            </Grid>

            <Grid xs={9}>
                <Button variant="contained" style={props.estilo} onClick={handleSubmit}>Enviar</Button>
                <Button variant="contained" style={props.estilo} onClick={handleCancelClick}>Cancelar</Button>
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