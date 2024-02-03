import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className=" hidden md:flex py-4 fixed flex-col  hover:items-start justify-between border-r border-[#858586] h-screen  bg-red-500 w-[70px] hover:w-64 pl-0 z-20 group transition-width duration-300 ease-out delay-250">
      <div className=" flex flex-col  w-[60px] group-hover:w-60 group-hover:items-start gap-8 
      transition-width duration-300 ease-out delay-250">
        <img
          src={logoImg}
          alt="logo"
          className=" ml-3 w-10 h-10 rounded-[50%] object-cover"
        />
        <div
          className=" flex flex-col items-center group-hover:items-start gap-3 w-full 
        transition-width duration-200 ease-out delay-250"
        >
          <NavLink
            to={"/"}
            className=" flex items-center gap-3 bg-slate-500 py-[8px] pl-4 pr-2 rounded-e-[20px]  w-full"
          >
            <GoHome className=" text-white text-[24px]" />
            <p className=" hidden group-hover:block text-white ">Home</p>
          </NavLink>
          <NavLink
            to={"/marketplace"}
            className=" flex items-center gap-3 bg-slate-500 py-[8px] pl-4 pr-4 rounded-e-[20px]  w-full"
          >
            <RxDashboard className=" text-white text-[24px] " />
            <p className=" hidden group-hover:block text-white ">MarketPlace</p>
          </NavLink>
          <NavLink
            to={"/"}
            className=" flex items-center gap-3 bg-slate-500 py-[8px] pl-4 pr-4 rounded-e-[20px]  w-full"
          >
            <BiSearchAlt className=" text-white text-[24px] " />
            <p className=" hidden group-hover:block text-white ">Search</p>
          </NavLink>
        </div>
      </div>
      <div>
        <img
          src={profileImg}
          alt="profile"
          className=" ml-4 w-10 h-10 rounded-[50%] object-cover"
        />
      </div>
    </div>
  );
};

export default Sidebar;
