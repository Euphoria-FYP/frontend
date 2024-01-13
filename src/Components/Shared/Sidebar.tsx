import React from "react";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className=" py-4 fixed w-[65px] flex flex-col items-center justify-between border-r border-[#858586] h-screen">
      <div className=" flex flex-col items-center gap-5">
        <img
          src={logoImg}
          alt="logo"
          className=" w-10 h-10 rounded-[50%] object-cover"
        />
        <GoHome className=" text-white text-2xl" />
        <RxDashboard className=" text-white text-2xl" />
        <BiSearchAlt className=" text-white text-2xl" />
      </div>
      <div>
        <img
          src={profileImg}
          alt="profile"
          className=" w-10 h-10 rounded-[50%] object-cover"
        />
      </div>
    </div>
  );
};

export default Sidebar;
