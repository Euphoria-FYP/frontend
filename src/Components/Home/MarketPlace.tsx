import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import cardImg from "../../assets/images/bg.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import MarketPlaceCard from "../Shared/MarketPlaceCard";

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
        <h1 className=" text-white font-semibold text-5xl md:text-5xl tracking-wider CodeNewRomanFont">
          Super Hot Drops
        </h1>
      </div>
      <div className="w-[85%]">
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
            <button
              className={`bg-[#7000ff] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] min-w-32 rounded-md cursor-pointer`}
            >
              Tranding Art
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Art
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Sport
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Music
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Music
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Music
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Music
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Music
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Sport
            </button>
            <button
              className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
            >
              Sport
            </button>
          </div>
          <IoIosArrowForward
            className=" w-[6%] text-2xl text-white cursor-pointer"
            onClick={() => scroll(132)}
          />
        </div>
        {/* CARDS */}
        <div className=" flex flex-wrap justify-center gap-16">
          <MarketPlaceCard />
          <MarketPlaceCard />
          <MarketPlaceCard />
          <MarketPlaceCard />
          <MarketPlaceCard />
          <MarketPlaceCard />
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
