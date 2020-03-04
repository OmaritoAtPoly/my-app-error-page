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

                        <div className={stylos.buttons}>
                                <Button variant="outlined" color="secondary">Quit</Button>
                                <Button variant="outlined" color="secondary">Try again</Button>
                        </div>
                </div>

        )

}

const useStyles = makeStyles({
        centrando: {  /// bien hasta ahora falta el mov de los botones por abajo
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',

        }, errorText: {
                display: 'flex',
                marginTop: '12%',
                marginBottom: "7%",
                paddingLeft: "25%"
        },
        apologizeText: {
                display: 'flex',
                marginBottom: "2%",
                paddingLeft: "26%"
        },
        forbiddenText: {
                display: 'flex',
                marginTop: '5%',
                marginBottom: "7%",
                paddingRight: "10%",

        }, buttons: {
                display: 'flex',
                justifyContent: "space-around",
                width: "70%",
                paddingLeft: "15%",
                marginTop: "15%",
        }
})


export default ErrorBox;