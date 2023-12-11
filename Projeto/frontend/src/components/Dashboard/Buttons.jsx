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

    function PositionedMenuVendas() {
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
              fullWidth="true"
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
              <MenuItem sx={Psx} style={estiloBotao} fullWidth="true" onClick = {() => {
                  desactivate(); 
                  props.sVendas(true)
                  novamensagem("Gerenciar Vendas")
                  handleClose();
                  }}
                  variant="contained">Cadastrar Vendas
              </MenuItem>
              <MenuItem sx={Psx} style={estiloBotao} fullWidth="true" onClick = {() => {
                  desactivate(); 
                  props.sConsultaVendas(true);
                  novamensagem("Consulta de vendas");
                  handleClose();
                  }} 
                  variant="contained">Consultar vendas
              </MenuItem>
      
            </Menu>
          </div>
        );
      }

    function PositionedMenuClientes() {
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
              fullWidth="true"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="contained"
            >
              Gerenciar Clientes
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
                  props.sClientes(true)
                  novamensagem("Cadastro de Clientes")
                  handleClose();
                  }}
                  variant="contained">Cadastrar Clientes
              </MenuItem>
              <MenuItem sx={Psx} style={estiloBotao} onClick = {() => {
                  desactivate(); 
                  props.sConsultaClientes(true);
                  novamensagem("Consulta de Clientes");
                  handleClose();
                  }} 
                  variant="contained">Consultar Clientes
              </MenuItem>
      
            </Menu>
          </div>
        );
      }

      function PositionedMenuDestinos() {
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
              fullWidth="true"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="contained"
            >
              Gerenciar Destinos
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
                  props.sDestinos(true)
                  novamensagem("Cadastro de destinos")
                  handleClose();
                  }}
                  variant="contained">Cadastrar Destinos
              </MenuItem>
              <MenuItem sx={Psx} style={estiloBotao} onClick = {() => {
                  desactivate(); 
                  props.sConsultaDestinos(true);
                  novamensagem("Consulta de Destinos");
                  handleClose();
                  }} 
                  variant="contained">Consultar Destinos
              </MenuItem>
      
            </Menu>
          </div>
        );
      }

      function PositionedMenuInteresses() {
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
              fullWidth="true"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="contained"
            >
              Gerenciar Interesses
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
                  props.sInteresses(true)
                  novamensagem("Cadastro de Interesses")
                  handleClose();
                  }}
                  variant="contained">Cadastrar Interesses
              </MenuItem>
              <MenuItem sx={Psx} style={estiloBotao} onClick = {() => {
                  desactivate(); 
                  props.sConsultaInteresses(true);
                  novamensagem("Consulta de Interesses");
                  handleClose();
                  }} 
                  variant="contained">Consultar Interesses
              </MenuItem>
      
            </Menu>
          </div>
        );
      }

      function PositionedMenuAgentes() {
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
              fullWidth="true"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="contained"
            >
              Gerenciar Agentes
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
                  props.sAgentes(true)
                  novamensagem("Cadastro de Agentes")
                  handleClose();
                  }}
                  variant="contained">Cadastrar Agentes
              </MenuItem>
              <MenuItem sx={Psx} style={estiloBotao} onClick = {() => {
                  desactivate(); 
                  props.sConsultaAgentes(true);
                  novamensagem("Consulta de Agentes");
                  handleClose();
                  }} 
                  variant="contained">Consultar Agentes
              </MenuItem>
      
            </Menu>
          </div>
        );
      }

    function desactivate(){
        props.sInteresses(false);
        props.sConsultaInteresses(false);
        props.sConsultaDestinos(false);
        props.sConsultaClientes(false);
        props.sConsultaVendas(false);
        props.sVendas(false);
        props.sClientes(false);
        props.sDashboard(false);
        props.sDestinos(false);
        props.sAgentes(false);
        props.sConsultaAgentes(false);
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

        <PositionedMenuVendas />
        
        <PositionedMenuClientes />

        <PositionedMenuDestinos/>
        
        <PositionedMenuInteresses/>

        <PositionedMenuAgentes />

        <Button sx={Psx} style={estiloBotao} onClick = {() => {
            desactivate(); 
            props.logOut();
            novamensagem("Bem vindo de volta!");

            }} 
            variant="contained">Logout
        </Button>
        

        </>
    )
}