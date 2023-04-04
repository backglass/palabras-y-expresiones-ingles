import React from 'react';
import Typography from '@mui/material/Typography';

const Palabra = ({ palabra }) => {
    return (
        <Typography variant="h5" component="div">
            {palabra}
        </Typography>
    );
    }
export default Palabra;