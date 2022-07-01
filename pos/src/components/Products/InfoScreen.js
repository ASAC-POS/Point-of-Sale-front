import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap/';
import './InfoScreen.scss';
import {
  detuctQuantity,
  removeFromCheckOut,
} from '../../store/checkout-reducer';
import { incrementProduct, returnAll } from '../../store/products';
import { BsTrash } from 'react-icons/bs';
import ReceiptsForm from '../Receipts/ReceiptForm';


function InfoScreen(props) {
  const {
    items,
    detuctQuantity,
    removeFromCheckOut,
    incrementProduct,
    returnAll,
    checkout
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
            
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}$</td>
              <td className='controls'> 
                <Button
                  style={{backgroundColor: '#F77E21'}}
                  onClick={() => {
                    detuctQuantity(item.productID);
                    incrementProduct(item);
                  }}
                >
                  -
                </Button>
             
                <Button
                  variant='danger'
                  onClick={() => {
                    removeFromCheckOut(item.productID);
                    returnAll(item);
                  }}
                >
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {checkout.total > 0 && (
            <span class='hpd-btn pos'>
              <ReceiptsForm />
            </span>
          )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  items: state.checkout.items,
  checkout: state.checkout,
});
const mapDispatchToProps = {
  detuctQuantity,
  removeFromCheckOut,
  incrementProduct,
  returnAll,
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoScreen);
