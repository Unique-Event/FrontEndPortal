import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';



function ButtonRegister() {
    
    
    return(
      <Link to="/registration" className="linkRegister">  
        <button 
          className="buttonRegister"
        >
            Cadastrar
        </button>
      </Link>  
    );
}

export default ButtonRegister;