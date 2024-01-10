import React from "react";

const CategoriesCard = () => {
  return (
    <>
      <div className="relative bg-slate-600 py-24 px-[86px] flex flex-col justify-center items-center mb-10 rounded-2xl">
        <h2 className=" text-white font-bold text-2xl">ART</h2>
        <button className="absolute bottom-0 bg-white py-[15px] px-8 rounded-2xl mb-3 font-semibold text-[#B900FF]">
          See all Art
        </button>
      </div>
    </>
  );
};

export default CategoriesCard;
