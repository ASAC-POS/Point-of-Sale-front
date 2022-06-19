import { Table } from 'react-bootstrap/';
import './receipts.scss';
const receipts = [
  {
    id: 1,
    employeeName: 'John Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 2,
    employeeName: 'Jane Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 3,
    employeeName: 'Jack Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 4,
    employeeName: 'John Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 5,
    employeeName: 'Jane Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 6,
    employeeName: 'Jack Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 7,
    employeeName: 'John Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 8,
    employeeName: 'Jane Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 9,
    employeeName: 'Jack Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 10,
    employeeName: 'John Doe',
    total: '$0.00',
    method: 'cash',
  },
  {
    id: 11,
    employeeName: 'Jane Doe',
    total: '$0.00',
    method: 'cash',
  },
];

//table of receipts
function Receipts(props) {
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
              <td>{receipt.employeeName}</td>
              <td>{receipt.total}</td>
              <td>{receipt.method}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Receipts;
