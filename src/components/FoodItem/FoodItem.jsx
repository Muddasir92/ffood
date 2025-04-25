import React, { useContext} from "react";
import { assets } from "../../assets/assets";
import "../FoodItem/FoodItem.css";
import { storeContext } from "../../context/storeContext";

const FoodItem = ({id,name,price,category,image,description}) => {
//   console.log(props);
 
  const {addToCart, removeFromCart, cartItems} = useContext(storeContext);
  return (
    <div className="foodItem">
      <div className="FImagecontain">
        <img className="FImage" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            alt=""
          />
        ) : (
          <div className="Fooditem_counter">
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="foodinfo">
        <div className="rating_Name">
          <div className="">
            <p className="Fname">{name}</p>
          </div>
          <div className="">
            <img className="foodRating" src={assets.rating_starts} alt="" />
          </div>
        </div>
        <div className="desc_price">
          <p className="Fdescription">{description}</p>
          <p className="Fprice">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
