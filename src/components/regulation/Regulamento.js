import React from "react";

export default function Regulamento() {
  const shoot = () => {
    alert("Obrigada por concordar com nossos termos!");
  }
  return (
        <div style= {{color:'#ffffff',fontSize: '3em', backgroundColor:'#000080',textAlign:'center',position: 'center'}}>
          <br />
          <fieldset style={{borderColor:'#FFA500'}}>
          <h1> Regulamento </h1> 
          <body >Para utilizar o óculos de realidade virtual, o usuário deve informar o seu endereço no cadastro para que a empresa possa realizar o empréstimo. Uma vez que houve o empréstimo, os óculos ficam sob total responsabilidade do usuário. Em caso de dano 
          ou extravio será cobrado o valor referente ao produto entregue. Após a finalização do evento, o usuário deverá agendar a entrega do óculos VR. A plataforma cumpre todos os requisitos previstos na Lei Geral de Proteção de Dados.
          <br />
          <br />
          </body>
           <input  style= {{width: '30px',height: '30px',top: '0', left: '0', fontSize:'0,10em',backgroundColor:'D2691E'}} type="checkbox" />
           <label for="cheched"  > Li e aceito os termos do regulamento, para recebimento e entrega dos óculos VR. </label>
           <br>
           </br>
           <button style= {{width: '100px',height: '50px',fontSize:'0,10em', fontFamily:'serif',  backgroundColor:'##FFA500'}} onClick={shoot}> Confirmar </button>
           </fieldset>
          <br /> 
          <br />
          <br />
 </div>

    )
  }


