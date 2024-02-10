import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

import AnimatedCursor from "react-animated-cursor";
import BottomToTop from "../BottomToTop/BottomToTop";

const index = ({
  children,
  bgImgClass,
}: {
  children: ReactNode;
  bgImgClass: string;
}) => {
  // localStorage.setItem("bgImg", "marketPlaceBgImg");

  return (
    <main className={`${bgImgClass}`}>
      <AnimatedCursor
        innerSize={6}
        outerSize={32}
        innerScale={1}
        outerScale={1.8}
        outerAlpha={0}
        // @ts-ignore
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "2px solid #fff",
        }}
      />
      <BottomToTop />
      <Sidebar />
      <div className="md:ml-[70px]">{children}</div>
    </main>
  );
};

export default index;
