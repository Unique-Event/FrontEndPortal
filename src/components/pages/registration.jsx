import React from 'react';
import '../../App.css';
import { makeStyles, TextField, Box, Button, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>  ({
    grow: {
      flexGrow:1,
    },
    textBox: {
        paddingBottom:theme.spacing(2),
    },
    buttonContinue: {
        flexGrow: 2,
        paddingTop: theme.spacing(2),
        color:"#fff",
        background: "#26319a",
    },
}));

function Registration() {
    const classes = useStyles();
    const theme = useTheme();
    
    return (
        <div className = "formulario">
            <br />
            <h2>Preencha os dados</h2>
             <Box className ="boxRegister" p={8} sx={{width: 500, maxWidth: '100%',}}>
               <TextField className = {classes.textBox} fullWidth label="Nome" id="firstName" />
               <TextField className = {classes.textBox} fullWidth label="Sobrenome" id="fullWidth" />
               <TextField className = {classes.textBox} fullWidth label="Nome da empresa" id="fullWidth" />
               <TextField className = {classes.textBox} fullWidth label="Cargo" id="fullWidth" />
               <TextField className = {classes.textBox} fullWidth label="E-mail corporativo" id="fullWidth" />
               <TextField className = {classes.textBox} fullWidth label="Telefone" id="fullWidth" />
               <TextField className = {classes.textBox} fullWidth label="Senha" id="fullWidth" /> 
               <TextField className = {classes.textBox} fullWidth label="Confirmar senha" id="fullWidth" />
                  <Button className= {classes.buttonContinue} variant="contained" id = "buttonForm">Continuar</Button>
             </Box>
        </div>
    );
}

export default Registration;