import React from "react";
import CategoriesCard from "../../Components/CategoriesCard";
import StyledButton from "../../Components/Shared/StyledButton";

const ExploreCategories = () => {
  
  return (
    <section className="flex flex-col justify-center items-center mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-normal text-xl text-[#B900FF]">
          Discover Art Work
        </h2>
        <h1 className=" text-white font-semibold text-4xl tracking-wider">
          Explore Categories
        </h1>
      </div>

      <div className=" flex justify-center items-center gap-5 mt-10">
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
