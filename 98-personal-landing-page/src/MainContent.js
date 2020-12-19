import React from 'react'
import Button from 'react-bootstrap/Button'


function MainContent() {
  return (
    <>
      <p className="primary">Hi, my name is </p> 
      <h1 className="secondary"> Juan Pablo Devecchi Martinengo.</h1>
      <h1 className="secondary"> I build things for the web.</h1>
      <p className="secondary">I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
      
      <Button variant="primary" size="lg">Get In Touch</Button> 
    </>
  )
}

export default MainContent
