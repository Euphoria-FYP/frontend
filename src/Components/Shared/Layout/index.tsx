import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";

const index = ({ children }: { children: ReactNode }) => {
  return (
    <main className="layout">
      <Sidebar />
      <div>{children}</div>
    </main>
  );
};

export default index;
