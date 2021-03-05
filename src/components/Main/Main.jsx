import React from 'react';
import {Card , CardHeader , CardContent, Typography,Grid,Divider} from '@material-ui/core'
import classes from '*.module.css';
import useStyles from './styles'
const Main = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader ='Powered by Speechly' />
        </Card>
  
    );
}

export default Main;
