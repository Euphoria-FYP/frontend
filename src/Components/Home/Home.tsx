import React from "react";
import Carousel from "./Carousel";
import ExploreCategories from "./ExploreCategories";
import NftBanner from "./NftBanner";
import Card from "./ContributorCard";
import Contributor from "./Contributor";
import MarketPlace from "./MarketPlace";

const Home = () => {
  return (
    <>
      <Carousel />
      <MarketPlace />
      <ExploreCategories />
      <NftBanner />
      <Contributor />
      <Card />
    </>
  );
};

export default Home;
