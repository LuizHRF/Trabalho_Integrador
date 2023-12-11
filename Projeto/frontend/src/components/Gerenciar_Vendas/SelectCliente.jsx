import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";

export default function SelectCliente(props) {
  const [clientes, setClientes] = React.useState([]);
  const [clienteNome, setClienteNome] = React.useState([]);

  React.useEffect(()=> {
    const token = localStorage.getItem("token");
    const res = axios.get("/clientes", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    res.then((query) => {
        setClientes(query.data);
        console.log(query.data);
    })
  }, [])

  const handleChange = (event) => {
    props.setCliente(event.target.value);
    setClienteNome(event.target.name);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
        <Select
          value={clienteNome}
          label="Cliente"
          onChange={handleChange}
        >
          {clientes.map((c) => {
               return <MenuItem key={c.cpf} value={c.cpf} name={c.nome}>{c.nome}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  );
}
