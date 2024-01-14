import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <main className="layout -z-10">
      <Sidebar />
      <div>{children}</div>
    </main>
  );
};

export default index;
