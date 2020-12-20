import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Custom components
import Divider from './Divider'
import ProfilePhoto from './ProfilePhoto'

function AboutMe () {
  return (
    <>
      <Divider 
        number='0.1'
        text='About Me'
      />
      <p className="secondary">Hello! I'm Juan Pablo, a software developer based in Málaga, ES.</p>
      <p className="secondary">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
      <p className="secondary">Trabajé como emprendedor.</p>
      <p className="secondary">Here are a few technologies I've been working with recently:</p>
      <Container>
        <Row className="secondary">
          <Col xs={6} md={4} lg={3}>
            <ul>
              <li>
                <p>JavaScript (ES6+)</p>
              </li>
              <li>
                <p>HTML & (S)CSS</p>
              </li>
              <li>
                <p>React</p>
              </li>
            </ul>          
          </Col>
          <Col xs={6} md={4} lg={3}>
            <ul>
              <li>
                <p>Node.js</p>
              </li>
              <li>
                <p>Base de datos</p>
              </li>
              <li>
                <p>otro</p>
              </li>
            </ul>          
          </Col>
        </Row>
      </Container>
      <ProfilePhoto />
    </>
  )
}

export default AboutMe
