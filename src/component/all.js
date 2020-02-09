import React from 'react';
import Bici from '../img/bici';
import { makeStyles } from '@material-ui/styles';
import ErrorBox from './ErrorBox';


const All = () => {
        const stylos = useStyles();

        return (
                <span className={stylos.fondo}>
                        <span className={stylos.centrando}>
                                <Bici className={stylos.bici} />
                        </span>
                        <ErrorBox
                                label="Error"
                                apologize="i'm sorry "
                                forbidden="you can't use this resource or it does't exists"
                        />
                </span >);
}



export default All

const useStyles = makeStyles({
        centrando: {
                display: 'flex',
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
        }
});

