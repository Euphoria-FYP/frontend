import MarketPlaceCard from "../Shared/MarketPlaceCard";
import Collection from "./Collection";
import { BiSearchAlt } from "react-icons/bi";

const MarketPlace = () => {
  return (
    <div className=" flex h-screen ">
      <div className=" w-[75%] flex flex-wrap justify-center gap-8 py-20 overflow-y-auto whitespace-nowrap scrollbarHide">
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
      </div>
      <div className="  w-[25%] py-[32px] px-[44px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow">
        <div className=" flex items-end gap-4 border-b-2 my-3 py-3 border-[#141414]">
          <h2 className=" text-lg font-medium">Filters</h2>
          <button className=" font-medium">Clear all</button>
        </div>
        <div className=" flex flex-col gap-3 mt-5">
          <h2 className=" text-lg font-medium">Collections</h2>
          <div className="relative flex gap-2 w-full">
            <input
              type="text"
              placeholder="Search"
              className="  rounded-lg bg-[#141414] text-sm font-medium py-[15px] px-4 w-full"
            />
            <BiSearchAlt className=" absolute right-[14px] top-[14px] text-white text-2xl" />
          </div>
        </div>
        <div className=" flex flex-col gap-3 mt-3">
          <h2 className=" text-lg font-medium">Status</h2>
          <div className=" flex gap-2 w-full">
            <button className=" rounded-lg bg-[#141414] text-sm font-medium py-2 px-4 w-[50%]">
              Buy Now
            </button>
            <button className=" rounded-lg bg-[#141414] text-sm font-medium py-2 px-4 w-[50%]">
              Auction
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mt-3">
          <h2 className=" text-lg font-medium">Price</h2>
          <div className=" flex gap-2 w-full">
            <input
              type="text"
              placeholder="Min"
              className=" rounded-lg text-center bg-[#141414] text-sm font-medium py-2 px-4 w-[50%] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Max"
              className=" rounded-lg text-center bg-[#141414] text-sm font-medium py-2 px-4 w-[50%] focus:outline-none"
            />
          </div>
        </div>
        {/* TOP Ctegory */}
        <div className=" flex flex-col gap-3 mt-3">
          <h2 className=" text-lg font-medium">Top Contributers</h2>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
