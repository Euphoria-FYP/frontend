import React from "react";
import { BsThreeDots } from "react-icons/bs";
import contrubutor from "../../assets/images/contrubutor.png";
import eth from "../../assets/images/eth.png";

interface CardProps {
  name: string;
  ethAmount: string;
}

const ContributorCard: React.FC<CardProps> = ({ name, ethAmount }) => {
  return (
    <>
      <div className=" flex flex-col gap-5 justify-center items-center rounded-md text-white p-2">
        <img
          src={
            "https://html.ditsolution.net/nftpro/assets/images/resource/seller3.png"
          }
          className=" rounded-md"
          alt=""
          height={100}
          width={100}
        />
        <div className=" flex flex-col justify-center items-center gap-2">
          <h4 className="text-xl font-semibold cursor-pointer hover:text-[#B900FF] transition-colors duration-300 ease-in-out">
            {name}
          </h4>
          <p className=" text-[17px] text-[#B900FF]">{ethAmount} ETH</p>
        </div>
      </div>
    </>
  );
};

export default ContributorCard;
