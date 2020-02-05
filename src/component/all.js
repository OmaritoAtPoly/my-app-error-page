import React from 'react';
import Bici from '../img/bici'
import '../App.css'

const All = () => (
        <div style={styleImage}>
                <Bici   width={500} height={500}/>
                <p>Error</p>
                
        </div >
)

export default All


const styleImage = {  
        backgroundImage: "url(http://localhost/img/fondo.png)",
        width:"100",
        height:"100"
        // backgroundPosition: 'rigth',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
      }


//       src="http://localhost/img/fondo.png"