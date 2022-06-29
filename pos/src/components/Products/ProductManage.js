import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './banner.scss';
import ProductsForm from './ProductsForm';
import EditProducts from './EditProducts';
import './ProductManage.scss';
import { deleteProduct } from '../../store/products';
import { connect } from 'react-redux';
import Auth from '../../context/auth';
import UserInfo from '../profile/UserInfo/userInfo';

function Product(props) {
  const { products } = props;

  return (
    
    <div className='product-manage'>
      <div class='hpd hpd-basic'>
        <h4 class='hpd-title'>Products Management</h4>
        <p class='hpd-desc'>
          freely add, edit, or remove a product as you see fit
        </p>
        <UserInfo/>

      </div>
      <CardGroup className='products-card'>
        {products.map((product) => {
          return (
            <Card className='product'>
              <Card.Img
                variant='top'
                // style={{ height: '220px' }}
                src={product.image}
              />

              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>

                <ListGroup.Item>
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
              <Card.Footer>
                <Auth capability='delete'>
                  <Button
                    variant='primary'
                    onClick={() => props.deleteProduct(product.id)}
                  >
                    Remove
                  </Button>
                </Auth>
                <EditProducts id={product.id} />
              </Card.Footer>
            </Card>
          );
        })}
        <Auth capability='edit'>
          <ProductsForm />
        </Auth>
      </CardGroup>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
