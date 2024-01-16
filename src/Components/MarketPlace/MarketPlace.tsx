import MarketPlaceCard from "../Shared/MarketPlaceCard";
import Collection from "./Collection";
import { BiSearchAlt } from "react-icons/bi";
import { cards } from "../../data";
import MarketContrubutor from "./MarketContrubutor";
import { useState } from "react";
import { marketPlaceData, tags } from "../../data";
import { MarketPlaceItem } from "@/types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const MarketPlace = () => {
  const [filterData, setFilterData] =
    useState<MarketPlaceItem[]>(marketPlaceData);
  const [category, setCategory] = useState<string>("");

  const tagsFilter = (tag: string) => {
    const filteredItems: MarketPlaceItem[] = marketPlaceData.filter(
      (item) => item.category === tag
    );
    setFilterData(filteredItems);
    setCategory(tag);
  };

  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);

  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  const uniqueMarketplaceNames: string[] = [
    ...marketPlaceData.flatMap((item) =>
      item.nft.map((nft) => nft.marketplace)
    ),
  ];
  console.log(uniqueMarketplaceNames);

  return (
    <>
      <div className=" flex h-screen ">
        {/* RIGHT SIDE */}
        <div className=" w-[75%] flex flex-col justify-start gap-8 pt-12 px-12 ">
          {/* DROPDOWNS */}
          <div className=" flex gap-8 text-[#cfcfcf]">
            <div className="relative flex flex-col gap-2 w-[270px] ">
              <button
                className=" flex justify-between text-left rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full"
                onClick={() => handleDropDownClick(0)}
              >
                <span>Categories</span>
                {openDropDown[0] ? (
                  <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={`${
                  openDropDown[0] ? "block" : "hidden"
                }  top-14 rounded-lg z-50 absolute w-[270px] h-[155px] py-[6px] bg-[#1e1e23] scroll-marketplace-dropdown`}
              >
                {uniqueMarketplaceNames.map((item) => (
                  <p className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative flex gap-2 w-[270px]">
              <button
                className=" flex justify-between text-left rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full"
                onClick={() => handleDropDownClick(1)}
              >
                <span>Sort by</span>
                {openDropDown[1] ? (
                  <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={`${
                  openDropDown[1] ? "block" : "hidden"
                }  top-14 rounded-lg z-50 absolute w-[270px] py-[6px] bg-[#1e1e23] `}
              >
                <p className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer">
                  Price: low to high
                </p>
                <p className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer">
                  Price: high to low
                </p>
              </div>
            </div>
          </div>
          {/* NFTCARDS */}
          <div className="  flex flex-wrap justify-start gap-8 pb-12 overflow-y-auto whitespace-nowrap scrollbarHide ">
            {filterData.length > 0 ? (
              filterData.map((card, index) =>
                card.nft.map((nft) => {
                  return (
                    <MarketPlaceCard
                      key={index}
                      name={nft.name}
                      userName={nft.userName}
                      currentBid={nft.currentBid}
                      inDollars={nft.inDollars}
                    />
                  );
                })
              )
            ) : (
              <div className="flex justify-center items-center mx-auto text-white">
                <h1>No Data Found</h1>
              </div>
            )}
          </div>
        </div>
        {/* LEFT SIDE */}
        <div className=" flex flex-col gap-2 w-[25%] py-[28px] px-[36px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow scroll-marketplace">
          <div className="lfr-direction flex items-end gap-4 border-b-2 pb-3 border-[#1e1e23]">
            <h2 className=" text-lg font-medium">Filters</h2>
            <button className=" font-medium">Clear all</button>
          </div>
          <div className="lfr-direction flex flex-col gap-4 mt-3">
            <h2 className=" text-lg font-medium">Collections</h2>
            <div className="relative flex gap-2 w-full">
              <input
                type="text"
                placeholder="Search"
                className="  rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full placeholder-[#cfcfcf]"
              />
              <BiSearchAlt className=" absolute right-[14px] top-[14px] text-2xl" />
            </div>
          </div>
          <div className="lfr-direction flex flex-col gap-4 mt-3">
            <h2 className=" text-lg font-medium">Status</h2>
            <div className=" flex gap-2 w-full">
              <button className=" rounded-lg bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%]">
                Buy Now
              </button>
              <button className=" rounded-lg bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%]">
                Auction
              </button>
            </div>
          </div>
          <div className="lfr-direction flex flex-col gap-4 mt-3">
            <h2 className=" text-lg font-medium">Price</h2>
            <div className=" flex gap-2 w-full">
              <input
                type="text"
                placeholder="Min"
                className=" rounded-lg text-center bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%] focus:outline-none placeholder-[#cfcfcf]"
              />
              <input
                type="text"
                placeholder="Max"
                className=" rounded-lg text-center bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%] focus:outline-none placeholder-[#cfcfcf]"
              />
            </div>
          </div>
          <div className="lfr-direction flex flex-col gap-4 mt-3">
            <h2 className=" text-lg font-medium">MarktePlace Tags</h2>
            <div className=" flex flex-wrap gap-2 w-full">
              {tags.map((item) => {
                return (
                  <button
                    className={` rounded-lg ${
                      category === item.tag ? `bg-[#7000ff]` : `bg-[#141414]`
                    } text-sm py-2 px-4 `}
                    onClick={() => tagsFilter(item.tag)}
                  >
                    {item.tag}
                  </button>
                );
              })}
            </div>
          </div>
          {/* TOP Ctegory */}
          <div className="lfr-direction flex flex-col gap-4 mt-3">
            <h2 className=" text-lg font-medium">Top Contributers</h2>
            <div className=" h-[180px] flex flex-col gap-3 overflow-y-auto  scrollbarHide">
              {cards.map((card, index) => (
                <MarketContrubutor
                  key={index}
                  name={card.name}
                  ethAmount={card.ethAmount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
