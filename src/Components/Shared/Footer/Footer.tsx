import React from "react";
import logo from "../../../assets/images/logo.png";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800">
        <div className="flex justify-evenly w-full py-10">
          {/* first div */}
          <div className=" flex flex-col gap-10">
            <img src={logo} alt="" width={50} height={50} />
            <p className=" text-[#cfcfcf] ">
              Buy and Sales 100+ Cryptocurrencies with flat currencies
              <br />
              market using bank transfer your credit/debit card.
            </p>
          </div>

          {/* second div */}
          <div className=" flex gap-10 text-[#cfcfcf] ">
            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold">Marketplace</h1>
              <a href="">Explore</a>
              <a href="">All NFT</a>
              <a href="">Collection</a>
              <a href="">Visual World</a>
            </div>

            <div className=" flex flex-col gap-4">
              <h1 className="  font-bold">Resources</h1>
              <a href="">Explore</a>
              <a href="">All NFT</a>
              <a href="">Collection</a>
              <a href="">Visual World</a>
            </div>

            <div className=" flex flex-col gap-4">
              <h1 className=" font-bold">Company</h1>
              <a href="">Explore</a>
              <a href="">All NFT</a>
              <a href="">Collection</a>
              <a href="">Visual World</a>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-gray-400 mb-4 pb-4 w-[100%]"></div>

        {/* third div */}
        <div className="flex justify-around text-[#cfcfcf] p-8">
          <div className=" ">
            <p>&copy; 2022, All rights reserved to be Euphoria NFT</p>
          </div>

          <div className=" flex gap-5">
            <BsFacebook fontSize={20} />
            <ImLinkedin fontSize={20} />
            <IoLogoInstagram fontSize={20} />
            <RxTwitterLogo fontSize={20} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
