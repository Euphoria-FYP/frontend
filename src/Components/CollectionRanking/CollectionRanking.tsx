import React from "react";
import RankingTable from "./RankingTable";

const CollectionRanking = () => {
  return (
    <>
      <section className=" w-full md:w-[90%] h-full flex flex-col justify-center  gap-12 text-white mx-auto py-8">
        <h1 className=" text-[35px] md:text-[40px] text-white font-bold">
          Top Collections
        </h1>
        <div className=" w-full">
          <RankingTable />
        </div>
      </section>
    </>
  );
};

export default CollectionRanking;
