import React from 'react'
import Stack from '@mui/system/Stack';
import Buttons from './Buttons';
import Header from '../Header';

function DashBoard() {
  return (
    <Stack spacing ={2} style={{border:"2px solid black", margin:"300px", marginTop: "200px", boxShadow: "0px 0px 50px black"}}>

        <Header acesso="Agente de viagens" mensagem="Bem vindo novamente!"/>

        <Stack spacing={3} style ={{padding:"10px", marginBottom:"10px"}}>

          <Buttons />

        </Stack>
      
    </Stack>
  );
}

export default DashBoard;
