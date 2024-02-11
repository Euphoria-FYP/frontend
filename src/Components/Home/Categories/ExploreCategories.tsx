import React from "react";
import StyledButton from "../../Shared/StyledButton";
import CategoriesCard from "./CategoriesCard";
import { Categories } from "../../../data";

const ExploreCategories = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-16 mb-12">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          Discover Art Work
        </h2>
        <h1 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
          Explore Categories
        </h1>
      </div>

      <div className=" flex justify-center items-center md:gap-7 mt-10 flex-wrap">
        {Categories.map((item, index) => (
          <CategoriesCard
            key={index}
            title={item.title}
            cardimage={item.cardimage}
          />
        ))}
      </div>

      <StyledButton
        heading="All Categories"
        bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
        width={180}
      />
    </section>
  );
};

export default ExploreCategories;
