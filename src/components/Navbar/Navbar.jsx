import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (<>
  <AppBar sx={{backgroundColor:"black"}}> <Toolbar>

    <Box  sx={{ flexGrow: 1, display:"flex"}}>
  <Typography
            variant="h6"
            
            sx={{  flexGrow:0.1, display: { xs: 'none', sm: 'block' } }}
          >
            Home
          </Typography>

          <Typography
            variant="h6"
            
            sx={{  flexGrow:0.1, display: { xs: 'none', sm: 'block' } }}
          >
            Dashboard
          </Typography> 


          </Box>

          <Box sx={{display:"flex",flexGrow:1,justifyContent:"flex-end"}}>
          <Typography
            variant="h6"
            
            sx={{ flexGrow:0.1, display: { xs: 'none', sm: 'block' } }}
          >
            Profile
          </Typography>


          <Typography
            variant="h6"
            
            sx={{ flexGrow:0.1, display: { xs: 'none', sm: 'block' } }}
          >
            Users
          </Typography>

          </Box>
    
    </Toolbar></AppBar>
  </>
  )
}

export default Navbar