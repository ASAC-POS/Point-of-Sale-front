import { connect } from 'react-redux';
import { Table } from 'react-bootstrap/';
import './receipts.css';
import { AiOutlineUser } from 'react-icons/ai';
import UserInfo from '../profile/UserInfo/userInfo';

function Receipts(props) {
  const { receipts, employees } = props;
  return (
    <div className='reciepts-manage'>
      <UserInfo />
      <div class='hpd hpd-basic'>
        <h4 class='hpd-title'>Receipts</h4>
        <p class='hpd-desc'>keep track on your sales</p>
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
              <th id='hd3' className='center'>
                Total price
              </th>
              <th id='hd4' className='center'>
                Method
              </th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((receipt, i) => (
              <tr key={receipt.id} className='sRow'>
                <td id='Row1'>{i + 1}</td>
                <td id='Row2'>
                  {
                    employees.find((user) => user.id === receipt.userID)
                      ?.username
                  }
                </td>
                <td id='Row3' className='center'>
                  {receipt.total}
                </td>
                <td id='Row4' className='center'>
                  {receipt.PaymentMethod}
                </td>
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
