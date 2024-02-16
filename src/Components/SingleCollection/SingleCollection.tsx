import React, { useState } from "react";
import MarketContrubutor from "../MarketPlace/MarketContrubutor";
import { tags, MyCollections } from "../../data";
import { BiSearchAlt } from "react-icons/bi";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import CollectionCard from "../Home/Collections/CollectionCard";
import TabsCollection from "./TabsCollection";

const SingleCollection = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const maxLength = 70;
  const longText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Quibusdam consectetur temporibus nisi illo quam architecto dolor
  autem repellendus quod, deserunt perferendis, iusto laudantium ab
  sapiente eum quisquam reiciendis`;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const displayText = expanded ? longText : longText.slice(0, maxLength);
  return (
    <>
      <div className=" flex h-full">
        {/* LEFT SIDE */}
        <div
          className={` ${
            isSidebarOpen ? "w-[75%]" : "w-[100%]"
          } flex flex-col justify-start gap-8 transition-all duration-300 `}
        >
          <div
            className={` bg-[url('https://i.seadn.io/gcs/files/a15e1494749043f96f3c4d5bf11ee1e8.png?auto=format&dpr=1&w=828')] bg-cover bg-center  w-full h-80`}
          >
            {/* bg shade */}
            <div
              className=" flex items-end justify-between w-full h-80 text-white px-10 py-8 "
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.419), rgba(65, 61, 61, 0.97))",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* content */}

              {/* first div */}

              <div className=" flex flex-col justify-center items-start gap-4">
                <div className=" rounded-xl border border-gray-400">
                  <img
                    src="https://i.seadn.io/gcs/files/4ae945fc0ce81d1cacbb2d607cdc5761.png?auto=format&dpr=1&w=384"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>

                <h1 className="font-semibold text-lg leading-3 tracking-wider text-white mt-2">
                  BoredApeYachtClub - GOERLI
                </h1>
                <span className=" opacity-80">The Rocks</span>
              </div>

              {/* second div */}
              <div className=" flex justify-between gap-5">
                <div className="flex flex-col justify-between gap-[5px]">
                  <span className=" font-bold text-[19px]">5%</span>
                  <span className="text-sm opacity-80">Creator Earnings</span>
                </div>

                <div className="flex flex-col justify-between gap-[5px]">
                  <span className=" font-bold text-[19px]">1,250</span>
                  <span className="text-sm opacity-80">Total Items</span>
                </div>
              </div>
            </div>
          </div>

          {/* description */}

          <div
            className={` text-white ${
              isSidebarOpen ? "w-[60%]" : "w-1/2"
            } font-extralight px-10 text-[13.5px] transition-all duration-300`}
          >
            <div>
              <p className=" transition-all duration-300 leading-4">
                {expanded ? displayText : displayText + "...."}
              </p>
              <span
                className={`font-semibold cursor-pointer hover:opacity-80`}
                onClick={toggleExpanded}
              >
                {expanded ? "See less" : "See more"}
              </span>
            </div>

            <div className="mt-3 inline-block">
              <span className="text-base">
                <span className="whitespace-pre">
                  <div className="inline-flex">
                    <span className="font-normal text-sm">
                      Created{" "}
                      <div className="inline-flex">
                        <span className="font-semibold text-sm">Dec 2021</span>
                      </div>
                    </span>
                  </div>
                </span>
                <span className=" font-bold">&nbsp;&nbsp;·&nbsp; </span>
                <span className="whitespace-pre">
                  <div className="inline-flex whitespace-pre">
                    <div className="inline-flex">
                      <span className=" font-normal text-sm">
                        Chain{" "}
                        <div className="inline-flex">
                          <span className="font-semibold text-sm">
                            Ethereum
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>

          <TabsCollection sidebarOpen={isSidebarOpen} />
        </div>

        {/* RIGHT SIDE */}
        {isSidebarOpen && (
          <div
            className={` flex flex-col gap-2 w-[25%] py-[28px] px-[36px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow scroll-marketplace transition-all duration-300l`}
          >
            <div className="lfr-direction flex justify-between items-center  border-b  pb-3 border-gray-300">
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
          </div>
        )}
        {!isSidebarOpen && (
          <div className=" flex flex-col gap-2 w-[65px] py-[28px] px-[20px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow transition-all duration-300">
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

export default SingleCollection;
