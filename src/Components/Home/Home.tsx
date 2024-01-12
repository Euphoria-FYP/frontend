import React from "react";
import Carousel from "./Carousel";
import ExploreCategories from "./ExploreCategories";
import NftBanner from "./NftBanner";
// import Card from "./ContributorCard";
import Contributor from "./Contributor";
import MarketPlace from "./MarketPlace";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      {/* <MarketPlace /> */}
      <Carousel />
      <ExploreCategories />
      <Contributor />
      <NftBanner />
      <FAQ/>
    </>
  );
};

export default Home;
