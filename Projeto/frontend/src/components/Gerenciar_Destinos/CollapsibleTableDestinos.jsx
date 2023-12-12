import * as React from 'react';
import axios from "axios";

import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import GridDestinoAlteracao from './GridDestinoAlteracao';
import GridDestino from './GridDestino';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [alteracao, setAlteracao] = React.useState(true);

  const [openMessage, setOpenMessage] = React.useState(false);
  const [messageText, setMessageText] = React.useState("");
  const [messageSeverity, setMessageSeverity] = React.useState("success");

  const estilo = {
    border:"1px solid lightGrey",
    borderRadius:"5px",
    padding:"10px",
  }

  const estiloBotao = {
    border:"1px solid Grey",
    borderRadius:"5px",
    padding:"10px",
    backgroundColor: "Lightblue",
    color:"black",
  }

  function alter(){
    setAlteracao(!alteracao);
  };

  async function handleDelete(){
    const token = localStorage.getItem("token");
    console.log(row.id);
      try {
        await axios.delete("/delDestino/" + row.id,  { headers: { Authorization: `bearer ${token}`,},});
        setMessageText("Destino removido com sucesso!");
        setMessageSeverity("success");
      } catch (error) {
        console.log(error);
        setMessageText("Falha na exclusão do destino");
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
          {row.id}
        </TableCell>
        <TableCell align="left">{row.nome}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {alteracao ? (<GridDestino row={row} estilo={estiloBotao}/>) : (<GridDestinoAlteracao row={row} estilo={estiloBotao} />)}
            <Button variant="contained" style={estiloBotao} onClick={alter}>ALTERAR INFORMAÇÕES</Button>
            <Button variant="contained" style={estiloBotao} onClick={handleDelete}>EXCLUIR DESTINO</Button>
                <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseMessage}>
                    <Alert severity={messageSeverity} onClose={handleCloseMessage}>
                        {messageText}
                    </Alert>
                </Snackbar>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function CollapsibleTableDestinos(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'>ID</TableCell>
            <TableCell align="left">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
