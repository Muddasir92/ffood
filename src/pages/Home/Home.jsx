import React from "react";
import "../Home/Home.css";
import Header from "../../components/header/header";
import Exploremenu from "../../components/exploreMenu/Exploremenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Footer from "../../components/Footer/Footer";
import AppDownload from "../../components/appDownload/appDownload";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div>
        <div className="home">
          <Header />
          <Exploremenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
          <AppDownload/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
