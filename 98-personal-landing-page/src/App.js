// Importing individual react components 
import React from 'react'; 
  
import Container from 'react-bootstrap/Container'; 
import Button from 'react-bootstrap/Button';

// Custom components
import ProfilePhoto from './ProfilePhoto'
import Divider from './Divider'

let dividerInfo = ['Get In Touch', 'Where I’ve Worked', "Some Things I’ve Built", "What’s Next?"]
let dividerInfo2 = [
  {
    'number': '0.1',
    'text': 'Get In Touch',
  },
  {
    'number': '0.2',
    'text': 'Where I’ve Worked',
  },
  {
    'number': '0.3',
    'text': 'Some Things I’ve Built',
  },
    {
    'number': '0.4',
    'text': 'What’s Next?',
  },
]

const App = () => ( 
  <Container>
    <p className="primary">Hi, my name is </p> 
    <h1 className="secondary"> Juan Pablo Devecchi Martinengo.</h1>
    <h1 className="secondary"> I build things for the web.</h1>
    <p>I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
     
    <Button variant="primary">Get In Touch</Button> 
    <Divider 
      number='0.1'
      text='Get In Touch'

    />
    <h4><spam className="primary">0.1</spam> Se puede borrar???</h4>
    <hr></hr>
    <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
    <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
    <p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
    <p>Here are a few technologies I've been working with recently:</p>
    <ul>
      <li>
        JavaScript (ES6+)
      </li>
      <li>
        HTML & (S)CSS
      </li>
      <li>
        React
      </li>
      <li>
        Node.js
      </li>
      <li>
        otro
      </li>
      <li>
        otro
      </li>
    </ul>
    <ProfilePhoto />
    <Divider />
    <h4><spam className="primary">0.2</spam> Where I’ve Worked</h4>
    <Divider />
    <h4><spam className="primary">0.3</spam> Some Things I’ve Built</h4>
    <Divider />
    <h4><spam className="primary">0.4</spam> What’s Next?</h4>
    <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
    <Button variant="danger">Get In Touch</Button> 
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
    <p>Designed & Built by Brittany Chiang</p>
</div>

    
  </Container> 
); 
  
export default App; 
