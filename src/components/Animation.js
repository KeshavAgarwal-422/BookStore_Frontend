import Lottie from "lottie-react";
import React from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "35%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
