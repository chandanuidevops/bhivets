import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IoIosCall } from "react-icons/io";

import logo from '../assets/logo.png'
import useStyles from '../pages/home/style';


const Header = () => {
    const classes = useStyles()
    return (<Box sx={{ flexGrow: 1 }}   >
        <AppBar position="fixed"
            elevation={0}
            sx={{
                background: '#FFF'
            }}
        >
            <Toolbar className={`${classes.appbar} main_container`}   >

                <img src={logo} />

                <IoIosCall className={classes.callbtn} />
            </Toolbar>
        </AppBar>
    </Box>)
}
export default Header