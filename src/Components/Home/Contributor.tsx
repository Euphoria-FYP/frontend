import React from "react";
import ContributorCard from "./ContributorCard";

const Contributor = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase  font-semibold text-xl text-[#B900FF]">
          NFT Creators
        </h2>
        <h1 className=" text-white font-semibold text-4xl tracking-wider">
          Top Contributors
        </h1>
      </div>

        <div className=" flex justify-center items-center gap-10 mt-5 mb-5">
          <ContributorCard/>
          <ContributorCard/>
          <ContributorCard/>

        </div>


      <div>
        
      </div>
    </section>


  );
};

export default Contributor;
