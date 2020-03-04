import React from 'react';
import Bici from '../img/bici';
import { makeStyles } from '@material-ui/styles';
import ErrorBox from './ErrorBox';


const All = () => {
        const stylos = useStyles();

        return (
                <div className={stylos.fondo}>
                        <div className={stylos.centrando}>
                                <Bici className={stylos.bici} />
                        </div>
                        <div className={stylos.errorBox}>
                                <ErrorBox
                                        label="Error"
                                        apologize="i'm sorry "
                                        forbidden="you can't use this resource or it does't exists"
                                />
                        </div>

                </div >);
}



export default All

const useStyles = makeStyles({
        errorBox: {//aki  esta  buenoo
                display: 'flex',
                // justifyContent: 'space-around',
                // width: "50%",
                // height: "20%",
                // position: 'absolute',
                // position: 'absolute'
                // paddingTop: "25%",
                // marginLeft: "1%",
                // border: '1px solid red',
        },
        centrando: {
                display: 'flex',
                // justifyContent
                // position: 'fixed',
                // paddingTop: "25%",
                // marginLeft: "5%",
        },
        bici: {
                display: 'flex',
                paddingTop: "25%",
                marginLeft: "5%",
                // border: '1px solid #C00',
        },
        fondo: {
                display: 'flex',
                backgroundImage: "url(http://localhost/img/fondo.png)",
                backgroundRepeat: 'no-repeat',
                width: '100%'
                // position: "relative"
        }
});

