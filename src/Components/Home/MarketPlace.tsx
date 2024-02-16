import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MarketPlaceCard from "../Shared/MarketPlaceCard";
import { marketPlaceData } from "../../data";
import Slider from "react-slick";

const MarketPlace = () => {
  const settings: any = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (scrollOffset: number): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  const uniqueMarketplaceNames: string[] = marketPlaceData
    .flatMap((item) => item.nft.map((nft) => nft.marketplace))
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <section id="drop" className="flex flex-col justify-center items-center  mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          NFT MARKETPLACE
        </h2>
        <h1 className=" text-white text-center font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
          Super Hot Drops
        </h1>
      </div>
      <div className=" w-[95%] md:w-[90%]">
        {/* CATEGORY BUTTONS */}
        <div className=" w-[80%] flex items-center mx-auto my-10">
          <IoIosArrowBack
            className=" w-[7%] text-2xl text-white cursor-pointer"
            onClick={() => scroll(-132)}
          />
          <div
            className=" w-full pl-1 flex gap-2 overflow-x-auto whitespace-nowrap scrollbarHide"
            ref={scrollRef}
          >
            {uniqueMarketplaceNames.map((item) => (
              <button
                className={`bg-[#19191b] my-auto flex justify-center text-[15px] capitalize text-white tracking-wider font-normal py-[10px] px-4 min-w-32 rounded-md cursor-pointer`}
              >
                {item}
              </button>
            ))}
          </div>
          <IoIosArrowForward
            className=" w-[6%] ml-2 md:ml-0 text-2xl text-white cursor-pointer"
            onClick={() => scroll(132)}
          />
        </div>
        {/* CARDS */}
        <div className=" mx-auto flex justify-center gap-4 ">
          <Slider {...settings} className=" w-full py-3">
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
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
