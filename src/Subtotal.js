import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal(0 items):<strong>0$</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This is order contains a gift
            </small>
          </>
        )}
        desimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
export default Subtotal;
