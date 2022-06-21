import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import jala from '../../assets/img/jala.jpg';
import leen from '../../assets/img/leen.jpg';
import manal from '../../assets/img/manal.jpg';
import mohammad from '../../assets/img/mohammad.jpg';
import neeven from '../../assets/img/neeven.jpg';





function About() {
  return (
    <div className='About'>
      <div className='aboutCard'>
        
      <CardGroup>
  <Card>
    <Card.Img variant="top" src={jala} style={{ width: '265px', height: '200px' }} />
    <Card.Body>
   
      <Card.Title>Jalal Hasan</Card.Title> <br></br>
      <Card.Text>
      Javascript full-stack web developer with an undying passion to learn the latest technologies in the industry.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={leen} style={{ width: '265px', height: '200px' }} />
    <Card.Body>
      <Card.Title>Leen Ahmad</Card.Title> <br></br>
      <Card.Text>
      software engineering student at ASAC.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={manal}   style={{ width: '265px', height: '200px' }} />
    <Card.Body>
      <Card.Title>Manal Al-bahar</Card.Title> <br></br>
      <Card.Text>
      Electrical Engineer. with a passion for learning programing.
      </Card.Text>
    </Card.Body>
   
  </Card>

  <Card>
    <Card.Img variant="top" src={mohammad}  style={{ width: '265px', height: '200px' }}/>
    <Card.Body>
      <Card.Title>Mohammad Salameh</Card.Title> <br></br>
      <Card.Text>
      Mohammad Salameh, 26 years old with a mechanical engineering degree from JUST. Looking for my niche.
       Software developer under construction
      </Card.Text>
    </Card.Body>
     </Card>
     <Card>
    <Card.Img variant="top" src={neeven} style={{ width: '265px', height: '200px' }}/> 
    <Card.Body>
      <Card.Title>Neveen Abu-romman</Card.Title> <br></br>
      <Card.Text>
      a junior software development
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      </div>
    </div>
  );
}

export default About;


