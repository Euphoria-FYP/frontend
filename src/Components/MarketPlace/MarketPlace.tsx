import MarketPlaceCard from "../Shared/MarketPlaceCard";
import Collection from "./Collection";
import { BiSearchAlt } from "react-icons/bi";
import { cards } from "../Home/Contributor";
import MarketContrubutor from "./MarketContrubutor";

const MarketPlace = () => {
  return (
    <div className=" flex h-screen ">
      <div className=" w-[75%] flex flex-wrap justify-center gap-8 py-20 overflow-y-auto whitespace-nowrap scrollbarHide">
        <MarketPlaceCard
          name={"Ahsan Omerjee"}
          userName={"ahsan2002"}
          currentBid={1.855}
          inDollars={1800.9}
        />
        <MarketPlaceCard
          name={"Ahsan Omerjee"}
          userName={"ahsan2002"}
          currentBid={1.855}
          inDollars={1800.9}
        />
        <MarketPlaceCard
          name={"Ahsan Omerjee"}
          userName={"ahsan2002"}
          currentBid={1.855}
          inDollars={1800.9}
        />
        <MarketPlaceCard
          name={"Ahsan Omerjee"}
          userName={"ahsan2002"}
          currentBid={1.855}
          inDollars={1800.9}
        />
        <MarketPlaceCard
          name={"Ahsan Omerjee"}
          userName={"ahsan2002"}
          currentBid={1.855}
          inDollars={1800.9}
        />
        <MarketPlaceCard
          name={"Ahsan Omerjee"}
          userName={"ahsan2002"}
          currentBid={1.855}
          inDollars={1800.9}
        />
      </div>
      <div className=" flex flex-col w-[25%] py-[28px] px-[36px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow scroll-marketplace">
        <div className="lfr-direction flex items-end gap-4 border-b-2 pb-3 border-[#141414]">
          <h2 className=" text-lg font-medium">Filters</h2>
          <button className=" font-medium">Clear all</button>
        </div>
        <div className="lfr-direction flex flex-col gap-3 mt-3">
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
        <div className="lfr-direction flex flex-col gap-3 mt-3">
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
        <div className="lfr-direction flex flex-col gap-3 mt-3">
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
        <div className="lfr-direction flex flex-col gap-3 mt-3">
          <h2 className=" text-lg font-medium">MarktePlace Tags</h2>
          <div className=" flex flex-wrap gap-2 w-full">
            <button className=" rounded-lg bg-[#141414] text-sm py-2 px-4 ">
              Sports
            </button>
            <button className=" rounded-lg bg-[#141414] text-sm py-2 px-4 ">
              Music
            </button>
            <button className=" rounded-lg bg-[#141414] text-sm py-2 px-4 ">
              Art
            </button>
            <button className=" rounded-lg bg-[#141414] text-sm py-2 px-4 ">
              Game
            </button>
            <button className=" rounded-lg bg-[#141414] text-sm py-2 px-4 ">
              Painting
            </button>
          </div>
        </div>
        {/* TOP Ctegory */}
        <div className="lfr-direction flex flex-col gap-3 mt-3">
          <h2 className=" text-lg font-medium">Top Contributers</h2>
          <div className=" h-[180px] flex flex-col gap-2 overflow-y-auto  scrollbarHide">
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
  );
};

export default MarketPlace;
