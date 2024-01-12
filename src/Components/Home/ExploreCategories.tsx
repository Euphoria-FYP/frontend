import React from "react";
import CategoriesCard from "./CategoriesCard";
import StyledButton from "../Shared/StyledButton";

const ExploreCategories = () => {
  
  return (
    <section className="flex flex-col justify-center items-center  mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          Discover Art Work
        </h2>
        <h1 className=" text-white font-semibold text-3xl md:text-4xl tracking-wider">
          Explore Categories
        </h1>
      </div>

      <div className=" flex justify-center items-center md:gap-7 mt-10 flex-wrap">
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </div>

      <StyledButton heading="All Categories"/>

    </section>
  );
};

export default ExploreCategories;
