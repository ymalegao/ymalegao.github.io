import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function NavBar() {
    return (
        <AppBar position="fixed">
            <Toolbar style={{backgroundColor: 'black'}}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontFamily: 'Montserrat, sans-serif',}}>
                    Yash Malegaonkar
                </Typography>
                <Button sx= {{fontFamily: 'Montserrat, sans-serif',}}color="inherit" href="#about">About</Button>
                <Button sx= {{fontFamily: 'Montserrat, sans-serif',}}color="inherit" href="#skills">Skills</Button>
                <Button sx= {{fontFamily: 'Montserrat, sans-serif',}}color="inherit"href="#projects">Projects</Button>
                <Button sx= {{fontFamily: 'Montserrat, sans-serif',}}color="inherit"href="#education">Education</Button>
                <Button sx= {{fontFamily: 'Montserrat, sans-serif',}}color="inherit"href="#experience">Experience</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;