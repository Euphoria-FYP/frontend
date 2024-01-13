import React from "react";
import contrubutor from "../../assets/images/contrubutor.png";
import { BsThreeDots } from "react-icons/bs";

interface CardProps {
  name: string;
  ethAmount: string;
}

 const ContributorCard: React.FC <CardProps> = ({name, ethAmount }) => {

  return (
    <>
    <div className=" flex gap-10 justify-center items-center rounded-md text-white border-2 border-violet-800 p-2">

      <div className="flex justify-center items-center gap-1">
        <img src={contrubutor} alt="" height={50} width={50} />
      <div>
        <h2>{name}</h2>
        <p>{ethAmount}</p>
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
