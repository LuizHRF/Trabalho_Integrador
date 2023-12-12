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
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import StackInteresse from './StackInteresse';
import StackInteresseAlteracao from './StackInteresseAlteracao';

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
          {row.id}
        </TableCell>
        <TableCell align="left">{row.cliente_nome}</TableCell>
        <TableCell align="left">{row.destino}</TableCell>
        <TableCell align="left">{row.data_interesse}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} style={{padding:"20px"}}>
                {alteracao ? (<StackInteresse row={row} estilo={estiloBotao} />) : (<StackInteresseAlteracao row={row} estilo={estiloBotao}/>) }
            <Button variant="contained" style={estiloBotao} onClick={alter}>ALTERAR INFORMAÇÕES</Button>
            <Button variant="contained" style={estiloBotao} onClick={handleDelete}>EXCLUIR INTERESSE</Button>
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



export default function CollapsibleTableInteresses(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'>ID</TableCell>
            <TableCell align="left">Cliente</TableCell>
            <TableCell align="left">Destino</TableCell>
            <TableCell align="left">Data de interesse</TableCell>
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
