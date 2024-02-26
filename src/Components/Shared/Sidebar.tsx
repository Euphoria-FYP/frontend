import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import profileImg from "../../assets/images/profileImg.jpeg";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BiSearchAlt, BiCollection, BiDroplet } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Art from "../../assets/images//art.jpg";
import Game from "../../assets/images//game.jpg";
import Music from "../../assets/images//music.jpg";
import Sports from "../../assets/images//sports.jpg";
import Collection from "../../assets/images/collection.png";
import MessiLogo from "../../assets/images/messi.jpg";

import UserLogo1 from "../../assets/images/user2.png";
import { AllCollections } from "../../data";

interface Props {
  openMobileSidebar: boolean;
  setOpenMobileSidebar: (value: boolean) => void;
}

const Sidebar = (props: Props) => {
  const { openMobileSidebar, setOpenMobileSidebar } = props;
  const location = useLocation();
  const [active, setActive] = useState<number>(1);
  const [dropDown, setDropDown] = useState<boolean[]>([false, true]);
  const [collections, setCollections] = useState<
    Array<{
      id: number | null;
      title: string;
      logo: string;
      tag: string;
    }>
  >([
    {
      id: null,
      title: "",
      logo: "",
      tag: "",
    },
  ]);

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

  useEffect(() => {
    const updatedCollections = AllCollections.map((item) => ({
      id: item.id,
      title: item.name,
      logo: item.logo,
      tag: item.tag,
    }));
    setCollections(updatedCollections);
  }, [AllCollections]);

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
      categoriesdropdownitems: [
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
      dropdownitems: collections,
    },
    {
      id: 5,
      button: (
        <HiOutlineQuestionMarkCircle className=" text-white text-[24px] " />
      ),
      link: "/help",
      title: "Help Center",
    },
  ];
  const [userId, setUserId] = useState<string>("");
  useEffect(() => {
    const id = window.localStorage.getItem("id");
    setUserId(id as string);
  }, [window.localStorage.getItem("id")]);
  console.log("user id ", userId);

  return (
    <div
      className={`${
        openMobileSidebar
          ? " fixed top-0 md:w-[70px] md:hover:w-64 w-[70%]"
          : " md:w-[70px] md:hover:w-64 w-0"
      } flex py-4 fixed flex-col  hover:items-start justify-between border-r border-[#858586] h-full bg-[#1f2045] pl-0 z-[2000] group transition-width duration-300 ease-out delay-250`}
    >
      <div
        className={`${
          openMobileSidebar ? " w-60" : "w-0"
        } flex flex-col  md:w-[60px] md:group-hover:w-60 group-hover:items-start gap-8 
      transition-width duration-300 ease-out delay-250 overflow-y-scroll scrollbarHide`}
      >
        <div className=" w-full flex justify-between items-center">
          <img
            src={logoImg}
            alt="logo"
            className=" ml-3 w-10 h-10 rounded-[50%] object-cover"
          />
          <IoClose
            className=" md:hidden text-2xl text-white"
            onClick={() => setOpenMobileSidebar(false)}
          />
        </div>
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
                  <p
                    className={`${
                      openMobileSidebar && "block"
                    } md:hidden md:group-hover:block text-white `}
                  >
                    {item.title}
                  </p>
                  {item.title === "Categories" && (
                    <span
                      className={`${
                        openMobileSidebar && "block"
                      } md:hidden ml-auto md:group-hover:block`}
                    >
                      {dropDown[0] ? (
                        <IoIosArrowDown className="text-xl text-white" />
                      ) : (
                        <IoIosArrowBack className="text-xl text-white" />
                      )}
                    </span>
                  )}
                  {item.title === "Collections" && (
                    <span
                      className={`${
                        openMobileSidebar && "block"
                      } md:hidden ml-auto md:group-hover:block`}
                    >
                      {dropDown[1] ? (
                        <IoIosArrowDown className="text-xl text-white" />
                      ) : (
                        <IoIosArrowBack className="text-xl text-white" />
                      )}
                    </span>
                  )}
                </NavLink>
                {item.title === "Categories" && dropDown[0] && (
                  <div
                    className={`${
                      openMobileSidebar && "block"
                    } flex-col md:justify-start justify-between items-start gap-3 py-[4px] pl-12 pr-2 rounded-e-[20px] w-full md:hidden md:group-hover:flex text-white `}
                  >
                    {item.categoriesdropdownitems?.map((dropdown, i) => {
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
                  <div
                    className={`${
                      openMobileSidebar && "block"
                    } flex-col md:justify-start justify-between items-start gap-3 py-[4px] pl-12 pr-2 rounded-e-[20px] w-full md:hidden md:group-hover:flex text-white overflow-y-scroll h-40 scroll-marketplace-dropdown `}
                  >
                    {item.dropdownitems?.map((dropdown: any, i) => {
                      return (
                        <NavLink
                          className=" text-sm"
                          to={`/collection/${dropdown.tag}/${dropdown.id}`}
                        >
                          <div className=" flex  justify-start items-center gap-3 py-[4px]">
                            <img
                              src={dropdown.logo}
                              className="rounded-md w-8 h-8"
                              alt=""
                            />
                            <div className=" flex flex-col">
                              {dropdown.title}
                            </div>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      {<>{console.log("bechma", userId)}</>}
      <NavLink to={userId ? `/profile/${userId}` : `/profile/1`}>
        <div
          className={` flex justify-start items-center gap-4  bottom-0 mt-5 text-white`}
        >
          <img
            src={UserLogo1}
            alt="profile"
            className=" ml-4 w-10 h-10 rounded-[50%] object-cover"
          />
          <div
            className={`${
              openMobileSidebar ? "block" : "hidden"
            } md:hidden md:group-hover:flex flex-col`}
          >
            <h4 className="text-lg">Lionel Messi</h4>
            <span className=" text-base text-[#B900FF]">@messi10</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
