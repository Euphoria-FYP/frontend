import { useEffect, useState } from "react";
import MarketPlace from "../../Components/MarketPlace/MarketPlace";
import Layout from "../../Components/Shared/Layout";

const MarketPlacePage = () => {
  const [bgImg, setBgImg] = useState(localStorage.getItem("bgImg"));
  useEffect(() => {
    const img = localStorage.getItem("bgImg");
    console.log(img);
    setBgImg(img as any);
  }, []);

  // const bgImg = localStorage.getItem("bgImg");

  return (
    <Layout bgImgClass={bgImg as any}>
      <MarketPlace />
    </Layout>
  );
};

export default MarketPlacePage;
