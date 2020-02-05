import React from 'react';
import Bici from '../img/bici';
import { makeStyles } from '@material-ui/styles';


const All = () => {
        const stylos = useStyles();

        return (
                <div >
                        <div className={stylos.fondo}>

                                <Bici  className={stylos.bici}/>
                                {/* <p>Error</p> */}

                        </div>
                </div >)

}



export default All

const useStyles = makeStyles({
        bici: {
                display: 'flex',
                marginLeft:'5%',
                // alignContent:'stretch',
                // position: 'absolute'
        },
        fondo: {
                backgroundImage: "url(http://localhost/img/fondo.png)",
                display: 'flex',
                paddingTop: '10%',
                // paddingBottom:'10%',
                // position: 'absolute'
                // paddingLeft:'2%',
                // width: '100%',
                height:'100%',
                // alignItems:'flexStart'
        },
        price: {
                marginRight: '2rem'
        },
        submit: {
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
        },
        
});


// const useStyles = makeStyles({
//         styleImagee : {
//          backgroundImage: 'url(http://localhost/img/fondo.png)'
//         }
// })

const styleImage = {
        backgroundImage: "url(http://localhost/img/fondo.png)",
        width: "100%",
        height: "100%"
        // backgroundPosition: 'rigth',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
}




//       src="http://localhost/img/fondo.png"