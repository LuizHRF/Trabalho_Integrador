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
import GridVendas from './GridVendas';
import GridVendasAlteracao from './GridVendasAlteracao';
import { Button } from '@mui/material';



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [alteracao, setAlteracao] = React.useState(false);

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
          {row.num_orcamento}
        </TableCell>
        <TableCell align="left">{row.cli_nome}</TableCell>
        <TableCell align="left">{row.destino}</TableCell>
        <TableCell align="left">{row.dt_venda}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} style={{padding:"20px"}}>
                {!alteracao ? (<GridVendas row={row} estilo={estilo}/>) : (<GridVendasAlteracao rows={row} estilo={estiloBotao}/>)}
              <Button variant="contained" style={estiloBotao} onClick={alter}>ALTERAR INFORMAÇÕES</Button>
              <Button variant="contained" style={estiloBotao}>EXCLUIR VENDA</Button>
            </Box>
  
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function CollapsibleTableVendas(props) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'>ID</TableCell>
            <TableCell align="left">Cliente</TableCell>
            <TableCell align="left">Destino</TableCell>
            <TableCell align="left">Data de venda</TableCell>
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
