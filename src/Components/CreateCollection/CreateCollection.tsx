import React from "react";
import SideContent from "./SideContent";
import CollectionForm from "./CollectionForm";
import StyledButton from "../Shared/StyledButton";
import ImageSection from "./ImageSection";

const CreateCollection = () => {
  return (
    <>
      <section className=" w-full md:w-[80%] h-full flex justify-center  gap-12 text-white mx-auto py-10">
        {/* image and  form section */}
        <div className=" w-[90%] md:w-[65%]">
          <h3 className=" text-2xl md:text-4xl font-semibold mb-6">
            Create your Collection
          </h3>
          <ImageSection label1={"Logo Image"} label2={"Cover Image"} />
          <CollectionForm />
        </div>

        {/* side content section */}

        <div className="w-[35%] hidden md:block">
          <SideContent />
        </div>
      </section>
      <div className=" px-4 py-[10px] sticky bottom-0 bg-[#1f2045] flex justify-end items-center border-t-[1px] border-gray-400">
        <div className=" ">
          <StyledButton
            heading="Submit"
            bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
            width={120}
          />
        </div>
      </div>
    </>
  );
};

export default CreateCollection;
