import React from "react";

const CategoriesCard = () => {
  return (
    <>
      <div className="relative bg-slate-600 py-24 px-[82px] flex flex-col justify-center items-center mb-10 rounded-2xl">
        <h2 className=" text-white font-bold text-2xl text-center">ART</h2>
        <button className="absolute bottom-0 bg-white py-[13px] px-8 rounded-2xl mb-5 font-semibold text-[#B900FF]">
          See all Art
        </button>
      </div>
    </>
  );
};

export default CategoriesCard;
