import { Table } from 'react-bootstrap/';
import './receipts.scss';
import { connect } from 'react-redux';
//table of receipts
function Receipts(props) {
  const { receipts, employees } = props;
  console.log(employees);
  return (
    <div className='receipts-table'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee name</th>
            <th>total price</th>
            <th>method</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id}>
              <td>{receipt.id}</td>
              <td>
                {employees.find((user) => user.id === receipt.userID)?.username}
              </td>
              <td>{receipt.total}</td>
              <td>{receipt.PaymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
const mapStateToProps = (state) => ({
  receipts: state.receipts.receipts,
  employees: state.users.users,
});
export default connect(mapStateToProps)(Receipts);
