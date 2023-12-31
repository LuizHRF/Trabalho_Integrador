import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";

export default function SelectAgente(props) {
  const [agentes, setAgentes] = React.useState([]);
  const [agenteNome, setAgenteNome] = React.useState();

  React.useEffect(()=> {
    const token = localStorage.getItem("token");
    const res = axios.get("/agentes", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    res.then((query) => {
        setAgentes(query.data);
        console.log(query.data);
    })
  }, [])

  const handleChange = (event) => {
    props.setAgente(event.target.value);
    setAgenteNome(event.target.name);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={agenteNome}
          label="agente"
          onChange={handleChange}
        >
          {agentes.map((a) => {
               return <MenuItem key={a.cpf} value={a.cpf} name={a.nome}>{a.nome}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  );
}
