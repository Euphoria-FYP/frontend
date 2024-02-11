import React from "react";
import Art from "../../../assets/images/art.jpg";
import Game from "../../../assets/images/game.jpg";
import Music from "../../../assets/images/music.jpg";
import Sports from "../../../assets/images/sports.jpg";

const CollectionCard = () => {
  return (
    <>
      <div className=" text-white bg-slate-800 rounded-md h-50 w-96 px-1 py-3">
        {/* image */}
        

{/* <div className="grid grid-cols-3 gap-4">
  <div className="col-span-2 md:col-span-1">
    <img src={Art} alt="Image 1"/>
  </div>
  <div className="col-span-2 md:col-span-2">
    <img src={Music} alt="Image 4"/>
  </div>
  <div className="col-span-2 md:col-span-1">
    <img src={Sports} alt="Image 2"/>
  </div>
  <div className="col-span-2 md:col-span-1">
    <img src={Game} alt="Image 3"/>
  </div>
</div> */}


<div className="flex gap-5">

    {/* <div>

       <div className="flex">
        <img src={Game} className=" h-20 w-10"  alt="" />
        <img src={Art} className=" h-20 w-10"alt="" />
       </div>
 
    <img src={Sports} className=" h-20 w-10" alt="" />
        
    </div>



    <div>
        <img src={Art} className=" h-20 w-10" alt="" />
    </div> */}

<div className=" flex flex-col">
    <div className=" flex">
<img src={Sports} className=" h-32 w-32" alt="" />
<img src={Game} className=" h-32 w-32" alt="" />
    </div>

    <img src={Art} className=" h-32 w-72" alt="" />

</div>


<img src={Art} className=" h-60 w-32" alt="" />



</div>
        {/* content */}
        <div className="flex flex-col justify-between gap-5 mt-5">
          {/* main heading */}
          <h4>Checks - VV Edition ✅</h4>

          {/* Created by & price */}
          <div className="flex justify-between items-center">
            {/* first div */}
            <div>
              <span className=" text-sm">Created By</span>
              <h3 className=" text-lg font-semibold">Ahsan Omerjee</h3>
            </div>

            {/* second div */}
            <div>
              <span className=" text-sm">Floor</span>
              <h3 className=" text-lg font-semibold">0.48 ETH</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
