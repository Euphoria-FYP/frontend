import React from "react";
import contrubutor from "../../assets/images/contrubutor.png";
import { BsThreeDots } from "react-icons/bs";

// interface ContributorCardProps {
//   name: string;
//  }
 
 const ContributorCard = () => {

  return (
    <>
    <div className=" flex gap-10 justify-center items-center rounded-md text-white border-2 border-violet-800 p-2">

      <div className="flex justify-center items-center gap-1">
        <img src={contrubutor} alt="" height={50} width={50} />
      <div>
        <h2>Ahsan Omerjee</h2>
        <p>0.88 ETH</p>
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
