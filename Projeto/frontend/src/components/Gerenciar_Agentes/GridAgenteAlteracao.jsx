import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; 
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios";

import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const estilo = {
    border:"1px solid lightGrey",
    borderRadius:"5px",
    padding:"10px",
}
export default function GridAgenteAlteracao(props){
    
    const [ferias_disp, setFerias_disp] = React.useState(props.row.ferias_disp);
    const [comissao, setComissao] = React.useState(props.row.comissao);
    const [ender, setEnder] = React.useState(props.row.ender);
    const [salario, setSalario] = React.useState(props.row.salario);
    const [nivel_acesso, setNivel_acesso] = React.useState(props.row.nivel_acesso);

    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");


    function clearForm() {
        setFerias_disp("");
        setComissao("");
        setEnder("");
        setSalario("");
        setNivel_acesso("");
        }

    async function handleSubmit() {
            const token = localStorage.getItem("token");
            try {
                await axios.post("/alterAgente", {   //NÃO CONSEGUE CADASTRAR A PK NÃO DEIXA(REMOVER PK)
                    ferias_disp: ferias_disp,
                    comissao: comissao,
                    ender: ender,
                    salario: salario,
                    nivel_acesso: nivel_acesso,
                    cpf: props.row.cpf,
                }, { headers: { Authorization: `bearer ${token}`,},});
                setMessageText("Agente alterado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha na alteração do agente");
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
        
        setMessageText("Alteração de agente cancelada!");
        setMessageSeverity("warning");
        setOpenMessage(true);
        
        clearForm();
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            
            <Grid xs={4}>
                <Typography variant="h6" gutterBottom style={estilo}component="div">
                    Data Nascimento: {props.row.dtnasc}
                </Typography>
            </Grid>
            <Grid xs={9}>
                <TextField fullWidth size="small" label="Comissão e acordos" variant="outlined" onChange={(e) => setComissao(e.target.value)} value={comissao}/>
            </Grid>

            <Grid xs={3}>
                <TextField fullWidth size="small" label="Salário" variant="outlined" onChange={(e) => setSalario(e.target.value)} value={salario}/>
            </Grid>
            <Grid xs={9}>
                <TextField fullWidth size="small" label="Endereço" variant="outlined" onChange={(e) => setEnder(e.target.value)} value={ender}/>
            </Grid>
            <Grid xs={3}>
                <TextField fullWidth size="small" label="Nível de Acesso" variant="outlined" onChange={(e) => setNivel_acesso(e.target.value)} value={nivel_acesso}/>
            </Grid>

            <Grid xs={9}>
                <TextField fullWidth size="small" label="Férias" variant="outlined" onChange={(e) => setFerias_disp(e.target.value)} value={ferias_disp}/>
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