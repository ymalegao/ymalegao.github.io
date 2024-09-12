import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <body>
        <Box
            component="footer"
            sx={{
                backgroundColor: '#00251A', 
                color: '#FFFFFF',
                textAlign: 'center',
                padding: '1.5rem',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body1" sx={{ marginBottom: '0.5rem' , fontFamily: 'Montserrat, sans-serif',}}>
                &copy; {new Date().getFullYear()} Yash Malegaonkar. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: '1rem' }}>
                <IconButton
                    component="a"
                    href="https://github.com/ymalegao"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF' }}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/yash-malegaonkar-202a18289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF' }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>
            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}variant="body2">
                <a href="mailto:ymalegao@ucsc.edu" style={{ color: '#FFFFFF', textDecoration: 'none' , fontFamily: 'Montserrat, sans-serif',}}>
                    Contact: ymalegao@ucsc.edu
                </a>
            </Typography>
        </Box>
        </body>
    );
}

export default Footer;
