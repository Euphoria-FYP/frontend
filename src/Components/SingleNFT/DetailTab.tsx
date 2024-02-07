import React from "react";
import DetailTabPropertyCard from "./DetailTabPropertyCard";

const DetailTab = ({ details }: any) => {
  console.log(details);
  return (
    <div className=" flex flex-col gap-5 mt-4">
      {/* OWNER */}
      <div className=" flex flex-col gap-[8px] group">
        <span className=" text-sm font-medium text-[#cfcfcf]">Owner</span>
        <div className=" flex items-center gap-4">
          <img
            className=" rounded-[50%] border-[3px] border-[#ffffff14] transition-all duration-200 ease-in-out transform-gpu group-hover:border-none group-hover:scale-105"
            src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
            alt=""
            width={50}
            height={50}
          />
          {/* {details?.map((item: any) => {
            return (
              <h6 className="text-xl font-medium transition-all duration-200 ease-in-out transform-gpu group-hover:text-[#00a3ff]">
                {item.name}
              </h6>
            );
          })} */}
          {
            <h6 className="text-xl font-medium transition-all duration-200 ease-in-out transform-gpu group-hover:text-[#00a3ff]">
              {details.name}
            </h6>
          }
        </div>
      </div>
      {/* PROPERTY */}
      <div className=" flex flex-col gap-[8px] group">
        <span className=" text-sm font-medium text-[#cfcfcf]">Property</span>
        <div className=" flex flex-wrap items-center gap-3">
          <DetailTabPropertyCard details={details} />
        </div>
      </div>
    </div>
  );
};

export default DetailTab;
