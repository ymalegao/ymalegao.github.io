import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography, Box } from '@mui/material';

function WorkExperienceTimeline() {
    return (
        <div id="experience" style={{ padding: '50px 0' }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backgroundColor: '#00251A', // Dark green background
                minHeight: '100vh',
                fontFamily: 'Montserrat, sans-serif',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // off-white transparent background
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
                <Typography variant="h4" sx={{ marginBottom: '2rem', color: 'black', fontFamily: 'Montserrat, sans-serif', }}>Work Experience</Typography>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}variant="body2" color="black">
                                April 2023 - Present
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: 'green'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, fontFamily: 'Montserrat, sans-serif', }}>
                            <Typography variant="h6" component="span">
                                Research Assistant - Game User Interaction and Intelligence Lab
                            </Typography>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}>
                                - Developed a Unity-based platformer game rooted in ethnographic research.<br />
                                - Integrated OpenAI and Teachable Machine for user speech and gesture capture, enhancing interaction via API calls and Flask.
                                - Coauthored a paper on the game's development and user testing for the 2024 CHI Conference, which was accepted.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    {/* Baskin School of Engineering */}
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}} variant="body2" color="black">
                                October 2023 - Present
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: 'green'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, fontFamily: 'Montserrat, sans-serif', }}>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}} variant="h6" component="span">
                                Reader/Tutor - Baskin School of Engineering
                            </Typography>
                            <Typography sx={{fontFamily: 'Montserrat, sans-serif',}}>
                                - Graded homework assignments and provided feedback.<br />
                                - Held office hours and led discussion sections for students.<br />
                                - Collaborated with professors to align instructional goals and teaching strategies.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
        </div>
    );
}

export default WorkExperienceTimeline;
