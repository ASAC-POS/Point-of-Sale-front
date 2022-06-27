import { Table } from 'react-bootstrap/';
import './receipts.css';
import {AiOutlineUser} from 'react-icons/ai'

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
];

//table of receipts
function Receipts(props) {
  return (
    <div className='receipts-table'>
      <Table striped bordered hover className="sTable">
        <thead classsName="sHeader">
          <tr>
            <th id="hd1">ID</th>
            <th id="hd2"> <AiOutlineUser/> Employee Name</th>
            <th id="hd3">Total price</th>
            <th id="hd4">Method</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt.id} className="sRow">
              <td id="Row1">{receipt.id}</td>
              <td id="Row2">{receipt.employeeName} </td>
              <td id="Row3">{receipt.total}</td>
              <td id="Row4">{receipt.method}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Receipts;
