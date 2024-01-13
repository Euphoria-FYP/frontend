import React, { useEffect, useState } from "react";
import carouselImg1 from "../../assets/images/carousel_1.png";
import carouselImg2 from "../../assets/images/carousel_2.png";
import ephHeading from "../../assets/images/Ephoria-heading.png";
import StyledButton from "../Shared/StyledButton";

const carouselData = [
  {
    id: 1,
    title: "Euphoria",
    heading:
      "Discover <span style='color:#B900FF;'>Collect</span>  & <span style='color:#B900FF;'>Sell</span>  Extraordinary NFTs Art",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam similique, ratione nisi dolores, quod optio officia eius a doloribus ea iste labore, accusantium dignissimos.zf",
    img: carouselImg1,
  },
  {
    id: 2,
    title: "NFT Market Place",
    heading:
      "Discover The Hottest <span style='color:#B900FF;'>NFTs</span> Of The Season",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam similique, ratione nisi dolores, quod optio officia eius a doloribus ea iste labore, accusantium dignissimos.zf",
    img: carouselImg2,
  },
];

const Carousel = () => {
  const [carousel, setCarousel] = useState(carouselData[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = carouselData.findIndex((item) => item === carousel);
      const nextIndex = (currentIndex + 1) % carouselData.length;
      setCarousel(carouselData[nextIndex]);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [carousel, carouselData]);

  return (
    <>
      <section className="relative text-white h-screen w-4/5 flex justify-between items-center gap-7 mx-auto">
        {/* BUTTON SECTION */}
        <div className=" absolute flex gap-3 top-6 right-2">
          <img
            src={carouselImg1}
            alt="carousel1"
            className={` w-[72px] h-[70px] p-[10px] border-[2.5px] rounded-[50%] cursor-pointer ${
              carousel.id === carouselData[0].id && "circle"
            } `}
            onClick={() => setCarousel(carouselData[0])}
          />
          <img
            src={carouselImg2}
            alt="carousel2"
            className={` w-[72px] h-[70px] p-[10px] border-[2.5px] rounded-[50%] cursor-pointer ${
              carousel.id === carouselData[1].id && "circle"
            } `}
            onClick={() => setCarousel(carouselData[1])}
          />
        </div>
        {/* LEFT SIDE */}
        <div className=" w-[55%] flex flex-col gap-6">
          {/* <h1 className=" text-[32px] font-bold">{carousel.title}</h1> */}
          <img src={ephHeading} alt="Heading" className=" w-56" />
          <h3
            className=" text-[50px] font-semibold leading-[48px] CodeNewRomanFont"
            dangerouslySetInnerHTML={{ __html: carousel.heading }}
          >
            {/* {carousel.heading} */}
          </h3>
          <p className=" w-[80%] text-sm text-[#cfcfcf]">
            {carousel.description}
          </p>
          {carousel.id === 1 && (
            <>
              <div className=" flex gap-8">
                <StyledButton heading="Sell" width={130} />
                <StyledButton heading="Create" width={130} />
              </div>
              <div className=" flex gap-8">
                <div className=" flex flex-col">
                  <p className=" text-3xl CodeNewRomanFont">15K+</p>
                  <span className="text-[#cfcfcf] text-sm tracking-widest">
                    Auctions
                  </span>
                </div>
                <div className=" flex flex-col">
                  <p className=" text-3xl CodeNewRomanFont">20K+</p>
                  <span className="text-[#cfcfcf] text-sm tracking-widest">
                    Artworks
                  </span>
                </div>
                <div className=" flex flex-col">
                  <p className=" text-3xl CodeNewRomanFont">4K+</p>
                  <span className="text-[#cfcfcf] text-sm tracking-widest">
                    Creators
                  </span>
                </div>
              </div>
            </>
          )}
          {carousel.id === 2 && (
            <div className=" flex gap-8">
              <StyledButton heading="Connect Wallet" width={180} />
            </div>
          )}
        </div>
        {/* RIGHT SIDE */}
        <div className=" w-[40%] mt-20 flex justify-end items-center">
          <img src={carousel.img} alt="carouselImg" className="" />
        </div>
      </section>
    </>
  );
};

export default Carousel;
