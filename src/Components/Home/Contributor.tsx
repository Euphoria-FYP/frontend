import React from "react";
import ContributorCard from "./ContributorCard";
import Slider from "react-slick";
import { cards } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contributor = () => {
  const settings: any = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    autoplay: true,
    speed: 2000,
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
  return (
    <section className=" w-[90%] flex flex-col justify-center items-center my-5 mx-auto mt-16">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase  font-semibold text-xl text-[#B900FF]">
          NFT Creators
        </h2>
        <h1 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
          Top Contributors
        </h1>
      </div>
      <Slider {...settings} className=" w-full  my-9">
        {cards.map((card, index) => (
          <ContributorCard
            key={index}
            name={card.name}
            ethAmount={card.ethAmount}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Contributor;
