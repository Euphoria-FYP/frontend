import React from "react";
import ContributorCard from "./ContributorCard";
import Slider from "react-slick";
import { cards } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contributor = () => {
  // const settings: any = {
  //   infinite: true,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  //   pauseOnHover: false,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       setting: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 520,
  //       setting: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  const settings1: any = {
    infinite: true,
    slidesToShow: 6,
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
    slidesToShow: 2,
    slidesToScroll: 2,
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

  return (
    <section className=" w-[95%] flex flex-col justify-center items-center my-5 mx-auto mt-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <h4 className="uppercase  font-semibold text-xl text-[#B900FF]">
          NFT Creators
        </h4>
        <h3 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider">
          Top Contributors
        </h3>
      </div>
      <div className="hidden md:block w-full my-9">
        <Slider {...settings1}>
          {cards.map((card, index) => (
            <ContributorCard
              key={index}
              name={card.name}
              ethAmount={card.ethAmount}
            />
          ))}
        </Slider>
      </div>
      <div className="block md:hidden w-full my-9">
        <Slider {...settings2}>
          {cards.map((card, index) => (
            <ContributorCard
              key={index}
              name={card.name}
              ethAmount={card.ethAmount}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Contributor;
