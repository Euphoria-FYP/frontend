import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className=" hidden md:flex py-4 fixed w-[65px] flex-col items-center justify-between border-r border-[#858586] h-screen">
      <div className=" flex flex-col items-center gap-8">
        <img
          src={logoImg}
          alt="logo"
          className=" w-10 h-10 rounded-[50%] object-cover"
        />
        <div className=" flex flex-col items-center gap-6">
          <NavLink to={"/"}>
            <GoHome className=" text-white text-2xl" />
          </NavLink>
          <NavLink to={"/marketplace"}>
            <RxDashboard className=" text-white text-2xl" />
          </NavLink>
          <NavLink to={"/"}>
            <BiSearchAlt className=" text-white text-2xl" />
          </NavLink>
        </div>
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
