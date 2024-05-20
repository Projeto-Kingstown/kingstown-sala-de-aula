import React from "react";
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

 function Inicio(){
    return(
        <>  
            <Box sx={{ display: "flex"}}>
                <Sidenav/>     
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Home</h1>
                </Box>
            </Box>
        </>
    );
}

export default Inicio;