import React from "react";
import Carousel from "./Carousel";
import ExploreCategories from "./ExploreCategories";
import NftBanner from "./NftBanner";
// import Card from "./ContributorCard";
import Contributor from "./Contributor";
import MarketPlace from "./MarketPlace";
import FAQ from "./FAQ";
import Footer from "../Shared/Footer/Footer";
import StepsCard from "./StepsCard";
import HeaderSection from "../Shared/Header/HeaderSection";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <Carousel />
      <MarketPlace />
      <ExploreCategories />
      <Contributor />
      <NftBanner />
      <StepsCard />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
