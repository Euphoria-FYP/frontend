import React from "react";
import CategoriesCard from "./CategoriesCard";
import StyledButton from "../Shared/StyledButton";
import { CategoriesCardProps } from "./CategoriesCard";

import Art from '../../assets/images/art.jpg'
import Game from '../../assets/images/game.jpg'
import Music from '../../assets/images/music.jpg'
import Sports from '../../assets/images/sports.jpg'


const Categories: CategoriesCardProps[] = [
  { title: "Art", cardimage: Art },
  { title: "Game", cardimage: Game },
  { title: "Music", cardimage: Music },
  { title: "Sports", cardimage: Sports},
];

const ExploreCategories = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto mt-16 mb-12">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="uppercase font-semibold text-lg md:text-xl text-[#B900FF]">
          Discover Art Work
        </h2>
        <h1 className=" text-white font-semibold text-3xl md:text-5xl tracking-wider CodeNewRomanFont">
          Explore Categories
        </h1>
      </div>

      <div className=" flex justify-center items-center md:gap-7 mt-10 flex-wrap">
      {Categories.map((item, index) => (
          <CategoriesCard
            key={index}
            title={item.title}
            cardimage={item.cardimage}
          />
        ))}
      </div>

      <StyledButton heading="All Categories" width={180}/>

    </section>
  );
};

export default ExploreCategories;
