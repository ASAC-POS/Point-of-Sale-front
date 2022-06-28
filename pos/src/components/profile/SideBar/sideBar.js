import "./sidebar.css";
import WhiteLogo from "../../../assets/Bayya3-removebg-preview.png";
import { FcNext } from "react-icons/fc";
import {BiExit} from "react-icons/bi"

export default function Sidebar() {
    
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img id="logo-img" src={WhiteLogo}></img>
          <h4 id="h44"> Bayya3</h4>
        </div>
        <div className="services">
{/* this for products*/}

<Auth capability='add'>
          <div id="box1" onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/products`);
            }} >
            <FcNext id="icon" />
            <div id="p1"> Products</div>
          </div>
          </Auth>
{/* this for Employees*/}
<Auth capability='delete'>
          <div id="box2"   onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/employees`);
            }} >
            <FcNext id="icon" />
            <div id="p2"> Employees</div>
          </div>
{/* this for Receipts*/}

          <div id="box3" onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/receipts`);
            }}>
            <FcNext id="icon" />
            <div id="p3"> Receipts</div>
          </div>
          </Auth>
{/* this for POS*/}
<Auth capability='sell'>
          <div id="box4"  onClick={() => {
              navigate(`/${encodeURIComponent(store?.storename)}/pos`);
            }}>
            <FcNext id="icon" />
            <div id="p4"> POS</div>
          </div>
          </Auth>
        </div>
        <div id ="signout">
            <div id ="box6">
            <BiExit id="icon"/>
        <div id ="textt"> Logout</div>
        </div>
        </div>
      </div>
    </>
  );
}
