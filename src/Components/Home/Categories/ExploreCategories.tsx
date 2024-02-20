import React from "react";
import StyledButton from "../../Shared/StyledButton";
import CategoriesCard from "./CategoriesCard";
import { Categories } from "../../../data";
import { NavLink } from "react-router-dom";

const ExploreCategories = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-8 mb-12">
      <div className="flex flex-col justify-center items-center gap-3">
        <h4 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          Discover Art Work
        </h4>
        <h3 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider">
          Explore Categories
        </h3>
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
      
      <NavLink to={'/marketplace'}>
      <StyledButton
        heading="All Categories"
        bgColor="linear-gradient(103deg, #E4257A 0%, #563BDA 100%)"
        width={160}
        />
        </NavLink>
    </section>
  );
};

export default ExploreCategories;
