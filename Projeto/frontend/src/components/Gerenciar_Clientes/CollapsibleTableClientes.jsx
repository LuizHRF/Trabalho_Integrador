import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GridCliente from './GridCliente';
import GridClienteAlteracao from './GridClienteAlteracao';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from "axios";


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [alteracao, setAlteracao] = React.useState(true);

  const [openMessage, setOpenMessage] = React.useState(false);
  const [messageText, setMessageText] = React.useState("");
  const [messageSeverity, setMessageSeverity] = React.useState("success");

  function handleCloseMessage(_, reason) {
    if (reason === "clickaway") {
        return;
    }
    setOpenMessage(false);
} 

async function handleDelete(){
  const token = localStorage.getItem("token");
  console.log(row.id);
    try {
      await axios.delete("/delInteresse/" + row.id,  { headers: { Authorization: `bearer ${token}`,},});
      setMessageText("Interesse removido com sucesso!");
      setMessageSeverity("success");
    } catch (error) {
      console.log(error);
      setMessageText("Falha na exclusão do interesse");
      setMessageSeverity("error");
    } finally {
      setOpenMessage(true);
    }
}

  function alter(){
    setAlteracao(!alteracao);
  };

  const estiloBotao = {
    border:"1px solid Grey",
    borderRadius:"5px",
    padding:"10px",
    backgroundColor: "Lightblue",
    color:"black",
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align='left'>
          {row.cpf}
        </TableCell>
        <TableCell align="left">{row.nome}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} style={{padding:"20px"}}>
              <Typography variant="h5" gutterBottom component="div">
                Informações
              </Typography>
              {alteracao ? (<GridCliente row = {row} estilo={estiloBotao}/>) : (<GridClienteAlteracao row={row} estilo={estiloBotao} />) }
              <Button variant="contained" style={estiloBotao} onClick={alter}>ALTERAR INFORMAÇÕES</Button>
              <Button variant="contained" style={estiloBotao} >EXCLUIR CLIENTE</Button>
              <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
                <Alert severity={messageSeverity} onClose={handleCloseMessage}>
                  {messageText}
                </Alert>
              </Snackbar>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function CollapsibleTableClientes(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'>CPF</TableCell>
            <TableCell align="left">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <Row key={row.cpf} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
