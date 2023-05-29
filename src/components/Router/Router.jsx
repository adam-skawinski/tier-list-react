import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/Home/Home";
import TierList from "../../page/TierList/TierList";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/tier-list-react" element={<Home />} />
      <Route path="/tierList" element={<TierList />} />
      <Route path="*" element={<h1>Not found...</h1>}/>
    </Routes>
  );
};

export default MyRouter;
 