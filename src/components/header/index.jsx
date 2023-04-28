import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ButtonHeader from '../buttonHeader';
import Logo from '../logo';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" elevation={0}  sx={{backgroundColor: "#FFFFFF"}}>

        <Toolbar sx={{dispay: "flex", justifyContent:"space-between"}}>
          
          <Logo/>
          <ButtonHeader/>
        
        </Toolbar>
      </AppBar>
      <Divider/>
      
    </Box>
  )
}
