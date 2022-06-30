import { Table } from 'react-bootstrap/';
import EmployeeForm from './EmployeeForm';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { removeUser } from '../../store/users';
import { BsFillPersonXFill } from 'react-icons/bs';
import UserInfo from '../profile/UserInfo/userInfo';
import '../Products/banner.scss';
function Employees(props) {
  const { signedInUsers, removeUser } = props;
  if (props.employees.length > 0) {
    return (
      <div className='reciepts-manage'>
        <UserInfo />
        <div class='hpd hpd-basic'>
          <h4 class='hpd-title'>
            Employees Table{' '}
            <span class='hpd-btn'>
              <EmployeeForm />
            </span>
          </h4>
          <p class='hpd-desc'>freely add, edit, or remove an employees</p>
        </div>
        <div className='receipts-table'>
          <Table striped bordered hover>
            <thead classsName='sTable'>
              <tr>
                <th id='emphd1'>#</th>
                <th id='emphd2'>UserName</th>
                <th id='emphd3' className='center'>
                  Position
                </th>
                <th id='emphd4' className='center'>
                  Status
                </th>
                <th className='center'>Sales</th>
                <th id='emphd4' className='center'>
                  Control
                </th>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee, i) => (
                <tr key={employee.id} className='sRow'>
                  <td id='empRow1'>{i + 1}</td>
                  {console.log(signedInUsers.includes(employee.username))}
                  <td id='empRow2'>{employee.username}</td>
                  <td id='empRow3' className='center'>
                    {employee.role}
                  </td>
                  <td id='empRow4' className='center'>
                    {signedInUsers.includes(employee.username)
                      ? 'online'
                      : 'offline'}
                  </td>
                  <td className='center'>
                    {employee.receipts.reduce((prev, next) => {
                      prev += next.total;
                      return prev;
                    }, 0)}
                    $
                  </td>
                  <td id='empRow5' className='center'>
                    <div className='icon-div'>
                      {employee.role !== 'admin' && (
                        <EditForm id={employee.id} employee={employee} />
                      )}

                      {employee.role !== 'admin' && (
                        <i
                          onClick={() => {
                            removeUser(employee.id);
                          }}
                        >
                          <BsFillPersonXFill color='#D61C4E' />
                        </i>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    employees: state.users.users,
    signedInUsers: state.popup.signedIn,
  };
};
const mapDispatchToProps = { removeUser };
export default connect(mapStateToProps, mapDispatchToProps)(Employees);
