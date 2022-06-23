
import './checkoutForm.scss'

export default function CheckoutForm(){
 return (

    <div className="checkoutForm">

  <header className="header">
    <h1>Checkout</h1>
  </header>
  <h3> Payment Method</h3>
  <div className='form-1'>
  <div className='form'>
  <label htmlFor="VisaPayment">  Visa Payment</label>
  <input type="radio" id="VisaPayment" name="PaymentMethod" value="VisaPayment"  />
  </div>
  <div className='form'>
  <label htmlFor="Cash">  Cash</label>
   <input type="radio" id="Cash" name="PaymentMethod" value="Cash" />
</div>
</div>

<div className='form-1'>

      <table>
        <tbody>
          <tr>
            <td>Amount</td>
            <td align="right">____</td>
          </tr>
          <tr>
            <td>Discount </td>
            <td align="right">____</td>
          </tr>
          <tr>
            <td>Price Total</td>
            <td align="right">____</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td align="right">____</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div>
      <button className="button button--full" type="submit"> checkout </button>
    </div>
    </div>


 )

}