import React from "react";
import collection1 from "../../../assets/images/collection/one.jpeg";
import collection2 from "../../../assets/images/collection/two.jpeg";
import collection3 from "../../../assets/images/collection/three.jpeg";
import collection4 from "../../../assets/images/collection/four.jpeg";

const CollectionCard = () => {
  return (
    <>
      <div className=" text-white bg-slate-800 flex flex-col gap-4 rounded-lg h-60 w-64 px-3 py-3">
        {/* image */}
        <div className=" h-[60%] grid grid-rows-2 grid-flow-col gap-2">
          <div className="col-span-2 gap-2">
            <div className=" grid grid-cols-2 h-full gap-2">
              <img
                src={collection1}
                alt="collection1"
                className=" object-cover h-full rounded-lg"
              />
              <img
                src={collection2}
                alt="collection2"
                className=" object-cover  h-full rounded-lg"
              />
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-lg mt-1">
            <img
              src={collection3}
              alt="collection3"
              className=" object-cover  w-full h-full rounded-lg"
            />
          </div>
          <div className="row-span-3 col-span-2 rounded-lg">
            <img
              src={collection4}
              alt="collection4"
              className=" object-cover h-full rounded-lg"
            />
          </div>
        </div>
        {/* content */}
        <div className=" h-[40%] flex flex-col justify-center gap-1">
          {/* main heading */}
          <h4 className=" text-base font-medium">Checks - VV Edition </h4>
          {/* Created by & price */}
          <div className="flex justify-between items-center">
            {/* first div */}
            <div>
              <span className=" text-xs font-extralight">Created By</span>
              <h3 className=" text-[15px] font-light">Ahsan Omerjee</h3>
            </div>
            {/* second div */}
            <div>
              <span className=" text-xs font-extralight">Floor</span>
              <h3 className=" text-[15px] font-light">0.48 ETH</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
