import { useState } from "react";
import Nav from "./components/Nav/Nav" ;
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/placeOrder";
import Login from "./components/login/Login";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <div className="App">
      {showlogin ? <Login setshowlogin={setshowlogin} /> : <></>}

      <Nav setshowlogin={setshowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
