import React from 'react'
import Sidenav from '../share/Sidenav'
import Navbar from '../share/Navbar'
import Box from '@mui/material/Box';

const Dashboard = () => {
  return (
    <>
<Navbar/>
<Box height={40}/>
    <Box sx={{ display: 'flex' }}>

      <Sidenav/>
    
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Dashoard</h1> 
      </Box>
    </Box>
      
    </>
  )
}

export default Dashboard
