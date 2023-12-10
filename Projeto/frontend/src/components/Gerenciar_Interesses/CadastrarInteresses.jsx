import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import SelectDestino from "./SelectDestino";


export default function CadastrarInteresses(){

    const [cliente_nome, setCliente_nome] = React.useState("");
    const [contato, setContato] = React.useState("");
    const [destino, setDestino] = React.useState("");
    const [qtd_passageiros, setQtd_passageiros] = React.useState("");
    const [data_interesse, setData_interesse] = React.useState("");


    const [openMessage, setOpenMessage] = React.useState(false);
    const [messageText, setMessageText] = React.useState("");
    const [messageSeverity, setMessageSeverity] = React.useState("success");


    function clearForm() {
        setCliente_nome("");
        setContato("");
        setDestino("");
        setQtd_passageiros("");
        setData_interesse("");
    }

    function handleCancelClick() {
        if (cliente_nome !== "" || contato !== "" || destino !== "" || qtd_passageiros !== "" || data_interesse !== "") {
            setMessageText("Cadastro de interesse cancelado!");
            setMessageSeverity("warning");
            setOpenMessage(true);
        }
        clearForm();
    }

    async function handleSubmit() {
        if (cliente_nome !== "" && contato !== "" && destino !== "" && qtd_passageiros !== "" && data_interesse !== "") {
            try {
                await axios.post("/newInteresse", {
                    cliente_nome : cliente_nome, 
                    contato : contato, 
                    destino : destino,
                    qtd_passageiros : qtd_passageiros,
                    data_interesse : data_interesse
                });
                setMessageText("Interesse cadastrado com sucesso!");
                setMessageSeverity("success");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
                setMessageText("Falha no cadastro do interesse!");
                setMessageSeverity("error");
            } finally {
                setOpenMessage(true);
            }
        } else {
            setMessageText("Dados de interesse inválidos!");
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
                Cliente:
                <TextField fullWidth size="small" label="Cliente" variant="outlined" onChange={(e) => setCliente_nome(e.target.value)} value={cliente_nome}/>
            </Grid>


            <Grid xs={12}>
                Contato:
                <TextField fullWidth size="small" label="Contato" variant="outlined" onChange={(e) => setContato(e.target.value)} value={contato}/> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>


            <Grid xs={4}>
                Destino:
                <SelectDestino setDestinos = {setDestino} onChange={(e) => setDestino(e.target.value)} value={destino}/>
            </Grid>
            <Grid xs={4}>
                Data de interesse:
                <TextField fullWidth size="small" label="Data de interesse" variant="outlined" onChange={(e) => setData_interesse(e.target.value)} value={data_interesse}/>
            </Grid>
            <Grid xs={4}>
                Quantidade de passageiros:
                <TextField fullWidth size="small" label="Quantidade de passageiros" variant="outlined" onChange={(e) => setQtd_passageiros(e.target.value)} value={qtd_passageiros}/>
            </Grid>


            <Grid xs={12}>
                <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
                <Button style={{marginLeft: "10px"}}variant="contained" onClick={handleCancelClick}>Limpar</Button>
            </Grid>

        </Grid>

        <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
            <Alert severity={messageSeverity} onClose={handleCloseMessage}>
                {messageText}
            </Alert>
        </Snackbar>

    </Box>
        
    );
}

