import React from "react";
import Lottie from "lottie-react";
import * as animationData from "../assets/animations/home.json";

const Context = () => {
  return (
    <div className="max-h-[80vh] overflow-hidden flex justify-center items-center">
      <Lottie
        animationData={animationData}
        style={{
          display: "block",
        }}
      />
    </div>
  );
};

export default Context;
