import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BiSearchAlt, BiCollection, BiDroplet } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import Art from "../../assets/images//art.jpg";
import Game from "../../assets/images//game.jpg";
import Music from "../../assets/images//music.jpg";
import Sports from "../../assets/images//sports.jpg";
import Collection from "../../assets/images/collection.png";

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
    button: <TbCategoryPlus className=" text-white text-[24px] " />,
    link: "/",
    title: "Categories",
    dropdownitems: [
      {
        title: "Sports",
        img: Sports,
      },
      {
        title: "Game",
        img: Game,
      },
      {
        title: "Art",
        img: Art,
      },
    ],
  },
  {
    id: 4,
    button: <BiCollection className=" text-white text-[24px] " />,
    link: "/",
    title: "Collections",
    dropdownitems: [
      {
        title: "BabarSon",
        username: "obaid2003",
        img: Collection,
      },
      {
        title: "RunMachine",
        username: "dani123",
        img: Collection,
      },
      {
        title: "Ronaldo",
        username: "ahsan2005",
        img: Collection,
      },
    ],
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState<number>(1);
  const [dropDown, setDropDown] = useState<boolean[]>([false, true]);

  const handleDropdownClick = (index: number | null) => {
    if (index !== null) {
      const newDropDown = [...dropDown]; // Create a copy of the current state

      // Toggle the state of the clicked index
      newDropDown[index] = !newDropDown[index];

      setDropDown(newDropDown); // Update the state
    }
  };

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
      transition-width duration-300 ease-out delay-250 overflow-y-scroll scrollbarHide"
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
              <>
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={`flex items-center gap-3 py-[8px] pl-4 pr-2 rounded-e-[20px] w-full
                ${active === item.id ? "bg-slate-500" : ""}
                ${active !== item.id ? "hover:bg-slate-600" : ""}
              `}
                  onClick={() => {
                    setActive(item.id);

                    (item.title === "Categories" ||
                      item.title === "Collections") &&
                      handleDropdownClick(item.title === "Categories" ? 0 : 1);
                  }}
                >
                  {item.button}
                  <p className=" hidden group-hover:block text-white ">
                    {item.title}
                  </p>
                  {item.title === "Categories" && (
                    <span className={`hidden ml-auto group-hover:block`}>
                      {dropDown[0] ? (
                        <IoIosArrowDown className="text-xl text-white" />
                      ) : (
                        <IoIosArrowBack className="text-xl text-white" />
                      )}
                    </span>
                  )}
                  {item.title === "Collections" && (
                    <span className={`hidden ml-auto group-hover:block`}>
                      {dropDown[1] ? (
                        <IoIosArrowDown className="text-xl text-white" />
                      ) : (
                        <IoIosArrowBack className="text-xl text-white" />
                      )}
                    </span>
                  )}
                </NavLink>
                {item.title === "Categories" && dropDown[0] && (
                  <div className="flex-col justify-start items-start gap-3 py-[4px] pl-12 pr-2 rounded-e-[20px] w-full hidden group-hover:flex text-white ">
                    {item.dropdownitems?.map((dropdown, i) => {
                      return (
                        <div className=" flex  justify-start items-center gap-3 py-[4px]">
                          <img
                            src={dropdown.img}
                            className=" rounded-md w-8 h-8"
                            alt=""
                          />
                          <a href="">{dropdown.title}</a>
                        </div>
                      );
                    })}
                  </div>
                )}
                {item.title === "Collections" && dropDown[1] && (
                  <div className="flex-col justify-start items-start gap-3 py-[4px] pl-12 pr-2 rounded-e-[20px] w-full hidden group-hover:flex text-white">
                    {item.dropdownitems?.map((dropdown: any, i) => {
                      return (
                        <div className=" flex  justify-start items-center gap-3 py-[4px]">
                          <img
                            src={dropdown.img}
                            className="rounded-md w-8 h-8"
                            alt=""
                          />
                          <div className=" flex flex-col">
                            <a className=" text-base" href="">
                              {dropdown.title}
                            </a>
                            <span className=" text-sm text-[#B900FF]">
                              @{dropdown.username}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="flex justify-start items-center gap-4 sticky bottom-0 mt-5 text-white w-full">
        <img
          src={profileImg}
          alt="profile"
          className=" ml-4 w-10 h-10 rounded-[50%] object-cover"
        />
        <div className="hidden group-hover:block w-full">
          <h4 className=" text-lg">Ahsan Omerjee</h4>
          <span className="text-base text-[#B900FF]">@ahsan2002</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
