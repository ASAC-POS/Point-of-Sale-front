import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap/';
import './InfoScreen.scss';
function InfoScreen(props) {
  const { items } = props;
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.employeeName}</td>
              <td>{item.total}</td>
              <td>{item.method}</td>
              <td>
                <Button>-</Button>
              </td>
              <td>
                <Button>remove all</Button>
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
export default connect(mapStateToProps)(InfoScreen);
