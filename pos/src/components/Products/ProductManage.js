import Card from "react-bootstrap/Card";
import {BsFillArchiveFill , BsPencil} from "react-icons/bs"
import Button from "react-bootstrap/Button";
import "./banner.scss";
import ProductsForm from "./ProductsForm";
import EditProducts from "./EditProducts";
import "./ProductManage.scss";
import { deleteProduct } from "../../store/products";
import { connect } from "react-redux";
import Auth from "../../context/auth";

function Product(props) {
  const { products } = props;

  return (
    <div className="product-manage">
      <div class="hpd hpd-basic">
        <h4 class="hpd-title">Products Management</h4>
        <p class="hpd-desc">
          freely add, edit, or remove a product as you see fit
        </p>
        <div className="add-product">
        {/* <Card style={{ width: "30%", hight: "60%" }}> */}
        <Button variant="primary">
          <Auth capability="edit">
            <ProductsForm />
          </Auth>
          </Button>
        {/* </Card> */}
      </div>
      </div>
      <div className="add-product">
       
      </div>
      <></>
      <div className="products-card">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} className="product">
              <Card.Img
                variant="top"
                // style={{ height: '220px' }}
                src={product.image}
              />

              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>Product Name: {product.productName}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Card.Text>Description: {product.description}</Card.Text>
                <Card.Text>Quantity: {product.quantity}</Card.Text>
                <Card.Text>minQuantity: {product.minQuantity}</Card.Text>
                <Card.Footer className="product-button">
                  <Auth capability="delete">

                    <Button
                      variant="danger" 
                      style={{ margin: "5%"}}
                      onClick={() => props.deleteProduct(product.id)}
                    >
                      <div className="remove">
                      <BsFillArchiveFill/>
                      </div>
                    
                    </Button>
                  </Auth>

                  <EditProducts id={product.id} />
                </Card.Footer>
              </Card.Body>
            </Card>
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
