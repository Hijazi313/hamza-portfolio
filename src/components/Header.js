import React from 'react'
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Avatar, Grid, Box} from "@material-ui/core";

import avatar from "./../avatar.png"

const useStyles = makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1),
    },
    title:{
        color:"tomato"
    },
    subtitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}))

export default ()=> {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid justify="center" container>

            </Grid>
            <Typography variant="h4" className={classes.title}>
                <Typed strings={["Hamza Asif"]} typespeed={40} />
            </Typography>
            <br/>
            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={["Web Developmer","Full Stack Developer", "MERN Stack", "MERNG Stack  "]} loop typespeed={80} backSpeed={60} />
            </Typography>
        </Box>
    )
}
