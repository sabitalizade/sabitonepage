import React from "react";
import "../css/Context.css";
import Lottie from "lottie-react";
import * as animationData from "../assets/animations/home.json";

const Context = () => {
  return (
    <div className="Context">
      <Lottie
        animationData={animationData}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Context;
