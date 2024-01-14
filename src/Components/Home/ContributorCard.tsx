import React from "react";
import { BsThreeDots } from "react-icons/bs";
import contrubutor from "../../assets/images/contrubutor.png";
import eth from "../../assets/images/eth.png";

interface CardProps {
  name: string;
  ethAmount: string;
}

 const ContributorCard: React.FC <CardProps> = ({name, ethAmount }) => {

  return (
    <>
    <div className=" flex gap-5 justify-center items-center rounded-md text-white border-[2.2px] border-violet-800 p-2">

      <div className="flex justify-center items-center gap-1">
        <img src={contrubutor} alt="" height={50} width={50} />
      <div>
        <h2 className=" text-sm">{name}</h2>
        <p className="text-sm flex items-center gap-1"><img src={eth} alt="" width={15} height={15} /><span>{ethAmount} ETH</span></p>
      </div>
      </div>


      <div className=" cursor-pointer">
      <BsThreeDots fontSize={20} />
      </div>

    </div>
    </>
  );
 };

export default ContributorCard;
