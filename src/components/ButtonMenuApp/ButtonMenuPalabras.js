import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ButtonMenuApp({lección}) {

  const navigate = useNavigate();
  const handleSumit = () => {
    navigate(`/palabras/${lección}`);
  };

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained" 
         size="large"
         sx={{height: '60px', width: '200px'}} 
         onClick={handleSumit}
         name = {"palabras 1"}>
        {lección}
 
         
        </Button>
      </div>
    </Box>
  );
}
