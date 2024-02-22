import React from "react";
import { CollectionsCardProps } from "../../../types/index";

const CollectionCard: React.FC<CollectionsCardProps> = ({
  img1,
  img2,
  img3,
  img4,
  createdBy,
  title,
  price,
}) => {
  return (
    <>
      <div className=" mx-auto my-3 text-white bg-slate-800 flex flex-col gap-4 rounded-lg h-60 w-64 px-3 py-3 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
        {/* images */}
        <div className=" h-[60%] grid grid-rows-2 grid-flow-col gap-2">
          <div className="col-span-2 gap-2">
            <div className=" grid grid-cols-2 h-full gap-2">
              <img
                src={img1}
                alt="collection1"
                className=" object-cover h-full rounded-lg"
              />
              <img
                src={img2}
                alt="collection2"
                className=" object-cover  h-full rounded-lg"
              />
            </div>
          </div>
          <div className="row-span-2 col-span-2 rounded-lg mt-1">
            <img
              src={img3}
              alt="collection3"
              className=" object-cover  w-full h-full rounded-lg"
            />
          </div>
          <div className="row-span-3 col-span-2 rounded-lg">
            <img
              src={img4}
              alt="collection4"
              className=" object-cover h-full rounded-lg"
            />
          </div>
        </div>
        {/* content */}
        <div className=" h-[40%] flex flex-col justify-center gap-1">
          {/* main heading */}
          <h4 className=" text-base font-medium">{title}</h4>
          {/* Created by & price */}
          <div className="flex justify-between items-center">
            {/* first div */}
            <div>
              <span className=" text-xs font-extralight">Created By</span>
              <h4 className=" text-[16px] leading-5 font-light">{createdBy}</h4>
            </div>
            {/* second div */}
            <div>
              <span className=" text-xs font-extralight">Floor</span>
              <h4 className=" text-[16px] leading-5 font-light">{price} ETH</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
