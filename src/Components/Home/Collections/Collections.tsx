import React from "react";
import CollectionCard from "./CollectionCard";
import { MyCollections } from "../../../data";

const Collections = () => {
  return (
    <>
      <section className=" w-[90%] flex flex-col justify-center items-center my-8 mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="uppercase  font-semibold text-xl text-[#B900FF]">
            Popular Creators
          </h2>
          <h1 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
            Top Collections
          </h1>
        </div>

        <div className=" flex justify-center items-center md:gap-5 mt-10 mb-5 flex-wrap">
          {MyCollections.map((item, i) => {
            return (
              <CollectionCard
                key={i}
                img1={item.img1}
                img2={item.img2}
                img3={item.img3}
                img4={item.img4}
                title={item.title}
                createdBy={item.createdBy}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Collections;
