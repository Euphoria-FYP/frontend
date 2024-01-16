import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer/Footer";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <main className="layout flex">
      <Sidebar />
      <div className="ml-[65px]">{children}</div>
    </main>
  );
};

export default index;
