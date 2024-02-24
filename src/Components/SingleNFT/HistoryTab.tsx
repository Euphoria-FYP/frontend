import { History } from "@/types";
import React from "react";

const HistoryTab = ({ history }: { history: any }) => {
  console.log("hhh", history);
  return (
    <div className=" flex flex-col divide-y divide-[#ffffff14] h-[265px] overflow-y-scroll scroll-marketplace-dropdown pl-2 pr-3 md:pl-2 md:pr-4">
      {/* Bid Card */}
      {history.map((nft: any) => {
   nft.history.map((item: any, index: number) => {
    return (
      <div className="flex justify-between items-center group py-3" key={index}>
        <div className="flex items-center gap-4">
          <img
            className="rounded-[50%] border-[3px] border-[#ffffff14] transition-all duration-200 ease-in-out transform-gpu group-hover:border-none group-hover:scale-105"
            src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
            alt=""
            width={55}
            height={55}
          />
          <div className="flex flex-col items-start gap-[1px]">
            <h6 className="text-base font-medium text-[#00a3ff] capitalize transition-all duration-200 ease-in-out transform-gpu ">
              {item.name}
            </h6>
            <span className="text-sm text-[#cfcfcf]">
              {item.userName}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-lg font-medium tracking-wide text-[#cfcfcf]">
            {item.bidPrice} ETH
          </span>
          <span className="text-sm font-medium text-[#00a3ff]">
            = $128.36
          </span>
        </div>
      </div>
    );
  });
})}

    </div>
  );
};

export default HistoryTab;
