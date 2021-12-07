import React from 'react';
import '../../App.css';
import { Divider, Box } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Home() {
  
  const [value, setValue] = React.useState('Controlled');

   const handleChange = (event) => {
     setValue(event.target.value);
   };

    
    return (
        <div className = "homePage" id = "home">
            <img src = "/FOTOS/tela-main.png"
                 alt = "foto VR" 
                 id = "foto-capa"
            />
            <div className="videoTela"> 
                <video width="550" controls className="videoTela">
                   <source src = "FOTO1/videocapa.mp4" type="video/mp4" />
                   Your browser does not support HTML video.
                </video>
            </div>
            <div id = "boxFrame">
                <br />
                <h2 align="center">Eventos Onlines e Gameficados</h2>
                <br />    
                <Carousel className="carousel">
                 <Carousel.Item>
                  <img
                    className="imgSlide"
                    src="FOTOS1/eventostres.jpg"
                    alt="First slide"
                  />         
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="imgSlide"
                     src="FOTOS1/eventoum.jpeg"
                     alt="Second slide"
                   />   
                 </Carousel.Item>
                 <Carousel.Item>
                   <img
                     className="imgSlide"
                     src="FOTOS1/eventodois.jpeg"
                     alt="Third slide"
                   />
                </Carousel.Item>
                <Carousel.Item>
                   <img
                     className="imgSlide"
                     src="FOTOS1/eventosquatro.webp"
                     alt="Third slide"
                   />
                </Carousel.Item>
              </Carousel>
            </div>
            <div id = "boxFrame1">
            <Box sx={{ flexGrow: 5 }}>
                <Grid container spacing={6} columns={11}>
                  <Grid item xs={5}>
                   <br />
                   <h2 align = "center">Como funciona</h2>
                    <br />
                    <br />
                    <Item>
                      <video width="550" controls className="videoFrame">
                         <source src = "FOTO1/video.mp4" type="video/mp4" />
                         Your browser does not support HTML video.
                      </video>
                    </Item>
                  </Grid>
                  <Grid item xs={6} className="gridFoto">
                    <Item>
                       <img 
                          src="FOTOS1/capa-ventos.png" 
                          className="fotoCapaEventos"
                          alt="foto eventos"
                       />
                    </Item>
                  </Grid>
                </Grid>
            </Box>
            </div>
            <Divider />
            <div id = "boxFrame2">
                <br />
                <h2>Contate-nos</h2>
              <br />
                <Box id= "boxContainerFrame2">
                  <Box className="boxContate"> 
                    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    <h4>Nos encontre</h4>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <MailSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Email" secondary="uniqueevents@unique.br" />
                    </ListItem>
                    
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <PhoneInTalkSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Contate" secondary="(33)3333-3333, (22)2222-2222" />
                    </ListItem>

                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookSharpIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Nos siga" secondary="unique@events" />
                    </ListItem>
                    </List>
                  </Box>
                  <Box
                    className="contateForm" 
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                  <h4>Deixe sua mensagem</h4>
                  <div>
                      <TextField
                          id="outlined-textarea"
                          className="textContate"
                          label="Nome"
                          placeholder="Com quem falamos?"
                          multiline
                      />
                  </div>
                  <div>
                      <TextField
                          id="outlined-textarea"
                          className="textContate"
                          label="E-mail"
                          placeholder="Digite seu E-mail para contato."
                          multiline
                      />
                  </div>
                  <div>
                      <TextField
                          id="outlined-multiline-static"
                          className="textContate"
                          label="Mensagem"
                          multiline
                          rows={5}
                          
                      />
                  </div>  
                  <div>
                       <button className="buttonContate">
                          Enviar
                       </button>
                  </div>
                  </Box>
                </Box>  
            </div>
            <div id ="boxFooter">
                <a href="" id="termos">
                  Termos
                </a>
                <a href="" id = "suporte">
                  Suporte
                </a>
            </div>
        </div>
    );
}

export default Home;