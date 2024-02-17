import React from "react";

type props = {
  heading: string;
  width: number;
  icon?: any;
  bgColor?: string;
  hoverEffect?: string;
};

const StyledButton = (props: props) => {
  return (
    <>
      <button
        className={` flex justify-center items-center text-center rounded-lg text-white py-3 font-semibold ${
          props.hoverEffect && props.hoverEffect
        }`}
        style={{
          // background: "linear-gradient(103deg, #E2257A 0%, #563BDA 100%)",
          background: props.bgColor && props.bgColor,
          width: `${props.width}px`,
        }}
      >
        {props.icon && <span className=" mr-2">{props.icon}</span>}{" "}
        {props.heading}
      </button>
    </>
  );
};

export default StyledButton;
