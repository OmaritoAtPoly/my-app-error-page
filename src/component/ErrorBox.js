import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const ErrorBox = ({ label, apologize, forbidden }) => {
        const stylos = useStyles();
        return (
                <div className={stylos.centrando}>
                        <Typography className={stylos.errorText} color="textSecondary" variant="h1" component="h2">
                                {label}
                        </Typography>
                        <Typography className={stylos.apologizeText} color="textSecondary" align="center" variant="h3" component="h1">
                                {apologize}
                        </Typography>
                        <Typography className={stylos.forbiddenText} color="textSecondary" align="center" variant="h4" component="h1">
                                {forbidden}
                        </Typography>
                        {/* <div className={stylos.errorText}>{label}</div> */}
                        {/* <div className={stylos.apologizeText}>{apologize}</div> */}
                        {/* <div className={stylos.forbiddenText}>{forbidden}</div> */}
                        <div className={stylos.buttons}>
                                <Button variant="outlined" color="secondary">Quit</Button>
                                <Button variant="outlined" color="secondary">Try again</Button>
                        </div>

                </div>

        )

}

const useStyles = makeStyles({
        centrando: {
                display: 'flex',
                width: '150%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flext-start',
                // border: '1px solid blue',

        }, errorText: {
                display: 'flex',
                marginTop: '12%',
                marginBottom: "7%",
                paddingLeft:"25%"
                // fontSize: '110px',
                // paddingtop: '10px',
                // alignItems:'flex-end',
                // paddingLeft:"1%"
        },
        apologizeText: {
                display: 'flex',
                marginBottom: "2%",
                paddingLeft:"26%"
        },
        forbiddenText: {
                display: 'flex',
                // fontSize: '2rem',
                marginBottom: "7%", 
                paddingRight: "10%",

        }, buttons: {
                display: 'flex',
                // backgroundColor: '#FF0000',
                // backgroundColor: 'white',
                justifyContent: "space-around",
                // border: '1px solid yellow',
                width: "50%",
                paddingLeft:"10%",
        }
})


export default ErrorBox;