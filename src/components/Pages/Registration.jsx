import React from 'react';
import '../../App.css';
//import { makeStyles } from '@material-ui/styles';
import { TextField, Box, Button, Divider } from '@material-ui/core';
//import { useTheme } from '@material-ui/core/styles';
import api from './http-common';
//import { useQuery } from "react-query";
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// const useStyles = makeStyles((theme) =>  ({
//     grow: {
//       flexGrow:1,
//     },
   
//     buttonContinue: {
//         flexGrow: 2,
//         paddingTop: theme.spacing(2),
//         color:"#fff",
//         background: "#26319a",
//     },
// }));

function Registration() {
     
            //const classes = useStyles();
            //const theme = useTheme();
            const history = useHistory();
            const [chose, setChose] = useState(null);

            const alertHelp = () => {
               return alert("Você deve escolher a versão que deseja " + "\n" + "participar do evento." + "\n" + "Se VR, fique atento ao seu regulamento de uso!");
            }

            const [postFirstName, setPostFirstName] = useState("");
            const [postLastName, setPostLastName] = useState("");
            const [postNameCompany, setPostNameCompany] = useState("");
            const [postOffice, setPostOffice] = useState("");
            const [postEmail, setPostEmail] = useState("");
            const [postPhone, setPostPhone] = useState("");
            const [postPassword, setPostPassword] = useState("");
            const [postCheckPassword, setPostCheckPassword] = useState("");
            
           

            const { mutate: postParticipant } = useMutation(
              async () => {
                return await api.post(`/participants`, {
                  firstName: postFirstName,
                  lastName: postLastName,
                  companyName: postNameCompany,
                  job: postOffice,
                  email: postEmail,
                  phone: postPhone,
                  password: postPassword,
                })
              });

              function postData() {
                try {
                  postParticipant();
                  console.log("Cadastrado com Sucesso!");
                  history.push('/')
                } catch (err) {
                  console.error("algo deu errado " + err);
                }
              }

              const { mutate: postAddress } = useMutation(
                async () => {
                  return await api.post(`/address`, {
                    firstName: postFirstName,
                    lastName: postLastName,
                    companyName: postNameCompany,
                    job: postOffice,
                    email: postEmail,
                    phone: postPhone,
                    password: postPassword,
                  })
                });
    
    return (
        <div className = "formulario">
            <br />
           <div className="boxRegisterWhite"> 
             <br /><br /><br />
             <Box className ="boxRegister" p={8} sx={{width: 600, maxWidth: '100%',}}>
                <h2>Preencha todos os campos</h2>
                <br />
                <br />
                <br />
               <TextField 
                //className = {classes.textBox}
                value={postFirstName}
                onChange={(e) => setPostFirstName(e.target.value)}
                size="small"
                fullWidth 
                label="Nome" 
                id="firstName" 
               />
               <br />
               <br />
               <TextField 
                //className = {classes.textBox}
                value={postLastName}
                onChange={(e) => setPostLastName(e.target.value)}
                size="small"
                fullWidth 
                label="Sobrenome" 
                id="fullWidth" 
               />
               <br />
               <br />
               <TextField 
                //className = {classes.textBox}
                value={postNameCompany}
                onChange={(e) => setPostNameCompany(e.target.value)}
                size="small"
                fullWidth 
                label="Nome da empresa"
                id="fullWidth" 
               />
               <br />
               <br />
               <TextField 
                //className = {classes.textBox} 
                value={postOffice}
                onChange={(e) => setPostOffice(e.target.value)}
                size="small"
                fullWidth 
                label="Cargo" 
                id="fullWidth" 
               />
               <br />
               <br />
               <TextField 
                //className = {classes.textBox} 
                value={postEmail}
                onChange={(e) => setPostEmail(e.target.value)}
                size="small"
                fullWidth
                label="E-mail corporativo" 
                id="fullWidth"
               />
               <br />
               <br />
               <TextField 
                //className = {classes.textBox} 
                value={postPhone}
                onChange={(event) => setPostPhone(event.target.value) }
                size="small"
                fullWidth
                label="Telefone" 
                id="fullWidth" 
               />
               <br />
               <br />
               <TextField 
                //className = {classes.textBox}
                value={postPassword}
                type="password"
                size="small"
                onChange={(e) => setPostPassword(e.target.value)}
                fullWidth 
                label="Senha" 
                id="fullWidth" 
               /> 
               <br />
               <br />
               <TextField 
                //className = {classes.textBox} 
                value={postCheckPassword}
                onChange={(e) => setPostCheckPassword(e.target.value)}
                size="small"
                fullWidth
                type="password"
                label="Confirmar senha" 
                id="fullWidth" 
               />

             </Box>
             <br /><br />
              <Divider />
             <br />
             <Box className ="boxRegister">
              <br />
                <div 
                className="helpVersion"
                onClick={alertHelp}
                >
                <HelpOutlineSharpIcon />
                </div>
                <h2>Escolha versão</h2>
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2} columns={8}>
                  <Grid item xs={4}>
                    <Item>
                      <img src= "/FOTOS/vr1.png" className="versionFoto"></img>
                      <Radio 
                        value="VR" 
                        checked={chose === "VR"} 
                        onChange={(event) => setChose(event.target.value)} name="option" 
                      /> VR
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <img src= "/FOTOS/pc1.png" className="versionFoto"></img>
                      <Radio 
                        value="Desktop" 
                        checked={chose === "Desktop"} 
                        onChange={(event) => setChose(event.target.value)} name="option" 
                      /> Desktop
                    </Item>
                  </Grid>
                </Grid>
              </Box>
                {chose === "VR" &&  
                  <Box className="address">
                    <br />
                    <br />
                     <h2>Preencha seu endereço</h2>
                     <br />
                     <br />
                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '65ch' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField 
                            size="small"
                            fullWidth 
                            label="Rua" 
                            id="fullWidth" 
                          /> 
                         
                        </div>
                        <br />
                        <div>
                        <TextField 
                            size="small"
                            fullWidth 
                            label="Bairro" 
                            id="fullWidth" 
                          />   
                        </div>
                        <br />
                        <div>
                        <TextField 
                            size="small"
                            fullWidth 
                            label="Número" 
                            id="fullWidth" 
                          /> 
                        </div>
                        <br />
                        <div>
                        <TextField 
                            size="small"
                            fullWidth 
                            label="Estado" 
                            id="fullWidth" 
                          />   
                        </div>
                        <br />
                        <div>
                        <TextField 
                            size="small"
                            fullWidth 
                            label="País" 
                            id="fullWidth" 
                          />   
                        </div>
                        <br />
                        <a href="">
                          Regulamento do equipamento
                        </a>
                       
                      </Box>    
                  </Box> 
                }
                 <br />
                 <br />
                </Box>
                  <Button 
                    //className= {classes.buttonContinue} 
                    variant="contained" 
                    id = "buttonForm" 
                    onClick={postData}
                  >
                    Cadastrar
                  </Button>
                  <br />
                  <br />
                  <br />
                  <br />
            </div> 
        </div>
    );
}

export default Registration;