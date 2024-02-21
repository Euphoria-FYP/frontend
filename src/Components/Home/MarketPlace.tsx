import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MarketPlaceCard from "../Shared/MarketPlaceCard";
import { marketPlaceData } from "../../data";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MarketCardProps = {
  id: number;
  marketplace: string;
  name: string;
  userName: string;
  currentBid: number;
  inDollars: number;
};

const MarketPlace = () => {
  const settings1: any = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2: any = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 768,
        setting: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 520,
        setting: {
          slidesToShow: 1,
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

  const [showMarketPlaceData, setShowMarketPlaceData] = useState<
    MarketCardProps[]
  >([]);

  useEffect(() => {
    const data = marketPlaceData.flatMap((item) => item.nft);
    setShowMarketPlaceData(data);
  }, []);

  return (
    <section
      id="drop"
      className="flex flex-col justify-center items-center  mx-auto"
    >
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
        <div className=" md:block hidden ">
          <Slider {...settings1} className=" w-full">
            {showMarketPlaceData?.map(
              (item: MarketCardProps, index: number) => (
                <div className="slide">
                  <MarketPlaceCard
                    key={index}
                    id={item.id}
                    marketplace={item.marketplace}
                    name={item.name}
                    userName={item.userName}
                    currentBid={item.currentBid}
                    inDollars={item.inDollars}
                  />
                </div>
              )
            )}
          </Slider>
        </div>
        <div className=" md:hidden block ">
          <Slider {...settings2} className=" w-full">
            {showMarketPlaceData?.map(
              (item: MarketCardProps, index: number) => (
                <div className="slide">
                  <MarketPlaceCard
                    key={index}
                    id={item.id}
                    marketplace={item.marketplace}
                    name={item.name}
                    userName={item.userName}
                    currentBid={item.currentBid}
                    inDollars={item.inDollars}
                  />
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
