import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import { CardGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import ProductsForm from "./ProductsForm";
import EditProducts from "./EditProducts";

import { deleteProduct } from "../../store/products";
import { connect } from "react-redux";
import Auth from "../../context/auth";

function Product(props) {
  const { products } = props;

  return (
    <>
      <>
        <Auth capability="edit">
          <ProductsForm />
        </Auth>
      </>
      <>
      <div>
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img src={product.img}/>
    

              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>Product Name: {product.productName}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Card.Text>Description: {product.description}</Card.Text>
                <Card.Text>Quantity: {product.quantity}</Card.Text>
                <Card.Text>minQuantity: {product.minQuantity}</Card.Text>
                <Card.Footer>
                  <Auth capability="delete">
                    <Button
                      variant="red"
                      style={{ margin: "5%" }}
                      onClick={() => props.deleteProduct(product.id)}
                    >
                      Remove
                    </Button>
                  </Auth>
                  <EditProducts id={product.id} />
                </Card.Footer>
              </Card.Body>
            </Card>
          );
        })}
         </div>
      </>
    </>
   
  );
}



const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
