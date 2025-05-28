import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/placeOrder";
import LoginPop from "./components/login/LoginPop";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <div className="App">
      {showlogin ? <LoginPop setshowlogin={setshowlogin} /> : <></>}

      <Navbar setshowlogin={setshowlogin} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
