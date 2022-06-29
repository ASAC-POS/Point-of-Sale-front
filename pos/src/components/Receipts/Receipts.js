import { connect } from 'react-redux';
import { Table } from 'react-bootstrap/';
import './receipts.css';
import { AiOutlineUser } from 'react-icons/ai';
import UserInfo from '../profile/UserInfo/userInfo'

function Receipts(props) {
  const { receipts, employees } = props;
  console.log(employees);
  return (
    <div>
      <div class='hpd hpd-basic'>
        <h4 class='hpd-title'>Receipts</h4>
        <p class='hpd-desc'>keep track on your sales</p>
        <UserInfo/>

      </div>
      <div className='receipts-table'>
        <Table striped bordered hover className='sTable'>
          <thead classsName='sHeader'>
            <tr>
              <th id='hd1'>ID</th>
              <th id='hd2'>
                {' '}
                <AiOutlineUser /> Employee Name
              </th>
              <th id='hd3'>Total price</th>
              <th id='hd4'>Method</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt) => (
              <tr key={receipt.id} className='sRow'>
                <td id='Row1'>{receipt.id}</td>
                <td id='Row2'>
                  {
                    employees.find((user) => user.id === receipt.userID)
                      ?.username
                  }
                </td>
                <td id='Row3'>{receipt.total}</td>
                <td id='Row4'>{receipt.PaymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  receipts: state.receipts.receipts,
  employees: state.users.users,
});
export default connect(mapStateToProps)(Receipts);
