import { Table, Button } from 'react-bootstrap/';
import EmployeeForm from './EmployeeForm';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { removeUser } from '../../store/users';
function Employees(props) {
  const { signedInUsers, removeUser } = props;
  if (props.employees.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>UserName</th>
              <th>Position</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.username}</td>
                <td>{employee.role}</td>
                <td>
                  {signedInUsers.includes(employee.username) ? 'on' : 'off'}
                </td>
                <td>
                  {employee.role !== 'admin' && <EditForm id={employee.id} />}
                </td>
                <td>
                  {employee.role !== 'admin' && (
                    <Button
                      onClick={() => {
                        removeUser(employee.id);
                      }}
                    >
                      {' '}
                      remove{' '}
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <EmployeeForm />
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
