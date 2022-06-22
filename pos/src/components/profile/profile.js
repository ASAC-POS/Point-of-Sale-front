import './profile.scss';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

function Profile(props) {
  const navigate = useNavigate();
  console.log(props);

  const { store } = props;
  return (
    <>
      <div id='details'>
        <p> StoreName : {props.store.storename}</p>
        <p> user : {cookie.load('userData')?.username}</p>
        <p> role: {cookie.load('userData')?.role} </p>
      </div>
      <div className='profile'>
        <div
          class='card'
          onClick={() => {
            navigate(`/${encodeURIComponent(store?.storename)}/products`);
          }}
        >
          <div class='card-image'></div>
          <div className='card-text'>
            <br></br>
            <h2>PRODUCTS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
        </div>
        <div
          class='card'
          onClick={() => {
            navigate(`/${encodeURIComponent(store?.storename)}/employees`);
          }}
        >
          <div class='card-image card2'></div>
          <div className='card-text'>
            <br></br>
            <h2>EMPLOYEES</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
        </div>
        <div
          class='card'
          onClick={() => {
            navigate(`/${encodeURIComponent(store?.storename)}/receipts`);
          }}
        >
          <div class='card-image card3'></div>
          <div className='card-text'>
            <br></br>
            <h2>RECEIPTS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  store: state.store.store,
});
export default connect(mapStateToProps)(Profile);
