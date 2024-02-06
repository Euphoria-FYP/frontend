import MarketPlaceCard from "../Shared/MarketPlaceCard";
import Collection from "./Collection";
import { BiSearchAlt } from "react-icons/bi";
import { cards } from "../../data";
import MarketContrubutor from "./MarketContrubutor";
import { useState, useEffect } from "react";
import { marketPlaceData, tags } from "../../data";
import { MarketPlaceItem, NFT } from "@/types";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { NavLink } from "react-router-dom";

const MarketPlace = ({ setBgImg }: any) => {
  const [filterData, setFilterData] = useState<MarketPlaceItem[] | NFT[]>(
    marketPlaceData
  );
  const [type, setType] = useState<string>("tags");
  const [tag, setTag] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);

  const tagsFilter = (tag: string, filtertype: string) => {
    if (filtertype === "tags") {
      const filteredItems: MarketPlaceItem[] = marketPlaceData.filter(
        (item) => item.category === tag
      );
      setFilterData(filteredItems);
      setTag(tag);
    } else if (filtertype === "category") {
      const subcategory = tag.toLowerCase();
      const categoryfilter: NFT[] = marketPlaceData.flatMap((item) =>
        item.nft.filter((nftItem) => nftItem.marketplace === subcategory)
      );
      setFilterData(categoryfilter);
      setCategory(tag);
      setOpenDropDown([!openDropDown[0], ...openDropDown.slice(1)]);
    } else if (filtertype === "sort") {
      if (type === "tags") {
        if (tag === "ltoh") {
          const sortfilter: NFT[] = filterData
            .flatMap((item: any) => item.nft)
            .sort((a, b) => a.inDollars - b.inDollars);
          setFilterData(sortfilter);
        } else if (tag === "htol") {
          const sortfilter: NFT[] = filterData
            .flatMap((item: any) => item.nft)
            .sort((a, b) => b.inDollars - a.inDollars);
          setFilterData(sortfilter);
        }
      } else if (type === "category" || type === "sort") {
        if (tag === "ltoh") {
          const sortfilter = filterData.sort(
            (a: any, b: any) => a.inDollars - b.inDollars
          );
          setFilterData(sortfilter);
        } else if (tag === "htol") {
          const sortfilter = filterData.sort(
            (a: any, b: any) => b.inDollars - a.inDollars
          );
          setFilterData(sortfilter);
        }
      }
      setOpenDropDown([!openDropDown[1], ...openDropDown.slice(0)]);
    }
  };

  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  const uniqueMarketplaceNames: string[] = marketPlaceData
    .flatMap((item) => item.nft.map((nft) => nft.marketplace))
    .filter((value, index, self) => self.indexOf(value) === index);

  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  const handleBgImg = () => {
    setBgImg("bgTabImgSports");
  };

  return (
    <>
      <div className=" flex h-screen ">
        {/* LEFT SIDE */}
        <div
          className={` ${
            isSidebarOpen ? "w-[75%]" : "w-[100%]"
          } flex flex-col justify-start gap-8 pt-12 ${
            isSidebarOpen ? "px-12" : " px-10"
          }  `}
        >
          {/* DROPDOWNS */}
          <div className=" flex gap-8 text-[#cfcfcf]">
            <div className="relative flex flex-col gap-2 w-[270px] ">
              <button
                className=" flex justify-between text-left rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full"
                onClick={() => handleDropDownClick(0)}
              >
                <span>{category ? category : "Categories"}</span>
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
                  <p
                    className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer"
                    onClick={() => {
                      tagsFilter(item, "category");
                      setType("category");
                    }}
                  >
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
                <span>{sort ? sort : "Sort by"}</span>
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
                <p
                  className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer"
                  onClick={() => {
                    tagsFilter("ltoh", "sort");
                    setSort("Price: low to high");
                    setType("sort");
                  }}
                >
                  Price: low to high
                </p>
                <p
                  className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer"
                  onClick={() => {
                    tagsFilter("htol", "sort");
                    setSort("Price: high to low");
                    setType("sort");
                  }}
                >
                  Price: high to low
                </p>
              </div>
            </div>
          </div>
          {/* NFTCARDS */}
          <div
            className={`  flex flex-wrap justify-start ${
              isSidebarOpen ? "gap-8" : " gap-6"
            } pb-12 overflow-y-auto whitespace-nowrap scrollbarHide `}
          >
            {type === "tags" ? (
              filterData ? (
                filterData.map((card: any, index: number) =>
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
              ) : (
                <div className="flex justify-center items-center mx-auto text-white">
                  <h1>No Data Found</h1>
                </div>
              )
            ) : (type === "category" || type === "sort") &&
              filterData.length > 0 ? (
              filterData &&
              filterData.map((nft: any, index: any) => {
                console.log(nft);
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
            ) : (
              <div className="flex justify-center items-center mx-auto text-white">
                <h1>No Data Found</h1>
              </div>
            )}
          </div>
        </div>
        {/* RIGHT SIDE */}
        {isSidebarOpen && (
          <div
            className={` flex flex-col gap-2 w-[25%] py-[28px] px-[36px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow scroll-marketplace`}
          >
            <div className="lfr-direction flex justify-between items-center  border-b-2 pb-3 border-[#1e1e23]">
              <div className="flex items-center gap-5">
                <h2 className=" text-lg font-medium">Filters</h2>
                <button className=" font-light active:underline underline-offset-[3px] ">
                  Clear all
                </button>
              </div>
              <div
                className=" bg-violet-800 rounded py-[2px] pr-[2px] pl-[3px] cursor-pointer"
                onClick={() => setIsSideBarOpen((prev) => !prev)}
              >
                <IoIosArrowForward className=" text-xl" />
              </div>
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
                {tags.map((item, i) => {
                  return (
                    <button
                      key={i}
                      className={` rounded-lg ${
                        tag === item.tag ? `bg-[#7000ff]` : `bg-[#1e1e23]`
                      } text-sm py-2 px-4 `}
                      onClick={() => {
                        tagsFilter(item.tag, "tags");
                        setType("tags");
                        setCategory("");
                        setSort("");
                        handleBgImg();
                      }}
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
        )}
        {!isSidebarOpen && (
          <div className=" flex flex-col gap-2 w-[65px] py-[28px] px-[20px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow">
            <div
              className=" bg-violet-800 rounded py-[2px] pr-[3px] pl-[2px] cursor-pointer"
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
              <IoIosArrowBack className=" text-xl" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MarketPlace;
