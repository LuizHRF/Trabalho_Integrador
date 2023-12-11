import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import SelectDestino from "./SelectDestino";
import SelectCliente from "./SelectCliente";

import SelectAgente from "./SelectAgente";
//import Snackbar from '@mui/material/Snackbar';
import axios from "axios";
//import Alert from '@mui/material/Alert';

export default function CadastrarVendas(){

    const [cliente, setCliente] = React.useState("");
    const [ag_vendedor, setAg_vendedor] = React.useState("");
    const [destino, setDestino] = React.useState("");
    const [hotel, setHotel] = React.useState("");
    const [num_orcamento, setNum_orcamento] = React.useState("");
    const [operadora, setOperadora] = React.useState("");
    const [num_noites, setNum_noites] = React.useState("");
    const [dt_embarque, setDt_embarque] = React.useState("");
    const [dt_venda, setDt_venda] = React.useState("");
    const [observacoes, setObservacoes] = React.useState("");
    const [v_taxas, setV_taxas] = React.useState("");
    const [v_over, setV_over] = React.useState("");
    const [v_tarifa, setV_tarifa] = React.useState("");

    function clearForm() {
        setCliente("");
        setAg_vendedor("");
        setDestino("");
        setHotel("");
        setNum_orcamento("");
        setOperadora("");
        setNum_noites("");
        setObservacoes("");
        setV_over("");
        setV_tarifa("");
        setV_taxas("");
        setDt_embarque("");
        setDt_venda("");
    }

    function handleCancelClick() {
        if (cliente !== "" || ag_vendedor !== "" || destino !== "" || hotel !== "" || num_orcamento !== "" || operadora !== "" || num_noites !== "" || dt_embarque !== "" || dt_venda !== "" || observacoes !== "" || v_over !== "" || v_tarifa !== "" || v_taxas) {
            console.log("Limpado")
        }
        clearForm();
    }

    async function handleSubmit() {
        if (cliente !== "" && ag_vendedor !== "" && destino !== "" && hotel !== "" && num_orcamento !== "" && operadora !== "" && num_noites !== "" && dt_embarque !== "" && dt_venda !== "" && observacoes !== "" && v_over !== "" && v_tarifa !== "" && v_taxas) {
            try {
                parseInt(num_orcamento);
                parseInt(num_noites);
                parseFloat(v_over);
                parseFloat(v_tarifa);
                parseFloat(v_taxas);
                parseInt(cliente);
                parseInt(ag_vendedor);
                const novaVenda = {
                    cliente : cliente, 
                    ag_vendedor : ag_vendedor, 
                    destino : destino,
                    hotel : hotel,
                    num_orcamento : num_orcamento, 
                    operadora : operadora, 
                    num_noites : num_noites, 
                    observacoes : observacoes, 
                    v_over : v_over, 
                    v_tarifa : v_tarifa, 
                    v_taxas : v_taxas, 
                    dt_embarque : dt_embarque, 
                    dt_venda : dt_venda
                }
                console.log(novaVenda);
                await axios.post("/newVenda", novaVenda);
                clearForm(); // limpa o formulário apenas se cadastrado com sucesso
            } catch (error) {
                console.log(error);
            } 
        }
    }


    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{margin:"10px", border:"1px solid lightGrey"}}>
            <Grid xs={6}>
                Cliente: {cliente}
                <SelectCliente setCliente={setCliente} />
            </Grid>
            <Grid xs={6}>
                Destino: {destino}
                <SelectDestino setDestino={setDestino} onChange={(e) => setDestino(e.target.value)} value={destino}/>
            </Grid>

            <Grid xs={6}>
                Agente: {ag_vendedor}
                <SelectAgente setAgente={setAg_vendedor} />
            </Grid>
            <Grid xs={6}>
                Data da emissão:
                <TextField fullWidth size="small" label="Data da emissão" variant="outlined" onChange={(e) => setDt_venda(e.target.value)} value={dt_venda}/>
            </Grid>
        

            <Grid xs={4}>
                Número de noites:
                <TextField fullWidth size="small" label="Nº de noites" variant="outlined" onChange={(e) => setNum_noites(e.target.value)} value={num_noites}/> {/*É possível adicionar o prop ID nos textFields*/}
            </Grid>
            <Grid xs={4}>
                Número do orçamento:
                <TextField fullWidth size="small" label="Nº do orçamento" variant="outlined" onChange={(e) => setNum_orcamento(e.target.value)} value={num_orcamento}/>
            </Grid>
            <Grid xs={4}>
                Data de embarque:
                <TextField fullWidth size="small" label="Data de embarque" variant="outlined" onChange={(e) => setDt_embarque(e.target.value)} value={dt_embarque}/>
            </Grid>

            
            <Grid xs={6}>
                Hotel: 
                <TextField fullWidth size="small" label="Hotel" variant="outlined" onChange={(e) => setHotel(e.target.value)} value={hotel}/>
            </Grid>
            <Grid xs={6}>
                Operadora:  
                <TextField fullWidth size="small" label="Operadora" variant="outlined" onChange={(e) => setOperadora(e.target.value)} value={operadora}/>
            </Grid>

            <Grid xs={6}>
                Observações:  
                <TextField fullWidth size="small" label="Observacoes" variant="outlined" onChange={(e) => setObservacoes(e.target.value)} value={observacoes}/>
            </Grid>
            

            <Grid xs={12}>
                <Divider textAlign="left">FINANCEIRO</Divider>
            </Grid>

            <Grid xs={4}>
                Valor da tarifa:
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} onChange={(e) => setV_tarifa(e.target.value)} value={v_tarifa}/>
            </Grid>
            <Grid xs={4}>
                Valor da taxa:
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} onChange={(e) => setV_taxas(e.target.value)} value={v_taxas}/>
            </Grid>
            <Grid xs={4}>
                Valor do Over:
                <TextField fullWidth size="small" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start">R$</InputAdornment>}} onChange={(e) => setV_over(e.target.value)} value={v_over}/>
            </Grid>


            <Grid xs={12}>
                <Typography>
                    Valor final: R$ {parseFloat(v_over) + parseFloat(v_tarifa) + parseFloat(v_taxas)}
                </Typography>
            </Grid>

            <Grid xs={12}>
                <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
                <Button style={{marginLeft: "10px"}}variant="contained" onClick={handleCancelClick}>Limpar</Button>
            </Grid>

        </Grid>

     
    </Box>
        
    );
}
