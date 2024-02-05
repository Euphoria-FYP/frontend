import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MarketPlaceCard from "../Shared/MarketPlaceCard";
import { marketPlaceData } from "../../data";

const MarketPlace = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="flex flex-col justify-center items-center  mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          NFT MARKETPLACE
        </h2>
        <h1 className=" text-white text-center font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
          Super Hot Drops
        </h1>
      </div>
      <div className=" w-[95%] md:w-[85%]">
        {/* CATEGORY BUTTONS */}
        <div className=" flex items-center my-10">
          <IoIosArrowBack
            className=" w-[6%] text-2xl text-white cursor-pointer"
            onClick={() => scroll(-132)}
          />
          <div
            className=" w-full pl-1 flex gap-2 overflow-x-auto whitespace-nowrap scrollbarHide"
            ref={scrollRef}
          >
            {marketPlaceData.map((item, index) =>
              item.nft.map((nft) => {
                return (
                  <button
                    className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
                  >
                    {nft.marketplace}
                  </button>
                );
              })
            )}
          </div>
          <IoIosArrowForward
            className=" w-[6%] ml-2 md:ml-0 text-2xl text-white cursor-pointer"
            onClick={() => scroll(132)}
          />
        </div>
        {/* CARDS */}
        <div className=" mx-auto flex md:flex-wrap md:justify-center justify-center gap-4 md:gap-16 md:w-[90%] w-[88%] overflow-x-auto whitespace-nowrap scrollbarHide">
          {marketPlaceData.map((card, index) =>
            card.nft.map((nft) => {
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
          )}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
