import React from "react";

const DetailTab = () => {
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
          <h6 className="text-xl font-medium transition-all duration-200 ease-in-out transform-gpu group-hover:text-[#00a3ff]">
            Brodband
          </h6>
        </div>
      </div>
      {/* PROPERTY */}
      <div className=" flex flex-col gap-[8px] group">
        <span className=" text-sm font-medium text-[#cfcfcf]">Property</span>
        <div className=" flex flex-wrap items-center gap-3">
          <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
            <span className=" text-xs text-[#cfcfcf] uppercase">
              Contract Address
            </span>
            <span className=" text-sm tracking-[0.5px] text-white uppercase">
              0xd564...7b38
            </span>
          </div>
          <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
            <span className=" text-xs text-[#cfcfcf] uppercase">Token ID</span>
            <span className=" text-sm tracking-[0.5px] text-white uppercase">
              3740
            </span>
          </div>
          <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
            <span className=" text-xs text-[#cfcfcf] uppercase">
              Token Standard
            </span>
            <span className=" text-sm tracking-[0.5px] text-white uppercase">
              ERC-721
            </span>
          </div>
          <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
            <span className=" text-xs text-[#cfcfcf] uppercase">Chain</span>
            <span className=" text-sm tracking-[0.5px] text-white uppercase">
              Ethereum
            </span>
          </div>
          <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
            <span className=" text-xs text-[#cfcfcf] uppercase">
              Last Updated
            </span>
            <span className=" text-sm tracking-[0.5px] text-white uppercase">
              1 month ago
            </span>
          </div>
          <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
            <span className=" text-xs text-[#cfcfcf] uppercase">
              Creator Earnings
            </span>
            <span className=" text-sm tracking-[0.5px] text-white uppercase">
              5%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTab;
