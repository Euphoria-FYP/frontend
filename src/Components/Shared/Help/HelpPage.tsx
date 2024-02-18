import React from "react";
import HeaderSection from "../Header/HeaderSection";
import FAQ from "../../../Components/Home/FAQ";

const HelpPage = () => {
  return (
    <>
      <HeaderSection />
      <div className="h-full">
        <h1 className=" text-5xl p-16 text-white font-bold ">Help Center</h1>
        <FAQ />
        <div className=" px-20 py-10 ">
          <hr className="border-t border-gray-300" />
        </div>

        <div className="flex px-16 py-10">
          {/* first Section */}
          <div className=" w-[50%]">
            <h1 className=" text-3xl text-white font-bold">
              Submit your question
            </h1>
            <p className=" text-lg text-white w-2/3 pt-4 leading-7">
              {" "}
              Didn’t find the solution. We are here to help. Send us your
              questions and we will get back to you.{" "}
            </p>
          </div>

          {/* Second Section */}
          <div className=" flex flex-col w-[50%]">
            <input
              type="text"
              placeholder="Collection Name"
              name="name"
              id="name"
              className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
            />
            <div className=" flex gap-4">
              <div className="flex-1">
                <input
                  type="name"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                />
              </div>
            </div>
            <textarea
              name=""
              id=""
              placeholder="Write a description of your collection"
              cols={5}
              rows={5}
              className="collectionforminput rounded-lg  mt-3 w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none collectionforminput"
            />
          </div>
        </div>

        <div className=" px-20 py-10 ">
          <hr className="border-t border-gray-300" />
        </div>

        <div>
          <h1 className=" text-3xl text-white font-bold">
            Ask us anything, anywhere
          </h1>
          <p className=" text-lg text-white w-2/3 pt-4 leading-7">
            {" "}
            Didn’t find the solution. We are here to help. Send us your
            questions and we will get back to you.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default HelpPage;
