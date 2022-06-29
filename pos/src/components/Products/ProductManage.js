import Card from 'react-bootstrap/Card';
import { BsFillArchiveFill } from 'react-icons/bs';
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
        <span class='hpd-btn'>
          <Auth capability='edit'>
            <ProductsForm />
          </Auth>
        </span>
        <UserInfo />
      </div>
      <div className='add-product'></div>
      <div className='add-product'></div>
      <></>
      <div className='products-card'>
        {console.log(products)}
        {products.map((product) => {
          return (
            <>
              <Card className='product'>
                <Card.Img src={product.imgURL} />

                <Card.Body className='details'>
                  <div className='top-part'>
                    <Card.Title className='card-title'>
                      {product.productName}
                    </Card.Title>
                    <Card.Text>{product.price}$</Card.Text>
                  </div>

                  <div className='card-description'>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                    <Card.Text>minQuantity: {product.minQuantity}</Card.Text>
                  </div>
                  <Card.Footer className='product-button'>
                    <Auth capability='delete'>
                      <Button
                        variant='danger'
                        style={{ margin: '5%' }}
                        onClick={() => props.deleteProduct(product.id)}
                      >
                        <div className='remove'>
                          <BsFillArchiveFill />
                        </div>
                      </Button>
                    </Auth>

                    <EditProducts id={product.id} />
                  </Card.Footer>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
