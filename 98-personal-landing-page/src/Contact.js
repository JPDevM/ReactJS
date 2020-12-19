import React from 'react'
import Divider from './Divider'



function Contac () {
  return (
    <>
      <Divider 
        number='0.4'
        text='What’s Next?'
      />
      <p className="secondary">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      {/* <Button variant="danger">Get In Touch</Button>  */}
      {/* Social media buttons */}
      <div>
        <ul>
          <li>
            Github
          </li>
          <li>
            instagram
          </li>
          <li>
            twitter
          </li>
          <li>
            LinkedInn
          </li>
        </ul>
        <p className="secondary">Designed & Built by Brittany Chiang</p>
      </div>
    </>
  )
}

export default Contac
