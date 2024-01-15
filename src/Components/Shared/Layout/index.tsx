import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";

const index = ({
  children,
  bgImgClass,
}: {
  children: ReactNode;
  bgImgClass: string;
}) => {
  return (
    <main className={`${bgImgClass}`}>
      <Sidebar />
      <div className=" ml-[65px]">{children}</div>
    </main>
  );
};

export default index;
