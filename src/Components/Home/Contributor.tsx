import React from "react";
import ContributorCard from "./ContributorCard";
import { cards } from "../../data";

const Contributor = () => {
  return (
    <section className="flex flex-col justify-center items-center my-5 mx-auto mt-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase  font-semibold text-xl text-[#B900FF]">
          NFT Creators
        </h2>
        <h1 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
          Top Contributors
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 m-9">
        {cards.map((card, index) => (
          <ContributorCard
            key={index}
            name={card.name}
            ethAmount={card.ethAmount}
          />
        ))}
      </div>

      <div></div>
    </section>
  );
};

export default Contributor;
