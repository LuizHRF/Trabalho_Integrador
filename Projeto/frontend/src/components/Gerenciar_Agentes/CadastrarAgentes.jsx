import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function CadastrarAgentes(){

    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [dt_nasc, setDt_nasc] = React.useState("");
    
    const [ferias_disp, setFerias_disp] = React.useState("");
    const [comissao, setComissao] = React.useState("");
    const [ender, setEnder] = React.useState("");
    const [salario, setSalario] = React.useState("");
    const [nivel_acesso, setNivel_acesso] = React.useState("");

    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");

    function clearForm() {
        setNome("");
        setCpf("");
        setDt_nasc("");
        setFerias_disp("");
        setComissao("");
        setEnder("");
        setSalario("");
        setNivel_acesso("");
    }

    async function handleSubmit() {
        if (nome !== "" && cpf !== "" && dt_nasc !== "" && ferias_disp !== "" && comissao !== "" && ender !== "" && salario !== "" && nivel_acesso !== "") {
            try {
                const token = localStorage.getItem("token");
                await axios.post("/newAgente", {
                    nome: nome,
                    cpf: cpf,
                    dtnasc : dt_nasc,
                }, {headers: { Authorization: `bearer ${token}`}})

                await axios.post("/newAgenteInfo", {
                    cpf: cpf, 
                    ferias_disp : ferias_disp, 
                    comissao : comissao, 
                    ender : ender, 
                    salario : salario, 
                    nivel_acesso : nivel_acesso
                }, {headers: {Authorization: `bearer ${token}`}
                })

                setMessageSeverity("success");
                clearForm(); 
            } catch (error) {
                console.log(error);
                setMessageText("Falha no cadastro do agente!");
                setMessageSeverity("error");
            } finally {
                setOpenMessage(true);
            }
        } else {
            setMessageText("Dados de agente inválidos!");
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
            
            <Grid xs={9}>
                Nome:
                <TextField fullWidth size="small" label="Nome do agente" variant="outlined" onChange={(e) => setNome(e.target.value)} value={nome}/>
            </Grid>
            <Grid xs={3}>
                CPF:
                <TextField fullWidth size="small" label="CPF" variant="outlined" onChange={(e) => setCpf(e.target.value)} value={cpf}/> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>

            <Grid xs={4}>
                Data de nascimento:
                <TextField fullWidth size="small" label="Data de nascimento" variant="outlined" onChange={(e) => setDt_nasc(e.target.value)} value={dt_nasc}/>
            </Grid>
            <Grid xs={8}>
                Comissão: 
                <TextField fullWidth size="small" label="Comissao" variant="outlined" onChange={(e) => setComissao(e.target.value)} value={comissao}/>
            </Grid>
            
            <Grid xs={3}>
                Salário:
                <TextField fullWidth size="small" label="Salário" variant="outlined" onChange={(e) => setSalario(e.target.value)} value={salario}/>
            </Grid>
            <Grid xs={9}>
                Endereço:
                <TextField fullWidth size="small" label="Endereço" variant="outlined" onChange={(e) => setEnder(e.target.value)} value={ender}/>
            </Grid>

            <Grid xs={3}>
                Nível de Acesso:
                <TextField fullWidth size="small" label="Acesso" variant="outlined" onChange={(e) => setNivel_acesso(e.target.value)} value={nivel_acesso}/>
            </Grid>
            <Grid xs={9}>
                Férias disponíveis:
                <TextField fullWidth size="small" label="Férias" variant="outlined" onChange={(e) => setFerias_disp(e.target.value)} value={ferias_disp}/>
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

export default CadastrarAgentes;