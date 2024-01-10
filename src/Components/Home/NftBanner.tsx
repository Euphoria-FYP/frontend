import StyledButton from "../Shared/StyledButton";
import React from "react";

const NftBanner = () => {
  return (
    <section className=" bg-[url('./assets/images/NFT_Banner.jpeg')] bg-cover bg-center text-white w-4/5 flex  gap-7 mx-auto mb-6 px-20 py-12 rounded-xl">
      <div className=" flex flex-col justify-center items-center gap-7">
        <h1 className=" text-white text-[32px] text-center leading-[40px] tracking-widest font-bold">
          Create, Sell and Collect NFT <br /> Digital Assests
        </h1>
        <p className=" text-white text-center w-[70%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sequi in
          molestiae praesentium voluptatum exercitationem fuga tempore
          voluptates repellendus est, expedita ullam excepturi quaerat eum
        </p>

        <div style={{marginTop:"20px"}}>
        <StyledButton  heading="Create NFT"/>
        </div>
        
      </div>
    </section>
  );
};

export default NftBanner;
