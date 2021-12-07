import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";

function Version(){
   return(
      <div id="version">
        <Box className="boxVR">
            <Link to="address">
               <img className = "imgVersion"
                    src="/FOTOS/vr1.png"
                    alt="VR"
               >
                  VR
               </img>
            </Link>
        </Box>
        <Box className="boxDesktop">
            <Link to="/final">
               <img className = "imgVersion"
                    src="FOTOS/pc1.png"
                    alt="DESKTOP"
               >
                  DESKTOP
               </img>
            </Link>
        </Box>
        <Box className="about">
            <h4>Entenda sobre:</h4>
            <textarea>

            </textarea>
        </Box>
      </div>
   );
}
export default Version;
