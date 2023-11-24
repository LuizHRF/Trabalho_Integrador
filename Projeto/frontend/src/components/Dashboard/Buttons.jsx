import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const estiloBotao = {
    borderRadius: "30px",
    padding: "10px"
}
const Psx = {
    fontSize: "20px",
}

export default function Buttons(props){

    function PositionedMenu() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        }
      
      
        return (
          <div>
            <Button sx={Psx} style={estiloBotao}
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="contained"
            >
              Gerenciar Vendas
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem sx={Psx} style={estiloBotao} onClick = {() => {
                  desactivate(); 
                  props.sVendas(true)
                  novamensagem("Gerenciar Vendas")
                  handleClose();
                  }}
                  variant="contained">Cadastrar Vendas
              </MenuItem>
              <MenuItem sx={Psx} style={estiloBotao} onClick = {() => {
                  desactivate(); 
                  props.sClientes(true);
                  novamensagem("Gerenciar Clientes");
                  handleClose();
                  }} 
                  variant="contained">Gerenciar Clientes
              </MenuItem>
      
            </Menu>
          </div>
        );
      }

    function desactivate(){
        props.sVendas(false);
        props.sClientes(false);
        props.sDashboard(false);
        props.sDestinos(false);
    }

    function novamensagem(m){
        props.sMensagem(m);
    }
    
    return(
        <>
        <Button sx={Psx} style={estiloBotao} onClick = {() => {
            desactivate(); 
            props.sDashboard(true)
            novamensagem("Bem vindo de volta!");

            }} 
            variant="contained">DashBoard</Button>

        <PositionedMenu />
        
        <Button sx={Psx} style={estiloBotao} onClick = {() => {
            desactivate(); 
            props.sClientes(true);
            novamensagem("Gerenciar Clientes");
            }} 
            variant="contained">Gerenciar Clientes</Button>

        <Button sx={Psx} style={estiloBotao} onClick = {() => {
            desactivate(); 
            props.sDestinos(true)
            novamensagem("Gerenciar Destinos")
            }}
            variant="contained">Gerenciar Destinos</Button>

        
        <Button sx={Psx} style={estiloBotao} onClick = {() => {
            desactivate(); 
            props.sDashboard(true)
            novamensagem("Gerenciar Interesses");

            }} 
            variant="contained">Gerenciar Interesses</Button>
        

        </>
    )
}