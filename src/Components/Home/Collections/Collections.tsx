import React, { useState, useEffect } from "react";
import CollectionCard from "./CollectionCard";
import { AllCollections } from "../../../data";
import StyledButton from "../../Shared/StyledButton";
import { NavLink } from "react-router-dom";
import { CollectionsData } from "@/types";

const Collections = () => {
  const [featuredCollection, setFeaturedCollection] = useState<
    CollectionsData[]
  >([]);

  useEffect(() => {
    setFeaturedCollection(AllCollections.filter((item) => item.featured));
  }, []);

  return (
    <>
      <section className=" w-[90%] flex flex-col justify-center items-center my-8 mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="uppercase font-semibold text-xl text-[#B900FF]">
            Popular Creators
          </h4>
          <h3 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider">
            Top Collections
          </h3>
        </div>

        <div className=" flex justify-center items-center md:gap-5 mt-10 mb-7 flex-wrap">
          {featuredCollection?.map((item, i) => {
            return <CollectionCard key={i} {...item} />;
          })}
        </div>
        <NavLink to={"/marketplace"}>
          <StyledButton
            heading="See All Collections"
            bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
            width={180}
          />
        </NavLink>
      </section>
    </>
  );
};

export default Collections;
