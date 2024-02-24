import React from "react";
import { useState, useEffect } from "react";
import MarketPlaceCard from "../Shared/MarketPlaceCard";
import HistoryTab from "../SingleNFT/HistoryTab";
import { Listings } from "@/types";

interface TabButtonType {
  id: number;
  title: string;
}

const tabButtons = [
  {
    id: 1,
    title: "Listing",
  },
  {
    id: 2,
    title: "History",
  },
];

const TabsCollection = ({
  sidebarOpen,
  NFTs,
}: {
  sidebarOpen: boolean;
  NFTs: Listings[];
}) => {
  const [currentTab, setCurrentTab] = useState<TabButtonType>(tabButtons[0]);

  useEffect(() => {
    const filteredHistory = NFTs.map((item) => item.history)
    console.log("filtered",filteredHistory);
  }, []);

  return (
    <>
      <div>
        <div className=" flex gap-4  p-2 md:w-1/3 w-1/2 text-gray-400 px-5 md:px-8">
          {tabButtons.map((item) => (
            <button
              key={item.id}
              className={`md:h-9 h-8 md:w-20 w-40 rounded-lg text-xs md:text-sm
                transition-all duration-300 transform-gpu  ${
                  currentTab.id === item.id
                    ? "bg-[#212e48] text-stone-200"
                    : "hover:border-white border border-[#9c9c9cb4]"
                }`}
              onClick={() => setCurrentTab(tabButtons[item.id - 1])}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="px-5 md:px-8 mt-3 mb-5">
          <hr className="border-t border-gray-300" />
        </div>

        {currentTab.title === "Listing" && (
          <div
            className={` flex flex-wrap justify-start ${
              sidebarOpen ? `gap-8` : `gap-6`
            } pb-12 pt-3 overflow-y-auto whitespace-nowrap scrollbarHide transition-all duration-300 ${
              sidebarOpen ? `px-6` : `px-8`
            }`}
          >
            {NFTs &&
              NFTs.map((item, i) => {
                return <MarketPlaceCard key={1} {...item} />;
              })}
          </div>
        )}

        {currentTab.title === "History" && (
          <div className={`w-full md:px-8 px-5`}>
            <HistoryTab history={NFTs} />
          </div>
        )}
      </div>
    </>
  );
};

export default TabsCollection;
