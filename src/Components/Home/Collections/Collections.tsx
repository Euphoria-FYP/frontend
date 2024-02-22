import React from "react";
import CollectionCard from "./CollectionCard";
import { MyCollections } from "../../../data";
import StyledButton from "../../Shared/StyledButton";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=" cursor-pointer">
      <IoIosArrowForward
        className={` text-5xl text-white`}
        style={{ color: "white", fontSize: "50px" }}
        onClick={onClick}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=" cursor-pointer">
      <IoIosArrowBack
        className={` text-5xl text-white`}
        style={{ color: "white", fontSize: "50px" }}
        onClick={onClick}
      />
    </div>
  );
}

const Collections = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="collection w-[95%] flex flex-col justify-center items-center gap-10 my-8 mx-auto">
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="uppercase font-semibold text-xl text-[#B900FF]">
            Popular Creators
          </h4>
          <h3 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider">
            Top Collections
          </h3>
        </div>
        {/* DESKTOP */}
        <div className=" w-full md:block hidden">
          <Slider {...settings1} className="w-full ">
            {MyCollections.map((item, i) => {
              return (
                <CollectionCard
                  key={i}
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
                  img4={item.img4}
                  title={item.title}
                  createdBy={item.createdBy}
                  price={item.price}
                />
              );
            })}
          </Slider>
        </div>
        {/* MOBILE */}
        <div className=" w-full md:hidden block">
          <Slider {...settings2} className="w-full ">
            {MyCollections.map((item, i) => {
              return (
                <CollectionCard
                  key={i}
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
                  img4={item.img4}
                  title={item.title}
                  createdBy={item.createdBy}
                  price={item.price}
                />
              );
            })}
          </Slider>
        </div>
        <NavLink to={"/marketplace"}>
          <StyledButton
            heading="View Collections"
            bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
            width={180}
          />
        </NavLink>
      </section>
    </>
  );
};

export default Collections;
