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

  type NFT = {
    name: string;
    userName: string;
    currentBid: number;
    inDollars: number;
  };

  type MarketPlaceItem = {
    category: string;
    marketplace: string;
    nft: NFT[];
  };

  const marketPlaceData: MarketPlaceItem[] = [
    {
      category: "sports",
      marketplace: "cricket",
      nft: [
        {
          name: "Daniyal Saleem",
          userName: "dani36",
          currentBid: 0.854,
          inDollars: 1400.50,
        },
      ],
    },
    {
      category: "sports",
      marketplace: "badminton",
      nft: [
        {
          name: "Dr. John",
          userName: "john26",
          currentBid: 0.389,
          inDollars: 1400.30,
        },
      ],
    },
    {
      category: "game",
      marketplace: "snipping",
      nft: [
        {
          name: "Obaid Ur Rehman",
          userName: "obbi45",
          currentBid: 0.985,
          inDollars: 1900.23,
        },
      ],
    },
    {
      category: "music",
      marketplace: "pop",
      nft: [
        {
          name: "Ahsan Omerjee",
          userName: "ahsan2002",
          currentBid: 0.584,
          inDollars: 1900.20,
        },
      ],
    },
    {
      category: "music",
      marketplace: "concerts",
      nft: [
        {
          name: "Bob Johnson",
          userName: "bob_j",
          currentBid: 0.789,
          inDollars: 3100.85,
        },
      ],
    },
    {
      category: "sports",
      marketplace: "football",
      nft: [
        {
          name: "Michael Johnson",
          userName: "mike_j",
          currentBid: 0.589,
          inDollars: 2200.97,
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center  mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          NFT MARKETPLACE
        </h2>
        <h1 className=" text-white text-center font-semibold text-4xl md:text-5xl tracking-wider CodeNewRomanFont">
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
            {marketPlaceData.map((item) => {
              return (
                <button
                  className={`bg-[#19191b] my-auto flex justify-center text-[15px] text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
                >
                  {item.marketplace}
                </button>
              );
            })}
          </div>
          <IoIosArrowForward
            className=" w-[6%] ml-2 md:ml-0 text-2xl text-white cursor-pointer"
            onClick={() => scroll(132)}
          />
        </div>
        {/* CARDS */}
        <div className=" flex flex-wrap justify-center gap-16">
        {marketPlaceData.map((card, index) => (
          
          card.nft.map((nft)=>{
            return(
              <MarketPlaceCard
              key={index}
              name={nft.name}
              userName={nft.userName}
              currentBid={nft.currentBid}
              inDollars={nft.inDollars}
            />
            )
          })
        ))}
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
