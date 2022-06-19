import { Table, Button } from 'react-bootstrap/';
import EmployeeForm from './EmployeeForm';
import EditForm from './EditForm';
const employees = [
  {
    id: 1,
    name: 'John Doe',
    role: 'cashier',
    sales: '$0.00',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'admin',
    sales: '$0.00',
  },
  {
    id: 3,
    name: 'Jack Doe',
    role: 'cashier',
    sales: '$0.00',
  },
  {
    id: 4,
    name: 'John Doe',
    role: 'cashier',
    sales: '$0.00',
  },
  {
    id: 5,
    name: 'Jane Doe',
    role: 'admin',
    sales: '$0.00',
  },
  {
    id: 6,
    name: 'Jack Doe',
    role: 'cashier',
    sales: '$0.00',
  },
  {
    id: 7,
    name: 'John Doe',
    role: 'cashier',
    sales: '$0.00',
  },
  {
    id: 8,
    name: 'Jane Doe',
    role: 'admin',
    sales: '$0.00',
  },
  {
    id: 9,
    name: 'Jack Doe',
    role: 'cashier',
    sales: '$0.00',
  },
  {
    id: 10,
    name: 'John Doe',
    role: 'cashier',
    sales: '$0.00',
  },
];
function Employees(props) {
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
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.sales}</td>
              <td>
                <EditForm />
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
}

export default Employees;
