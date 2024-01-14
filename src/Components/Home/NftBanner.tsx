import StyledButton from "../Shared/StyledButton";
import React from "react";

const NftBanner = () => {
  return (
    <section className=" bg-[url('./assets/images/ConnectWalletBackground.jpg')] bg-cover bg-center text-white
    w-full md:w-[66%] flex justify-center items-center gap-7 mx-auto mb-6 md:px-20 px-4 md:py-10 py-14 md:rounded-xl rounded-none">
      <div className=" flex flex-col justify-center items-center gap-4 mx-auto">
        <h1 className=" text-white text-[30px] md:text-[35px] text-center leading-[45px] tracking-widest font-bold">
          Create, Sell and Collect <br /> NFT Digital Assests
        </h1>
        <p className=" text-[#cfcfcf] text-center text-sm md:text-base w-full md:w-[70%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sequi in
          molestiae praesentium voluptatum exercitationem fuga tempore
          voluptates repellendus est, expedita ullam excepturi quaerat eum
        </p>

        <div className=" mt-2">
          <StyledButton heading="Create NFT" width={160} />
        </div>
      </div>
    </section>
  );
};

export default NftBanner;
