import React from 'react';
import Button from '@mui/material/Button';
import Header from './Header';
import NavBar from './NavBar';
import About from './About';
import Games from './Games';
import EducationTimeline from './EducationTimeline';
import WorkExperienceTimeline from './WorkExperienceTimeline';
import SkillsSection from './Skills';
import Footer from './Footer';
 

function App() {
  return (
    <div style={{backgroundColor: '#00251A'}}>
      <body >
      <NavBar />
      <About />
      <Games />
      <SkillsSection />
      <EducationTimeline />
      <WorkExperienceTimeline />
      <Footer />
      </body>

      
    </div>
  );
}

export default App;
