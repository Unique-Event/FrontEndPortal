import React from 'react';
import '../../App.css';
import { makeStyles, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>  ({
    grow: {
      flexGrow:1,
    },
  
}));

function Home() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className = "homePage" id = "home">
            <img src = "/FOTOS/tela-main.png" alt = "foto VR" id = "foto-capa" />
            <Box className = {classes.boxFrame}>
             
            </Box>
        </div>
    );
}

export default Home;