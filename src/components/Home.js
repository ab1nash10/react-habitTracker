import React from "react";
import Habits from "./Habits";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar name="Detailed view" />
      <Habits />
    </>
  );
};

export default Home;
