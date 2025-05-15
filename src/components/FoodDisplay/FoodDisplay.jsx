import  { useContext } from "react";
import { storeContext } from "../../context/storeContext";
import FoodItem from "../FoodItem/FoodItem";
import "../FoodDisplay/FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  //   console.log(food_list);
  return (
    <div className="foodDisplay">
      <h2>Our top call items are near you</h2>
      <div className="displayList">
        {food_list.map((item, index) => {

          if ( category==="All" || category === item.category) {
            {
                // console.log(item.category);
              }
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
