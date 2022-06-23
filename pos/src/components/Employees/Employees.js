import { Table, Button } from 'react-bootstrap/';
import EmployeeForm from './EmployeeForm';
import EditForm from './EditForm';
import { connect } from 'react-redux';
function Employees(props) {
  if (props.employees.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>UserName</th>
              <th>Position</th>
              <th>Sales</th>
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
                <td>{employee.sales}</td>
                <td>
                  <EditForm id={employee.id} />
                </td>
                <td>
                  <Button> remove </Button>
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
  };
};
export default connect(mapStateToProps)(Employees);
