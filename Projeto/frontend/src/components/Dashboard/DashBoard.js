import React from 'react'
import Box from '@mui/system/Box';


function DashBoard() {

  console.log('estou no dashboard');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <img src="/embarque.png" alt='Dashboard' />
    </Box>
  );
}

export default DashBoard;
