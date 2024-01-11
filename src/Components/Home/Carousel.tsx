import React, { useState } from "react";
import carouselImg1 from "../../assets/images/Hero-1.png";
import carouselImg2 from "../../assets/images/carousel-2.jpeg";

const carouselData = [
  {
    title: "Euphoria",
    heading: "Discover Collect & Sell Extraordinary NFTs Art",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisut sint inventore rem debitis architecto quas aut fugit ipsa",
    img: carouselImg1,
  },
  {
    title: "NFT Market Place",
    heading: "Discover The Hottest NFTs Of The Season",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisut sint inventore rem debitis architecto quas aut fugit ipsa",
    img: carouselImg2,
  },
];

const Carousel = () => {
  const [carousel, setCarousel] = useState(carouselData[0]);
  return (
    <>
      <section className="relative text-white h-screen w-4/5 flex justify-center items-center gap-7 mx-auto">
        {/* BUTTON SECTION */}
        <div className=" absolute flex gap-3 top-6 right-2">
          <img
            src={carouselImg1}
            alt="carousel1"
            className="w-20 h-20 border-2 rounded-[50%] cursor-pointer"
            onClick={() => setCarousel(carouselData[0])}
          />
          <img
            src={carouselImg1}
            alt="carousel2"
            className="w-20 h-20 border-2 rounded-[50%] cursor-pointer"
            onClick={() => setCarousel(carouselData[1])}
          />
        </div>
        {/* LEFT SIDE */}
        <div className=" w-1/2 flex flex-col gap-3">
          <h1 className=" text-[32px] font-bold">{carousel.title}</h1>
          <h3 className=" text-[40px] font-semibold leading-[45px]">
            {carousel.heading}
          </h3>
          <p className=" text-base">{carousel.description}</p>
          <div className=" flex gap-3">
            <button>Sell</button>
            <button>Create</button>
          </div>
          <div className=" flex gap-3">
            <div>
              <p>15K+</p>
              <span>Auction</span>
            </div>
            <div>
              <p>15K+</p>
              <span>Auction</span>
            </div>
            <div>
              <p>15K+</p>
              <span>Auction</span>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="w-1/2 flex justify-end items-center">
          <img src={carousel.img} alt="carouselImg" className="" />
        </div>
      </section>
    </>
  );
};

export default Carousel;
