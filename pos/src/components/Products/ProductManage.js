import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import ProductsForm from './ProductsForm';
import EditProducts from './EditProducts';

function Product() {
  return (
    <>
      <>
        <ProductsForm />
      </>
      <>
        <CardGroup style={{ width: '65rem', height: '40rem' }}>
          <Card>
            <Card.Img
              variant='top'
              style={{ height: '220px' }}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFPTO7FxJ64kt3kDzkK2MSZKHEBR0n_dQiA&usqp=CAU'
            />

            <Card.Body>
              <Card.Title>jacket </Card.Title>

              <ListGroup.Item> Product Name: jacket </ListGroup.Item>
              <ListGroup.Item>Price : 100$</ListGroup.Item>
              <ListGroup.Item>Quantity : 20</ListGroup.Item>
              <ListGroup.Item>minQuantity : 40</ListGroup.Item>
            </Card.Body>
            <ListGroup className='list-group-flush'></ListGroup>
            <Card.Footer>
              <Button variant='primary'>Remove</Button>
              <EditProducts />
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant='top'
              style={{ height: '220px' }}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlEAPhN6C94gkUOUbKhMuuQeWRoYwWp9k0g&usqp=CAU'
            />

            <Card.Body>
              <Card.Title>T-shirt</Card.Title>

              <ListGroup.Item> Product Name: T-shirt </ListGroup.Item>
              <ListGroup.Item>Price : 50$</ListGroup.Item>
              <ListGroup.Item>Quantity : 10</ListGroup.Item>
              <ListGroup.Item>minQuantity : 35</ListGroup.Item>
            </Card.Body>
            <ListGroup className='list-group-flush'></ListGroup>
            <Card.Footer>
              <Button variant='primary'>Remove</Button>
              <EditProducts />
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant='top'
              style={{ height: '220px' }}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67jLCNl53c7trrWIPocGTsYMUxR6GrgeAwA&usqp=CAU'
            />

            <Card.Body>
              <Card.Title>Zara jeans</Card.Title>

              <ListGroup.Item> Product Name: jeans </ListGroup.Item>
              <ListGroup.Item>Price : 10$</ListGroup.Item>
              <ListGroup.Item>Quantity : 20</ListGroup.Item>
              <ListGroup.Item>minQuantity : 30</ListGroup.Item>
            </Card.Body>
            <ListGroup className='list-group-flush'></ListGroup>
            <Card.Footer>
              <Button variant='primary'>Remove</Button>
              <EditProducts />
            </Card.Footer>
          </Card>
        </CardGroup>
      </>
    </>
  );
}

export default Product;
