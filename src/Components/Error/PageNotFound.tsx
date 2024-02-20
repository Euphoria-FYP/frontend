import React from "react";
import StyledButton from "../Shared/StyledButton";

const PageNotFound = () => {
  return (
    <>
      <div className="text-center p-20 flex flex-col justify-center items-center">
        <h3 className=" bg-text-image text-[200px] font-bold ">Oops!</h3>
        <h1 className=" text-black text-[30px] font-medium"> 404 - PAGE NOT FOUND </h1>
        <p className=" text-black mb-10">The page you are looking for might have been removed <br/> had its name changed or is temporarily unavailable.</p>
        <StyledButton
        heading="GO TO HOMEPAGE"
        bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
        width={160}
        />
      </div>
    </>
  );
};

export default PageNotFound;
