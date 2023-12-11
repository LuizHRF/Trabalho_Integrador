import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

function CadastrarDestinos(){

    const [nomeDestino, setNomeDestino] = React.useState("");
    const [pais, setPais] = React.useState("");
    const [descricao, setDescricao] = React.useState("");
    const [docs_obg, setDocs_obg] = React.useState("");

    function clearForm() {
        setNomeDestino("");
        setPais("");
        setDescricao("");
        setDocs_obg("");
    }

    async function handleSubmit() {
        if (nomeDestino !== "" && pais !== "" && descricao !== "" && docs_obg !== "") {
            try {
                await axios.post("/newDestino", {
                    nome: nomeDestino,
                    pais: pais,
                    descricao : descricao, 
                    docs_obrigatorios : docs_obg
                });
                console.log("Destino cadastrado com sucesso");
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
            } 
        }            
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

        </Grid>
    </Box>
        
    );
}

export default CadastrarDestinos;