import "./Checkout.css";
import { Outlet } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div>
      <Outlet />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h1 className="checkout__title">Your Shoping Basket</h1>
            <CheckoutProduct
              id={1}
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
              price={11.3}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
