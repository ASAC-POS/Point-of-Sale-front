import { Table } from 'react-bootstrap/';
import EmployeeForm from './EmployeeForm';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { removeUser } from '../../store/users';
import { BsFillPersonXFill } from 'react-icons/bs';
import './Employee.css';
import '../Products/banner.scss';
function Employees(props) {
  const { signedInUsers, removeUser } = props;
  if (props.employees.length > 0) {
    return (
      <div>
        <div class='hpd hpd-basic'>
          <h4 class='hpd-title'>Employees Table</h4>
          <p class='hpd-desc'>
            freely add, edit, or remove an employees
          </p>

          <span class='hpd-btn'>
            <EmployeeForm />
          </span>
        </div>
        <div className='employee-table'>
          <Table striped bordered hover className='empTable'>
            <thead classsName='empHeader'>
              <tr>
                <th id='emphd1'>#</th>
                <th id='emphd2'>UserName</th>
                <th id='emphd3'>Position</th>
                <th id='emphd4'>Status</th>
                <th id='emphd4'></th>
              </tr>
            </thead>
            <tbody>
              {props.employees.map((employee) => (
                <tr key={employee.id} className='empRow'>
                  <td id='empRow1'>{employee.id}</td>
                  <td id='empRow2'>{employee.username}</td>
                  <td id='empRow3'>{employee.role}</td>
                  <td id='empRow4'>
                    {signedInUsers.includes(employee.username) ? 'on' : 'off'}
                  </td>
                  <td id='empRow5'>
                    <div className='icon-div'>
                      {employee.role !== 'admin' && (
                        <EditForm id={employee.id} />
                      )}

                      {employee.role !== 'admin' && (
                        <i
                          onClick={() => {
                            removeUser(employee.id);
                          }}
                        >
                          <BsFillPersonXFill />
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
