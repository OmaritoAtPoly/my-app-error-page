import React from 'react';
import Bici from '../img/bici';
import { makeStyles } from '@material-ui/styles';


const All = () => {
        const stylos = useStyles();

        return (
                <div className={stylos.fondo}>
                        <div >

                                <Bici  className={stylos.bici}/>
                                <p>Error</p>

                        </div>
                </div >)

}



export default All

const useStyles = makeStyles({
        bici: {
                display: 'flex',
                position:"relative",
                paddingTop:"7%",
                marginLe:"5%"
                // alignItems:"baseline"
                // marginLeft: '5%',
                // alignContent:'stretch',
                // position: 'absolute'
        },
        fondo: {
                backgroundImage: "url(http://localhost/img/fondo.png)",
                display: 'flex',
                width: '99%',
                height:'100%',
                // paddingLeft:"1%",
                // paddingTop:"3%",
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                
                // // paddingTop: '10%',
                // // paddingBottom:'10%',
                // // paddingLeft:'2%',
                
                // // alignItems:'flexStart'


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