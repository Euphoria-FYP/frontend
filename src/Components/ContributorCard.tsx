import React from "react";
import carouselImg1 from "../assets/images/carousel-1.jpeg";

// interface ContributorCardProps {
//   name: string;
//  }
 
 const ContributorCard = () => {

  return (
    <>
    <div className=" flex gap-7 items-center rounded-md text-white border-2 border-violet-800 w-[30%] px-4 py-2">
      <div>
        <img src={carouselImg1} alt="" height={50} width={50} />
      </div>

      <div>
        <h2>Ahsan Omerjee</h2>
        <p>0.88 ETH</p>
      </div>

      <div>
        <p>...</p>
      </div>

    </div>
    </>
  );
 };

export default ContributorCard;
