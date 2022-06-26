import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import ProductsForm from './ProductsForm';
import EditProducts from './EditProducts';

import { deleteProduct } from '../../store/products';
import { connect } from 'react-redux';
import Auth from '../../context/auth';

function Product(props) {
  console.log('hiiiiii', props);
  const { products } = props;

  
  return (
    <>
      <>
        <ProductsForm />
      </>
      <>
        <CardGroup>
          {products.map((product) => {
            return (
              <Card>
                {/* <Card.Img
                variant='top'
                style={{ height: '220px' }}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFPTO7FxJ64kt3kDzkK2MSZKHEBR0n_dQiA&usqp=CAU' /> */}

                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>

                  <ListGroup.Item>
                    {' '}
                    Product Name: {product.productName}{' '}
                  </ListGroup.Item>
                  <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                  <ListGroup.Item>Quantity: {product.quantity}</ListGroup.Item>
                  <ListGroup.Item>
                    minQuantity: {product.minQuantity}
                  </ListGroup.Item>
                </Card.Body>
                <ListGroup className='list-group-flush'></ListGroup>
                <Card.Footer>
                  <Auth capability='delete'>
                    <Button
                      variant='primary'
                      onClick={(item) => props.deleteProduct(product.id)}
                    >
                      Remove
                    </Button>
                  </Auth>
                  <EditProducts id={product.id} />
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
      </>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
