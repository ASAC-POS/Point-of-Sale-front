import React from "react";

import InfoScreen from "./InfoScreen";

import { connect } from "react-redux";
import ReceiptsForm from "../Receipts/ReceiptForm";
import products from "../../store/products";

function Pos(props) {
  console.log("alivvvvvvvvvvvvvve",props)
const {pro}
  useEffect(() => {
   console.log(products)
  }, [products]);

   return (
   <div>
   <section>
  </section>
         <InfoScreen />
         <ReceiptsForm />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.store.products,
});

export default connect(mapStateToProps)(Pos);
