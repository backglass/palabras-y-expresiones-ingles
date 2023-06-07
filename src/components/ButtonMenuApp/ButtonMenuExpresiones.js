import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ButtonMenuApp({expresion}) {

  const navigate = useNavigate();
  const handleSumit = () => {
    navigate(`/expresiones/${expresion}`);
  };

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained" 
         size="large"
         sx={{height: '60px', width: '200px'}} 
         onClick={handleSumit}
         name = {"expresion 1"}>
        {expresion}
 
         
        </Button>
      </div>
    </Box>
  );
}
