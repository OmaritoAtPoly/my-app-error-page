import React from 'react';
import Bici from '../img/bici';
import { makeStyles } from '@material-ui/styles';


const All = () => {
        const stylos = useStyles();

        return (

                <div className={stylos.fondo}>
                        <div className={stylos.bicii}>
                                <Bici />
                                <p>Error</p>
                        </div>



                </div >)

}



export default All

const useStyles = makeStyles({
        bici: {
                display: 'flex',
                paddingTop: "7%",
                alignContent: "center",
                border: "1px solid #555",
                justifyContent: "space-between",
                // alignItems: "center"
                position: "absolute",

                // marginLeft: "5%",

                // alignItems:"baseline"
                // marginLeft: '5%',
                // alignContent:'stretch',
                // position: 'absolute'
        },
        fondo: {
                backgroundImage: "url(http://localhost/img/fondo.png)",
                display: 'flex',
                width: '100%',
                height: '100%',
                // justifyContent: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                paddingLeft: "3%",
                paddingTop: "9%",
                // alignContent: "center",
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