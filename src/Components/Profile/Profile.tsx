import React, { useState } from "react";
import StyledButton from "../Shared/StyledButton";
import { FaCopy } from "react-icons/fa";
import { MarketPlaceItem } from "../../types/index";
import { marketPlaceData } from "../../data";
import MarketPlaceCard from "../Shared/MarketPlaceCard";

interface TabButtonType {
  id: number;
  title: string;
}

const tabButtons = [
  {
    id: 1,
    title: "Create NFT",
  },
  {
    id: 2,
    title: "On Sale",
  },
  {
    id: 3,
    title: "Owned",
  },
  {
    id: 4,
    title: "Favourites",
  },
];

const Profile = () => {
  const [currentTab, setCurrentTab] = useState<TabButtonType>(tabButtons[1]);
  const [filterData, setFilterData] =
    useState<MarketPlaceItem[]>(marketPlaceData);
  return (
    <>
      <section className=" w-[90%] h-full flex flex-col justify-center gap-12 text-white mx-auto py-10">
        {/* header */}
        <div className=" bg-[url('https://html.ditsolution.net/nftpro/assets/images/resource/author-bg.png')] bg-cover bg-center pt-10 pb-28 w-full h-[350px] rounded-xl">
          {/* profile photo */}
          <div className="float-left mr-5 relative flex justify-center items-center gap-5 px-8 z-10 mt-3">
            <img
              className=" rounded-lg"
              src="https://html.ditsolution.net/nftpro/assets/images/resource/profile.jpg"
              alt=""
            />
            <div>
              <h4 className=" text-xl font-bold">Davis Jhon</h4>
              <p>@davis.jhon</p>

              <div className=" flex gap-2 mt-5">
                <StyledButton heading="Follow" bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)" width={120} />

                <div
                  className=" flex justify-center items-center gap-2 p-3 rounded"
                  style={{
                    background:
                      "linear-gradient(103deg, #E2257A 0%, #563BDA 100%)",
                  }}
                >
                  <span>0x731F9FBF4163D </span>
                  <FaCopy className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex gap-10 absolute left-[48%] -bottom-1 text-lg font-semibold">
              <a className=" cursor-pointer" href="#">
                About
              </a>
              <a
                className=" cursor-pointer flex justify-center items-center"
                href="#"
              >
                Followers
                <span className=" bg-[#518EFF] text-xs py-[1px] px-[5px] rounded ml-2">
                  200
                </span>
              </a>
              <a
                className=" cursor-pointer flex justify-center items-center"
                href="#"
              >
                Following
                <span className=" bg-[#518EFF] text-xs py-[1px] px-[5px] rounded ml-2">
                  226
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#212e48] h-[50%] py-10 text-white  relative -top-[125px] rounded-bl-xl rounded-br-xl"></div>

        <div className=" flex gap-2 rounded-[7px] border border-[#ffffff14] bg-[#24243557] p-2 -mt-32">
          {tabButtons.map((item) => (
            <button
              key={item.id}
              className={` flex-1 h-12  rounded-[5px] 
                transition-all duration-300 transform-gpu  ${
                  currentTab.id === item.id
                    ? "bg-[#212e48]"
                    : " hover:border-white border border-dashed border-[#ffffff14]"
                }`}
              onClick={() => setCurrentTab(tabButtons[item.id - 1])}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap justify-start gap-8
            pb-12 overflow-y-auto whitespace-nowrap scrollbarHide"
        >
          {filterData
            ? filterData.map((card: any, index: number) =>
                card.nft.map((nft: any) => {
                  return (
                    <MarketPlaceCard
                      key={index}
                      id={nft.id}
                      marketplace={nft.marketplace}
                      name={nft.name}
                      userName={nft.userName}
                      currentBid={nft.currentBid}
                      inDollars={nft.inDollars}
                    />
                  );
                })
              )
            : null}
        </div>
      </section>
    </>
  );
};

export default Profile;
