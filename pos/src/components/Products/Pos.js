import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';




import { connect } from 'react-redux';

function Pos(props) {
  return (
    <>
     
      <>
      <Card style={{ width: '18rem', height:'250px'}}>
        
  <Card.Body>
    <Card.Title>jeans</Card.Title>
    <Card.Text>
      nice jeans to wear 
    </Card.Text>
    <Card.Text>
     price
    </Card.Text>
    
    <Button variant="primary">Add </Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem', height:'250px'}}>
  <Card.Body>
    <Card.Title>jeans</Card.Title>
    <Card.Text>
      nice jeans to wear 
    </Card.Text>
    <Card.Text>
     price
    </Card.Text>
    
    <Button variant="primary">Add </Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', height:'250px'}}>
  <Card.Body>
    <Card.Title>jacket</Card.Title>
    <Card.Text>
      nice jacket to wear 
    </Card.Text>
    <Card.Text>
   price
    </Card.Text>
    <Button variant="primary">add</Button>
  </Card.Body>
</Card>
        <Button  variant='primary' style={{margin : '20px'}} >
         CHECK OUT
        </Button>

      </>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.store.products,
});



export default connect(mapStateToProps)(Pos);

