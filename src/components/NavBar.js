import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon} from "@material-ui/core";
import {AssignmentInd, Dehaze, Home , Apps, ContactMail} from "@material-ui/icons"
import {makeStyles} from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer"

import UserAvatar from "./../avatar.png"

const useStyles = makeStyles(theme =>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}))

const menuItems = [
    {
        listIcon:<Home />,
        listText:"Home",
        listPath:'/'
    },
    // {
    //     listIcon:<AssignmentInd/>,
    //     listText:"Resume",
    //     listPath:'/resume'
    // },
    {
        listIcon:<Apps/>,
        listText:"Portfolio",
        listPath:'/portfolio'
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contacts",
        listPath:'/contact'
    },
]
export default ()=> {
    const [state, setState] =  useState({right:false})
    const toggleSlider =  (slider, open)=> () =>{
        setState({...state, [slider]:open})
    }
    const classes = useStyles();

    const sideList = slider =>(
            <Box component="div" className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)} >
                {/* <Avatar src={UserAvatar} alt="Muhammad Hamza Asif" className={classes.avatar}  /> */}
                <Divider/>
                <List>
        {menuItems.map((lstItem, key)=>(
            <ListItem button key={key} component={Link} to={lstItem.listPath} >
                    <ListItemIcon className={classes.listItem} >{lstItem.listIcon}</ListItemIcon>
                    <ListItemText  primary={lstItem.listText}  className={classes.listItem} />
                </ListItem>
        ))}
        </List>
            </Box>
    )
    return (
        <>
        <Box component="nav"> 
            <AppBar position="static" style={{background:"#222"}} >
                <Toolbar >
                    <IconButton onClick={toggleSlider("right", true)} style={{position:"absolute", right:"30px"}} >
                        <Dehaze style={{background:"tomato"}} />
                    </IconButton>
                    <Link to="/"  style={{ textDecoration:"none" }} >
                    <Typography variant="h5" style={{color:"tan" }}>
                            Hijazi
                    </Typography>
                    </Link>
                    <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)} >
                        {sideList("right")}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}
