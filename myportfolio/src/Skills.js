import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import coinImage from './img/marioconi.png'; 

const skills = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'C++', level: 4 },
            { name: 'Python', level: 5 },
            { name: 'JavaScript', level: 4 },
        ],
    },
    {
        category: 'Frameworks/Libraries',
        items: [
            { name: 'React', level: 3 },
            { name: 'OpenGL', level: 3 },
            { name: 'Phaser.js', level: 4 },
            { name: 'p5.js', level: 5 },
        ],
    },
    {
        category: 'Game Development',
        items: [
            { name: 'Unity', level: 5 },
            { name: 'Unreal', level: 3 },
        ],
    },
];

function SkillsSection() {
    return (
        <div id="skills">
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#00251A', 
                minHeight: '100vh',
                fontFamily: 'Montserrat, sans-serif',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '3rem',
                    borderRadius: '16px', //rounded conrsers
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '800px',
                    fontFamily: 'Montserrat, sans-serif',
                }}
            >
            <Typography variant="h4" sx={{ marginBottom: '2rem', color: 'black', fontFamily: 'Montserrat, sans-serif', }}>
                Skills
            </Typography>

            {skills.map((skillCategory, index) => (
                <Box key={index} sx={{ width: '100%', maxWidth: '800px', marginBottom: '2rem' }}>
                    <Typography variant="h5" sx={{ marginBottom: '1rem', color: 'black' , fontFamily: 'Montserrat, sans-serif',}}>
                        {skillCategory.category}
                    </Typography>
                    <Grid container spacing={4}>
                        {skillCategory.items.map((skill, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography variant="body1" sx={{ color: 'black', marginRight: '1rem' , fontFamily: 'Montserrat, sans-serif',}}>
                                        {skill.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                        {Array.from({ length: skill.level }).map((_, index) => (
                                            <img
                                                src={coinImage}
                                                alt="Mario Coin"
                                                key={index}
                                                style={{ width: '25px', height: '25px' }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
        </Box>
        </div>
    );
}

export default SkillsSection;
