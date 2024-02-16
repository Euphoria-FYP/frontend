import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { MdWallet } from "react-icons/md";
import { NavLink } from "react-router-dom";
import StyledButton from "../StyledButton";

const HeaderSection = () => {
    const [isVisible, setVisible] = useState(false);

    const listenToScroll = () => {
        let heightScroll = 200; 
        const windowScroll =
            (document.body.scrollTop || document.documentElement.scrollTop); 
        if (windowScroll > heightScroll) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll) 
        return () => window.removeEventListener('scroll', listenToScroll) 
    }, [])
  return (
    <>
      <header className={` flex flex-col w-full z-[20000] ${isVisible ? 'default-header  scroll-header' : 'default-header '}`}>
        <section className=" flex justify-between items-center w-[80%] py-[14px] mx-auto">
          <div className=" flex justify-center gap-8 items-center">
            <NavLink
              to={"#drop"}
              className={
                " text-white font-semibold hover:text-[#ffffffcc] tracking-wide transition-all duration-200 ease-in-out transform-gpu"
              }
            >
              Drops
            </NavLink>
            <NavLink
              to={"/create-collection"}
              className={
                " text-white font-semibold hover:text-[#ffffffcc] tracking-wide transition-all duration-200 ease-in-out transform-gpu"
              }
            >
              Create NFT
            </NavLink>
          </div>
          <div className=" relative w-[40%]">
            <BiSearchAlt className=" absolute text-2xl text-white z-50 top-3 left-4" />
            <input
              type="text"
              placeholder="Search"
              name="search"
              id="search"
              className=" headerInputSearch rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none"
            />
            <div className="headerInputSearchSlash"> /</div>
          </div>
          <StyledButton
            heading="Connect Wallet"
            hoverEffect="headerConnectBtn"
            icon={<MdWallet className=" text-[22px] text-white"/>}
            width={190}
          />
        </section>
        <hr className={`${isVisible ? 'w-[100%]' : 'w-[90%]'} text-[#858586] mx-auto`} />
      </header>
    </>
  );
};

export default HeaderSection;
