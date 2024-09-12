import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

import ShlokaImg from './img/SholkaSS.png';
import CirtImg from './img/cirt.png';
import MarioImg from './img/mario.png';
import MazeGenImg from './img/mazegen.png';
import VoxelImg from './img/voxel.png';


const projects = [
    {
        title: 'Shloka',
        img: ShlokaImg, 
        description: 'Research Project with GUII Lab at UCSC, a serious game to measure religiosity and spirituality by playing games.',
        link: "https://siddu1998.github.io/RelShloka/"
    },
    {
        title: 'PCG City Generator',
        img: CirtImg,
        description: 'City Generator using Wave Function Collapse.',
        link: "https://github.com/Procedural-BananaSlug-Studios/PCG-City-Generator"
    },
    {
        title: 'Genetic Algorithm Mario',
        img: MarioImg, 
        description: 'Generate Mario levels using Genetic Algorithm.',
        link: "https://github.com/ymalegao/"
    },
    {
        title: 'PacMan like Maze Generator',
        img: MazeGenImg, 
        description: 'Generate PacMan like mazes using different graph algorithms and play as a character while a agent programmed with A* algorithm finds the path.',
        link: "https://github.com/ymalegao/MazeGen"
    },
    {
        title: 'Voxel Engine (Minecraft Clone)', 
        img: VoxelImg, 
        description: 'Minecraft Clone using C++ and OpenGL. Implemented multi-threading, chunk loading, and rendering. Work in progress.',
        link: "https://github.com/ymalegao/VoxelEngineMC"
    },
    
];

function Games() {
    return (
        <div id="projects" style={{ padding: '50px 0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' , backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
            <Typography variant="h4" sx={{ marginBottom: '2rem', color: 'black' , fontFamily: 'Montserrat, sans-serif',}}>Projects & Games</Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                position: 'relative',
                                width: '100%',
                                overflow: 'hidden',
                                '&:hover .overlay': { opacity: 1 }, // Hover effect
                            }}
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            {/* Project Image */}
                            <CardMedia
                                component="img"
                                image={project.img}
                                alt={project.title}
                                sx={{ height: 200, filter: 'brightness(0.7)' }}
                            />
                            
                            {/* Hover Overlay */}
                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: 'white',
                                    opacity: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem',
                                    transition: 'opacity 0.3s ease',
                                    fontFamily: 'Montserrat, sans-serif',
                                }}
                            >
                                <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}variant="h6" component="h2">{project.title}</Typography>
                                <Typography variant="body2" sx={{fontFamily: 'Montserrat, sans-serif',}}> {project.description}</Typography>
                            </Box> 
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </div>
    );
}

export default Games;
