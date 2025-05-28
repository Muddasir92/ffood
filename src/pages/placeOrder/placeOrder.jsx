import { useContext } from "react";
import "./PlaceOrder.css";
import { storeContext } from "../../context/storeContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { getCartTotalAmount } = useContext(storeContext);
  const navigate = useNavigate;
  return (
    <form className="placeOrder">
      <div className="placeOrderLeft">
        <p className="title">Delivery Information</p>
        <div className="multiFields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Phone number" />
        <br />
        <input type="text" placeholder="Street address" />
        <div className="multiFields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multiFields">
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Zip code" />
        </div>
      </div>
      <div className="placeOrderRight">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Charges</p>
              <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ${getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + 2}
              </p>
            </div>
            <button
              onClick={() => {
                const total=getCartTotalAmount();
                if (total > 0) {
                  navigate("/order");
                }
              }}
              disabled={getCartTotalAmount() === 0}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
