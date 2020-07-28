import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MobileRightDrawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { AssignmentInd, Home, Apps, ContactMail, MenuOpen } from '@material-ui/icons'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Box,
    ListItemIcon
} from '@material-ui/core';
import avatar from '../images/avatar.png'


//CSS styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#ffcca6",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    ListItem: {
        color: "#615ebd"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "About",
        listPath: "/about"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Experience",
        listPath: "/experience"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },    
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }    
]

 const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    }); 

    const classes = useStyles()

    const sideList = slider => (

        <Box className={classes.menuSliderContainer} component="div"
        onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt="Angela Ivey" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.ListItem}>
                    {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.ListItem} primary={lsItem.listText} />
            </ListItem>
            ))}
        </List>
        </Box>
    )

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#615ebd"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                        <MenuOpen fontSize="large" style={{color: "#ffcca6"}} />
                        </IconButton>
                        <MobileRightDrawer anchor="right"
                        open={state.right} close={toggleSlider("right", false)}>
                            {sideList("right")}
                        </MobileRightDrawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;