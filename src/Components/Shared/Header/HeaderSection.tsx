import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { MdWallet } from "react-icons/md";
import { NavLink, useLocation, useParams, useNavigate } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { requestAccount } from "../../../helpers/ConnectWallet/connect";
import { WalletType } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../../redux/slices/createPage";
import { nanoid } from "@reduxjs/toolkit";

interface Props {
  openMobileSidebar: boolean;
  setOpenMobileSidebar: (value: boolean) => void;
}

const HeaderSection = (props: Props) => {
  const { setOpenMobileSidebar } = props;
  const [isVisible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { id, tag } = useParams();

  const listenToScroll = () => {
    let heightScroll = 200;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > heightScroll) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToDrop = (): void => {
    const dropElement: HTMLElement | null = document.getElementById("drop");
    if (dropElement) {
      dropElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const navigate = useNavigate();

  const userData = useSelector((data: any) => data.createpage.users);
  console.log("userr", userData);

  const userId = parseInt(userData[userData.length - 1].id) + 1;

  const [currentWallet, setCurrentWallet] = useState<WalletType | null>(
    JSON.parse((window as any).localStorage.getItem("walletId"))
  );

  const handleEthAccount = async () => {
    const walletData = await requestAccount();
    window.localStorage.setItem("walletId", JSON.stringify(walletData));
    setCurrentWallet(walletData);

    const existPage = userData.find(
      (item: any) => item.walletAddress === walletData.walletAddress
    );
    if (!existPage) {
      const nanoId = nanoid();
      window.localStorage.setItem("id", nanoId);

      const values = {
        id: nanoId,
        profileLogo: "",
        coverPic: "",
        backgroundPic: "",
        type: "",
        Name: `Guest ${userId}`,
        userName: `guset${userId}`,
        walletAddress: walletData.walletAddress,
      };
      dispatch(addPage(values));
      // navigate(`/create-profile`);
    }
  };

  const handleUserExistForCollection = () => {
    const walletId = window.localStorage.getItem("walletId");
    console.log(JSON.parse(walletId as any));

    const myId = window.localStorage.getItem("id");
    if (myId) {
      const user = userData.find((item: any) => item.id === myId);
      if (user) {
        user.type === ""
          ? navigate("/create-profile")
          : navigate("/create-collection");
      }
    }
  };

  window.onbeforeunload = function () {
    window.localStorage.removeItem("walletId");
    window.localStorage.removeItem("id");
    setCurrentWallet(null);
  };

  useEffect(() => {}, []);

  const [search, setSearch] = useState<string>();
  // const suggestions = [
  //   "Apple",
  //   "Banana",
  //   "Banana",
  //   "Cherry",
  //   "Cherry",
  //   "Cherry",
  //   "Date",
  //   "Elderberry",
  // ];

  return (
    <>
      {location.pathname !== "/upload-nft" &&
        location.pathname !== "/create-collection" &&
        location.pathname !== "/marketplace" &&
        location.pathname !== "/single-collection" &&
        location.pathname !== `/collection/${tag}/${id}` && (
          <header
            className={` flex flex-col w-full z-[20000] ${
              isVisible ? "default-header  scroll-header" : "default-header "
            }`}
          >
            <section className=" flex justify-between items-center md:w-[80%] w-[88%] py-[14px] mx-auto">
              <div className=" flex md:justify-center justify-between md:gap-8 gap-4 items-center">
                <CgMenuLeft
                  className=" md:hidden block text-white text-2xl"
                  onClick={() => setOpenMobileSidebar(true)}
                />
                <button
                  onClick={scrollToDrop}
                  style={{ scrollPadding: "50px" }}
                  className={
                    " text-white md:text-base text-xs font-semibold hover:text-[#ffffffcc] tracking-wide transition-all duration-200 ease-in-out transform-gpu"
                  }
                >
                  Drops
                </button>
                <div
                  onClick={handleUserExistForCollection}
                  className={
                    " cursor-pointer text-white md:text-base text-xs font-semibold hover:text-[#ffffffcc] tracking-wide transition-all duration-200 ease-in-out transform-gpu"
                  }
                >
                  Create NFT
                </div>
                <NavLink
                  to={"/top-collections"}
                  className={
                    " text-white md:text-base text-xs font-semibold hover:text-[#ffffffcc] md:tracking-wide tracking-normal transition-all duration-200 ease-in-out transform-gpu"
                  }
                >
                  Ranking
                </NavLink>
              </div>
              <div className=" relative w-[40%] md:block hidden">
                <BiSearchAlt className=" absolute text-2xl text-white z-50 top-3 left-4" />
                <input
                  placeholder="Search"
                  list="fruits"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className=" headerInputSearch rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none"
                />
                <div className="headerInputSearchSlash"> /</div>
                {/* {search && (
                  <datalist id="fruits">
                    {suggestions.map((fruit, index) => (
                      <option key={index} value={fruit}></option>
                    ))}
                  </datalist>
                )} */}
              </div>
              {currentWallet ? (
                <button
                  className={`w-fit flex justify-center items-center text-center rounded-lg text-white md:px-3 px-[10px] md:py-3 py-[10px] font-semibold transition duration-300 ease-in-out headerConnectBtn hover:shadow-md hover:scale-105`}
                  title={currentWallet.walletAddress}
                >
                  <span className=" pr-2 border-r border-white">
                    <MdWallet className=" md:text-[22px] text-xl text-white" />
                  </span>
                  <span className=" pl-2">{currentWallet.walletBalance}</span>
                </button>
              ) : (
                <button
                  className={`md:w-[190px] w-fit flex justify-center items-center text-center rounded-lg text-white md:px-0 px-[10px] md:py-3 py-[10px] font-semibold transition duration-300 ease-in-out headerConnectBtn hover:shadow-md hover:scale-105`}
                  onClick={handleEthAccount}
                >
                  <span className=" md:mr-2">
                    <MdWallet className=" md:text-[22px] text-xl text-white" />
                  </span>
                  <span className="md:block hidden">Connect Wallet</span>
                </button>
              )}
            </section>
            <hr
              className={`${
                isVisible ? "w-[100%]" : "md:w-[90%] w-[94%]"
              } text-[#858586] mx-auto`}
            />
          </header>
        )}
    </>
  );
};

export default HeaderSection;
