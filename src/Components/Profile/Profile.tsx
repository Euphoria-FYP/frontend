import React, { useState } from "react";
import StyledButton from "../Shared/StyledButton";
import { FaCopy } from "react-icons/fa";
import { MarketPlaceItem } from "../../types/index";
import { marketPlaceData } from "../../data";
import MarketPlaceCard from "../Shared/MarketPlaceCard";

// IMAGES

import collection1 from "../../assets/images/collection/c1.jpeg";
import collection2 from "../../assets/images/collection/c2.jpeg";
import collection3 from "../../assets/images/collection/c3.jpeg";
import collection4 from "../../assets/images/collection/c4.jpeg";
import collection5 from "../../assets/images/collection/c5.jpg";
import collection6 from "../../assets/images/collection/c6.jpg";
import collection7 from "../../assets/images/collection/c7.jpg";
import collection8 from "../../assets/images/collection/c8.jpg";
import collection9 from "../../assets/images/collection/c9.jpg";
import collection10 from "../../assets/images/collection/c10.png";
import collection11 from "../../assets/images/collection/c11.jpg";
import collection12 from "../../assets/images/collection/c12.png";

interface TabButtonType {
  id: number;
  title: string;
}

const tabButtons = [
  {
    id: 1,
    title: "Collection",
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
      <section className=" w-[90%] h-full flex flex-col justify-center gap-8 text-white mx-auto py-10">
        {/* HEADER */}
        <div className="w-full h-[350px] rounded-xl ">
          <div className="  h-[75%] bg-[url('https://html.ditsolution.net/nftpro/assets/images/resource/author-bg.png')] rounded-tl-xl rounded-tr-xl">
            <div className=" flex justify-start items-start gap-5 px-10 pt-24">
              <img
                className=" relative rounded-[50%] border-4 border-white w-52 h-52 z-20"
                src="https://html.ditsolution.net/nftpro/assets/images/resource/profile.jpg"
                alt=""
              />
              <div className=" flex flex-col pt-8">
                <h3 className=" text-xl font-bold">Davis Jhon</h3>
                <p>@davis.jhon</p>

                <div className=" flex gap-2 mt-4">
                  <button className="profilePageBtn"> Follow</button>
                  <button className=" group flex justify-center items-center gap-2 rounded-[5px]  pl-5 bg-[#444882]">
                    <span className=" py-2">0x731F9FBF4163D </span>
                    <div
                      className="profilePageBtn h-full flex items-center justify-center"
                      style={{
                        padding: "0px 8px",
                        display: "flex",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      <FaCopy className="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-end px-16 items-center gap-6 bg-[#2A273E] h-[20%] text-white rounded-bl-xl rounded-br-xl">
            <button className=" cursor-pointer">Create NFT</button>
            <button className=" cursor-pointer">About</button>
            <button className=" cursor-pointer flex justify-center items-center">
              Followers
              <span className=" bg-[#518EFF] text-xs py-[1px] px-[5px] rounded ml-2">
                200
              </span>
            </button>
            <button className=" cursor-pointer flex justify-center items-center">
              Following
              <span className=" bg-[#518EFF] text-xs py-[1px] px-[5px] rounded ml-2">
                200
              </span>
            </button>
          </div>
        </div>
        {/* BODY */}
        <div className="w-full flex gap-5">
          <div className=" w-[75%] flex flex-col gap-5">
            <div className=" flex gap-2 rounded-[7px] border border-[#ffffff14] bg-[#2A273E] p-2 ">
              {tabButtons.map((item) => (
                <button
                  key={item.id}
                  className={` flex-1 h-10 text-sm font-light rounded-[6px] 
                transition-all duration-300 transform-gpu  ${
                  currentTab.id === item.id
                    ? "border-white border border-dashed"
                    : " hover:border-white border border-dashed border-[#ffffff40]"
                }`}
                  onClick={() => setCurrentTab(tabButtons[item.id - 1])}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-4">
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
          </div>
          <div className=" w-[25%] flex flex-col gap-5">
            <div className=" flex flex-col gap-4 bg-[#2A273E] rounded-md py-6 px-8">
              <h4>Search NFT</h4>
              <hr />
              <input
                type="text"
                placeholder="Search Here"
                className=" bg-[#19162F] rounded-md text-white py-2 px-3"
              />
            </div>
            <div className=" flex flex-col gap-4 bg-[#2A273E] rounded-md py-6 px-8">
              <h4>Features</h4>
              <hr />
              <div className=" grid md:grid-cols-3 grid-cols-2 gap-3 pt-1">
                <img
                  src={collection1}
                  alt="collection1"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection2}
                  alt="collection2"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection3}
                  alt="collection3"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection4}
                  alt="collection4"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection5}
                  alt="collection5"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection6}
                  alt="collection6"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection7}
                  alt="collection7"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection8}
                  alt="collection8"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection9}
                  alt="collection9"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection10}
                  alt="collection10"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection11}
                  alt="collection11"
                  className=" h-14 w-full object-cover rounded-md"
                />
                <img
                  src={collection12}
                  alt="collection12"
                  className=" h-14 w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
