import React, { useState } from "react";

const DetailTabPropertyCard = ({ details }: any) => {
  const[data,setData]=useState<any>(details.details[0])
  console.log(details);
  console.log(data);
  return (
        <>
          <div
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Contract Address
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {data.contractAddress}
            </span>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">Token ID</span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {data.tokenId}
            </span>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Token Standard
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {data.tokenStandard}
            </span>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">Chain</span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {data.chain}
            </span>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Last Updated
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {data.lastUpdated}
            </span>
          </div>
          <div
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Creator Earnings
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {data.creatorEarnings}
            </span>
          </div>
    </>
  );
};

export default DetailTabPropertyCard;
