import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap/';
import './InfoScreen.scss';
import {
  detuctQuantity,
  removeFromCheckOut,
} from '../../store/checkout-reducer';
import { incrementProduct, returnAll } from '../../store/products';
function InfoScreen(props) {
  const {
    items,
    detuctQuantity,
    removeFromCheckOut,
    incrementProduct,
    returnAll,
  } = props;
  return (
    <div className='info-screen'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>product name</th>
            <th>quantity</th>
            <th>price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.productID}>
              <td>{item.productID}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}$</td>
              <td>
                <Button
                  onClick={() => {
                    detuctQuantity(item.productID);
                    incrementProduct(item);
                  }}
                >
                  -
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    removeFromCheckOut(item.productID);
                    returnAll(item);
                  }}
                >
                  remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
const mapStateToProps = (state) => ({
  items: state.checkout.items,
});
const mapDispatchToProps = {
  detuctQuantity,
  removeFromCheckOut,
  incrementProduct,
  returnAll,
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen);
