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
      "Unlock the <span style='color:#B900FF;'>Glamour</span>, <span style='color:#B900FF;'>Connect</span> with Digital Realm!",
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
      <section className="relative text-white h-screen w-full md:w-4/5 flex md:flex-row flex-col justify-center md:justify-between items-center md:gap-6 mx-auto md:px-0 px-5">
        {/* BUTTON SECTION */}
        <div className="   absolute flex gap-3 md:top-6 top-4 md:right-2 right-4">
          <img
            src={carouselImg1}
            alt="carousel1"
            className={` md:w-[72px] md:h-[70px] w-[66px] h-[64px] p-[10px] border-[2.5px] rounded-[50%] cursor-pointer ${
              carousel.id === carouselData[0].id && "circle"
            } `}
            onClick={() => setCarousel(carouselData[0])}
          />
          <img
            src={carouselImg2}
            alt="carousel2"
            className={` md:w-[72px] md:h-[70px] w-[66px] h-[64px] p-[10px] border-[2.5px] rounded-[50%] cursor-pointer ${
              carousel.id === carouselData[1].id && "circle"
            } `}
            onClick={() => setCarousel(carouselData[1])}
          />
        </div>
        {/* LEFT SIDE */}
        <div className=" w-full md:w-[55%] flex flex-col md:gap-6 gap-4">
          {/* <h1 className=" text-[32px] font-bold">{carousel.title}</h1> */}
          <img src={ephHeading} alt="Heading" className=" w-56" />
          <h3
            className={` text-[38px] md:text-[48px] w-full md:w-[90%] font-semibold leading-[50px] CodeNewRomanFont`}
            dangerouslySetInnerHTML={{ __html: carousel.heading }}
          >
            {/* {carousel.heading} */}
          </h3>
          <p className="  w-full md:w-[80%] text-sm text-[#cfcfcf]">
            {carousel.description}
          </p>
          <div className=" mx-auto my-5 w-60 md:hidden flex justify-center items-center">
          <img src={carousel.img} alt="carouselImg" className="  " />
        </div>
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
        <div className=" w-[40%] mt-20 hidden md:flex justify-center justify-end items-center">
          <img src={carousel.img} alt="carouselImg" className="  " />
        </div>
      </section>
    </>
  );
};

export default Carousel;
