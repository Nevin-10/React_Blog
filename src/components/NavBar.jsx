import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{color:'black',background:'lightslategrey',boxShadow:'0px 10px lightslategrey'}}>
        <Toolbar>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1,fontFamily:'fantasy',fontSize:'30px' }}>
                Blog Dashboard
            </Typography>

            <Button color="secondary" variant='contained'><Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home</Link></Button>
            <Button color="secondary" variant='contained'><Link to={'/Add'} style={{textDecoration:'none',color:'black'}}>Add Blog</Link></Button>
            



        </Toolbar>
        </AppBar>



    </Box>


    
    
  )
}

export default NavBar