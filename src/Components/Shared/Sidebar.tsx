import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiSearchAlt } from "react-icons/bi";

const Links = [
  {
    id: 1,
    button: <GoHome className=" text-white text-[24px]" />,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    button: <RxDashboard className=" text-white text-[24px] " />,
    link: "/marketplace",
    title: "MarketPlace",
  },
  {
    id: 3,
    button: <BiSearchAlt className=" text-white text-[24px] " />,
    link: "/",
    title: "Search",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    // Check if the current pathname matches any link
    const matchingLink = Links.find((link) => location.pathname === link.link);

    if (matchingLink) {
      setActive(matchingLink.id);
    }
  }, [location.pathname]);
  return (
    <div className=" hidden md:flex py-4 fixed flex-col  hover:items-start justify-between border-r border-[#858586] h-screen bg-[#1f2045] w-[70px] hover:w-64 pl-0 z-20 group transition-width duration-300 ease-out delay-250">
      <div
        className=" flex flex-col  w-[60px] group-hover:w-60 group-hover:items-start gap-8 
      transition-width duration-300 ease-out delay-250"
      >
        <img
          src={logoImg}
          alt="logo"
          className=" ml-3 w-10 h-10 rounded-[50%] object-cover"
        />
        <div
          className=" flex flex-col items-center group-hover:items-start gap-3 w-full 
        transition-width duration-200 ease-out delay-250"
        >
          {Links.map((item, i) => {
            return (
              <NavLink
                key={item.id}
                to={item.link}
                className={`flex items-center gap-3 py-[8px] pl-4 pr-2 rounded-e-[20px] w-full
                ${active === item.id ? "bg-slate-500" : ""}
                ${active !== item.id ? "hover:bg-slate-600" : ""}
              `}
                onClick={() => {
                  setActive(item.id);
                }}
              >
                {item.button}
                <p className=" hidden group-hover:block text-white ">
                  {item.title}
                </p>
              </NavLink>
            );
          })}
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
