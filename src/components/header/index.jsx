import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Botao from '../botao';
import Divider from '@mui/material/Divider';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" elevation={0}  sx={{backgroundColor: "#FFFFFF"}}>

        <Toolbar sx={{dispay: "flex", justifyContent:"space-between"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Botao/>
        </Toolbar>
      </AppBar>
      <Divider/>
      
    </Box>
  )
}
