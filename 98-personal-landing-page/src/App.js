import React from 'react'
import Container from 'react-bootstrap/Container'

// Custom components
import NavBarMenuV2 from './NavBarMenuV2'
import MainContent from './MainContent'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

const App = () => ( 
  <>
    <NavBarMenuV2 />
    <Container>
      <MainContent />
      <AboutMe />      
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </Container> 
  </>
); 
  
export default App; 
