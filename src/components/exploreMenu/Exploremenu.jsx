
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="explore_menu" id="menu">
      <h1 className="menu-heading">Explore Our Menu</h1>

      <p className="exploreMenu_text">
        Explore our menu and enjoy a variety of frozen foods, made with
        top-quality ingredients and expert care. Satisfy your cravings with our
        delicious, convenient options, one frozen dish at a time.
      </p>
      <div className="exploreItems">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((pre) =>
                  pre === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menuItem"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
