import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

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
      <Sidebar />
      <div className="md:ml-[70px]">{children}</div>
    </main>
  );
};

export default index;
