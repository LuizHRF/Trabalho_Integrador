import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header(props){
    return(
        <AppBar style={{margin: "0px"}} position="static">
        <Toolbar >
          <AccountCircle style={{marginRight: "20px"}}/>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.mensagem}
          </Typography>
          <div>
            {props.acesso}
          </div>
          
        </Toolbar>
      </AppBar>
    )
}