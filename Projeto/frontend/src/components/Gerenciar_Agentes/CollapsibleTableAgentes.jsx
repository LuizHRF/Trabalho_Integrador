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
import GridAgenteAlteracao from './GridAgenteAlteracao';

import GridAgente from "./GridAgente";

import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [alteracao, setAlteracao] = React.useState(true);
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
        <TableCell align="left">{row.ultima_modificacao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} style={{padding:"20px"}}>
              {alteracao ? (<GridAgente row={row} estilo={estiloBotao}/>) : (<GridAgenteAlteracao row={row} estilo={estiloBotao} />)}
            <Button variant="contained" style={estiloBotao} onClick={alter}>ALTERAR INFORMAÇÕES</Button>
        
            </Box>
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
            <TableCell align='left'>CPF</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Ultima modificaçao</TableCell>
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
