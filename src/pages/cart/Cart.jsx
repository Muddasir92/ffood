import { useContext } from "react"
import "./Cart.css"
import { storeContext } from "../../context/storeContext"

const Cart = () => {
  const{cartItems, food_list}=useContext(storeContext)
  return (
<div className="cartmain">
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
 
    {food_list.map((item,index)=>{
      console.log(item);
      if(cartItems[item._id]>0){
        return(
          <div className="ggg" key="index" >
            <img src={item.image} alt="loading image" />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>{item.price*cartItems[item._id]}</p>
            <p>x</p>


          </div>
        )
      }
      return null;
    })}

  </div>
</div>
  )
}

export default Cart
