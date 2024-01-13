import React from "react";

type props = {
  heading: string;
  width: number;
};

const StyledButton = (props: props) => {
  return (
    <>
      <button
        className={` text-center rounded text-white py-3 font-semibold`}
        style={{
          background: "linear-gradient(103deg, #E2257A 0%, #563BDA 100%)",
          width: `${props.width}px`,
        }}
      >
        {props.heading}
      </button>
    </>
  );
};

export default StyledButton;
