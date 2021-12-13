import React from 'react';
import './App.css';
//import { useState } from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Navbar from './components/Navbar';

import Home from './components/Pages/Home';
import Registration from './components/Pages/Registration';
import Regulamento from './components/regulation/Regulamento';



const useStyles = makeStyles({
  root: {},
});

function App() {

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#26319a',
      },
      secondary: {
        main: '#e64a57',
      },
      
    },
  });
  
  //const classes = useStyles();
  return (
    <ThemeProvider theme = { theme }>
      <Router>
       <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/registration' component={Registration} />
          <Route path='/version' component={Version} />
          <Route path='/regulation' component={Regulamento} />
          {/* <Route path='/final' component={Final} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
