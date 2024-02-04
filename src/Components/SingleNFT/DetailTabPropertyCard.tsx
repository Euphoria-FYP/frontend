import React from "react";

const DetailTabPropertyCard = () => {
  return (
    <div className=" flex flex-col justify-start items-start gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-4">
      <span className=" text-xs text-[#cfcfcf] uppercase">
        Contract Address
      </span>
      <span className=" text-sm tracking-[0.5px] text-white uppercase">
        0xd564...7b38
      </span>
    </div>
  );
};

export default DetailTabPropertyCard;
