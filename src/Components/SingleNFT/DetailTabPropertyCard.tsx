import React from "react";

const DetailTabPropertyCard = ({ details }: any) => {
  console.log(details);
  return (
    <>
      {details.map((item: any, index: number) => (
        <>
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Contract Address
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {item.contractAddress}
            </span>
          </div>
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">Token ID</span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {item.tokenId}
            </span>
          </div>
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Token Standard
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {item.tokenStandard}
            </span>
          </div>
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">Chain</span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {item.chain}
            </span>
          </div>
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Last Updated
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {item.lastUpdated}
            </span>
          </div>
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4"
          >
            <span className="text-xs text-[#cfcfcf] uppercase">
              Creator Earnings
            </span>
            <span className="text-sm tracking-[0.5px] text-white uppercase">
              {item.creatorEarnings}
            </span>
          </div>
        </>
      ))}
    </>
  );
};

export default DetailTabPropertyCard;
