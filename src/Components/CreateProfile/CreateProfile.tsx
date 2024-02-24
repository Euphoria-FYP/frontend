import React, { useState } from "react";
import ImageSection from "../CreateCollection/ImageSection";
import ProfileForm from "../CreateProfile/ProfileForm";
import { IoMdImage } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";

const CreateProfile = () => {
  const [option, setOption] = useState<string>("");
  return (
    <>
      <section className=" w-full h-full flex overflow-hidden marketPlaceBgImg">
        {/* first div */}
        <div className="flex flex-col h-screen w-screen max-w-[50vw] items-end transition-all duration-300">
          {/* back btn */}
          <div className="min-h-[64px] w-full items-center justify-start pl-16 mt-5">
            <NavLink to={"/"}>
              <button
                className="inline-flex items-center border-0"
                type="button"
                data-id="UnstyledButton"
              >
                <div className="rounded-[50%] w-10 h-10 border-transparent transition-colors duration-200 ease-in-out bg-gray-500 flex justify-center items-center ">
                  <FaArrowLeft className="text-white" />
                </div>
              </button>
            </NavLink>
          </div>

          <div className="flex flex-col h-full w-full max-w-[960px]  px-16 py-3 transition-all duration-300 overflow-y-scroll scrollbarHide text-white">
            <div
              className={`${option === "Celebrity" || option === "Fan" ? 'hidden' : 'flex'} flex-col gap-10 h-screen w-full justify-center self-center`}
            >
              {/* create  */}
              <div className="flex items-center gap-3 text-white">
                <img
                  src="https://testnets.opensea.io/static/images/logos/opensea-white.svg"
                  alt=""
                  width={50}
                  height={50}
                />
                <h3 className="font-semibold text-3xl">Create</h3>
              </div>

              {/* two btns */}
              <div className="flex flex-col gap-6 pb-6">
                <button
                  className=" py-6 px-6 max-w-[664px] flex items-center justify-between gap-8 border-none bg-gray-800 transform hover:translate-y-[-4px] hover:bg-gray-700 transition-all duration-300 rounded-xl cursor-pointer "
                  onClick={() => {
                    setOption("Celebrity");
                  }}
                >
                  <div className=" flex flex-col items-start gap-4 text-white">
                    <div className=" flex items-center gap-3 text-white">
                      <IoPeopleSharp className=" text-3xl" />
                      <h3 className=" text-lg font-semibold">As a Celebrity</h3>
                    </div>

                    <span>Make your Customized Fan Page</span>
                  </div>

                  <FaArrowRight className=" text-xl text-white" />
                </button>

                <button
                  className=" py-6 px-6 max-w-[664px] flex items-center justify-between gap-8 border-none bg-gray-800 transform hover:translate-y-[-4px] hover:bg-gray-700 transition-all duration-300 rounded-xl cursor-pointer "
                  onClick={() => {
                    setOption("Fan");
                  }}
                >
                  <div className=" flex flex-col items-start gap-4 text-white">
                    <div className=" flex items-center gap-3 text-white">
                      <FaPeopleGroup className=" text-3xl" />
                      <h3 className=" text-lg font-semibold">As a Fan</h3>
                    </div>

                    <span>Browse the Marketplace as a Fan</span>
                  </div>

                  <FaArrowRight className=" text-xl text-white" />
                </button>
              </div>
            </div>

            <div
             className={` ${option === "Celebrity" || option === "Fan" ? `hidden` : `flex`}`}
            >
              <h3 className=" text-2xl md:text-4xl font-semibold mb-4">
                Create your Customized Page
              </h3>

              <div>
                <label className="text-base font-medium">Profile Pic</label>
                <div className="flex justify-center items-center gap-5 mt-3 mb-5 border border-gray-500 px-2 py-3 w-32 h-32 group transition-all hover:border-gray-200 cursor-pointer rounded-[50%]">
                  <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-28 h-28 rounded-[50%]">
                    <IoMdImage className="block group-hover:hidden text-2xl transition-all duration-300" />
                    <FiUpload className="hidden group-hover:block text-2xl transition-all duration-300" />
                  </div>
                </div>
              </div>

              <ImageSection
                label1={"Cover Pic (Optional)"}
                label2={"Background Pic (Optional)"}
              />
              <ProfileForm type={option} />
            </div>
          </div>
        </div>

        {/* second div */}

        <div className="flex flex-col h-screen w-screen max-w-[50vw]">
          <img
            src="https://i.seadn.io/gcs/files/119b00815c5c928f997fbc5be246b447.png"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default CreateProfile;
