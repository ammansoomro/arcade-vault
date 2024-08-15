import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import { useState } from "react";
const Home = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
