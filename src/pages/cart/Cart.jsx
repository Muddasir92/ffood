import { useContext } from "react"
import "./Cart.css"
import { storeContext } from "../../context/storeContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const{cartItems, food_list,removeFromCart,getCartTotalAmount}=useContext(storeContext)
  const navigate=useNavigate();
  return (
<div className="cart">
  <div className="cart-Items">
    <div className="cartItemsTitle">
    <p>Items</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Price</p>
    <p>Remove</p>


    </div>
    <br />
    <hr />
 
    {food_list.map((item)=>{
      // console.log(item);
      if(cartItems[item._id]>0){
        return(
          <div className="cartItemsTitle cartItemItem" key={item._id} >
            <img src={item.image} alt="loading image" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>{item.price*cartItems[item._id]}</p>
            <p className="cross" onClick={()=>removeFromCart(item._id)}>x</p>


          </div>
        )
      }
      return null;
    })}

  </div>
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
        <p>${getCartTotalAmount()===0?0:2}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Total</p>
        <p>${getCartTotalAmount()===0?0:getCartTotalAmount()+2}</p>
      </div>
    <button onClick={()=>navigate( '/order')}>Proceed to Check Out</button>
    </div>
    <div className="cart-promo">
      <div className="promo-code">
        <p>Enter Promo Code If You Have</p>
        <div className="promoInput">
          <input type="text"  placeholder="Enter Promo code"/>
          <button>submit</button>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Cart
