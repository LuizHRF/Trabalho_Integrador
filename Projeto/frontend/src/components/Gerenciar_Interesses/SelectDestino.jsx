import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";

export default function SelectDestino(props) {
  const [destinos, setDestinos] = React.useState([]);
  const [destNome, setDestnome] = React.useState();

  React.useEffect(()=> {
    const token = localStorage.getItem("token");
    const res = axios.get("/destinos", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    res.then((query) => {
        setDestinos(query.data);
        console.log(query.data);
    })
  }, [])

  const handleChange = (event) => {
    props.setDestinos(event.target.value);
    setDestnome(event.target.nome);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        
        <Select
          value={destNome}
          label="Destino"
          onChange={handleChange}
        >
          {destinos.map((d) => {
               return <MenuItem value={d.id} nome={d.nome}>{d.nome}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  );
}
