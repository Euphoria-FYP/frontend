import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// ICONS
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// COMPONENTS
import CollectionCard from "./CollectionCard";
import StyledButton from "../../Shared/StyledButton";

// MUI
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// SLIDER SLICK
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// DATA
import { AllCollections } from "../../../data";

// TYPES
import { CollectionsData } from "@/types";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=" cursor-pointer">
      <IoIosArrowForward
        className={` md:text-5xl text-4xl text-white`}
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
        className={` md:text-5xl text-4xl text-white`}
        onClick={onClick}
      />
    </div>
  );
}

const Collections = () => {
  const theme = useTheme();
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [featuredCollection, setFeaturedCollection] =
    useState<CollectionsData[]>(AllCollections);

  useEffect(() => {
    const filteredCollection = AllCollections.filter(
      (item) => item.featured === true
    );
    setFeaturedCollection(filteredCollection);
  }, []);

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
        {upSm && (
          <Slider {...settings1} className="w-full ">
            {featuredCollection.map((item, i) => (
              <CollectionCard key={i} {...item} />
            ))}
          </Slider>
        )}
        {/* MOBILE */}
        {downSm && (
          <>
            <Slider {...settings2} className="w-full ">
              {featuredCollection?.map((item, i) => (
                <CollectionCard key={i} {...item} />
              ))}
            </Slider>
          </>
        )}
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
