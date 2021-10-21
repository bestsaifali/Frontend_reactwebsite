import React from "react";
import web from "../src/images/image1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name='Take your learning to the next-level'
        imgsrc={web}
        visit='/services'
        btname='Get-Started'
      />
    </>
  );
};

export default Home;
