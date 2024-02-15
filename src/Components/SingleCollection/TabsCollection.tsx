import React from "react";
import { useState, useEffect } from "react";

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
    title: "Offer",
  },
  {
    id: 3,
    title: "History",
  },
];

const TabsCollection = () => {
  const [currentTab, setCurrentTab] = useState<TabButtonType>(tabButtons[1]);
  return (
    <>
      <div>
        <div className=" flex gap-6 rounded-[10px] p-2 w-1/3 text-gray-400 border-gray-400 m-10">
          {tabButtons.map((item) => (
            <button
              key={item.id}
              className={` flex-1 h-12 rounded-[10px] 
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

        <hr className="border-t border-gray-300 m-12 mt-3" />
      </div>
    </>
  );
};

export default TabsCollection;
