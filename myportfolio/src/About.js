import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import yashImage from './img/yash.jpg'; // Replace with your image path

const githubLink = 'https://github.com/ymalegao';
const linkedinLink = 'https://www.linkedin.com/in/yash-malegaonkar-202a18289/';

function About() {
    return (
       <div id="about" style={{ padding: '50px 0' }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '100vh',
                backgroundColor: '#00251A', 
                color: 'white',
                padding: '2rem',
                fontFamily: 'Montserrat, sans-serif',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    padding: '3rem',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '800px',
                }}
            >
                {/* Avatar with color ring */}
                <Box
                    sx={{
                        borderRadius: '50%',
                        padding: '0px', 
                        background: 'linear-gradient(135deg, #00BFA5, #FFD54F)', 
                    }}
                >
                    <Avatar
                        alt="Yash"
                        src={yashImage}
                        sx={{ width: 200, height: 200, mb: 2 }} 
                    />
                </Box>

                <h1 style={{ color: '#111111' }}>Yash Malegaonkar</h1> 
                <p style={{ maxWidth: '600px', color: '#111111', fontFamily: 'Montserrat' }}>
                    I am a student at the University of California, Santa Cruz studying Computer Science Game Design, with a minor in Computer Science.
                    My current interests are in game development, Game AI, and full-stack web development. I do research in the Game User Interaction and Intelligence Lab at UCSC.
                </p>
                
                {/* Social media links */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton
                        component="a"
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#111111' }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href={linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#111111' }} 
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
        </div>
    );
}

export default About;
