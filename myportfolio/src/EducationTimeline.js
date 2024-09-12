import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography, Box } from '@mui/material';

function EducationTimeline() {
    return (
        <div id="education" style={{ padding: '50px 0' }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#00251A', 
                minHeight: '100vh',
            }}
        >
            {/* Off-white transparent box */}
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '3rem', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '800px',
                }}
            >
                <Typography variant="h4" sx={{ marginBottom: '2rem', color: 'black' , fontFamily: 'Montserrat, sans-serif',}}>Education</Typography>
                <Timeline position="alternate">
                    {/* High School */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}} variant="body2" color="textSecondary">
                                2018 - 2022
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: 'green'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 , fontFamily: 'Montserrat, sans-serif',}}>
                            <Typography variant="h6" component="span">
                                High School
                            </Typography>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}>Completed high school education at Milpitas High School.</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* UCSC */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' , fontFamily: 'Montserrat, sans-serif',}}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}} variant="body2" color="black">
                                2020 - 2023
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: 'green'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, fontFamily: 'Montserrat, sans-serif', }}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}variant="h6" component="span">
                                University of California, Santa Cruz
                            </Typography>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}>Studied Computer Science: Game Design. Graduating in 2026.</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Masters */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0', fontFamily: 'Montserrat, sans-serif', }}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}variant="body2" color="black">
                                2026 - Future
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: 'black'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 , fontFamily: 'Montserrat, sans-serif',}}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}variant="h6" component="span">
                                Pursue Master's Degree
                            </Typography>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}>Planning to pursue a Master's in Game AI.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
        </div>
    );
}

export default EducationTimeline;
