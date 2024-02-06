import { useEffect, useState } from "react";
import MarketPlace from "../../Components/MarketPlace/MarketPlace";
import Layout from "../../Components/Shared/Layout";

const MarketPlacePage = () => {
  const [bgImg, setBgImg] = useState("marketPlaceBgImg");
  useEffect(() => {
    const img = localStorage.getItem("bgImg");
    console.log(img);
    setBgImg(img as any);
  });

  return (
    <Layout bgImgClass={bgImg}>
      <MarketPlace />
    </Layout>
  );
};

export default MarketPlacePage;
