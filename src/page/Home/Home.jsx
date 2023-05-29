import React from "react";
import Header from "../../components/Header/Header";
import ButtonsHomeList from "../../components/ButtonsList/ButtonsHomeList/ButtonsHomeList";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <ButtonsHomeList />
    </div>
  );
};

export default Home;
