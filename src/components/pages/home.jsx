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
               <iframe className="frame" width="560" height="315" src="https://www.youtube.com/embed/pq64tgbb7-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Box className = {classes.boxFrame} id = "boxFrame">
            </Box>
            <Box className = {classes.boxEvent}>
            </Box>
        </div>
    );
}

export default Home;