import React, { useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import Eth from "../../assets/images/eth_bc.png";

const CollectionForm = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);

  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  return (
    <>
      {/* main div */}
      <div className=" flex flex-col gap-6">
        {/* first input */}
        <div>
          <label className="text-md leading-md font-semibold">
            Contract name
          </label>
          <input
            type="text"
            placeholder="Collection Name"
            name="search"
            id="search"
            className=" collectionforminput rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
          />
        </div>

        {/* dropdowns */}
        <div className=" flex gap-4">
          {/* first dropdown */}
          <div className=" flex-1">
            <label className="text-md leading-md font-semibold">Category</label>
            <div className=" flex flex-col gap-2 w-[330px]] mt-3  ">
              <button
                className=" flex justify-between items-center rounded-lg text-base font-light collectionforminput"
                onClick={() => handleDropDownClick(0)}
              >
                <span>Add Categories</span>
                {openDropDown[0] ? (
                  <IoIosArrowUp className="text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={` ${
                  openDropDown[0] ? "block" : "hidden"
                }  rounded-lg  text-base  scroll-marketplace-dropdown collectiondropdown w-full`}
              >
                <p className=" w-full capitalize font-medium text-sm py-2 px-5 cursor-pointer ">
                  Sports
                </p>
              </div>
            </div>
          </div>

          {/* second dropdown */}
          <div className=" flex-1">
            <label className="text-md leading-md font-semibold">
              Sub Category
            </label>
            <div className=" flex flex-col gap-2 w-[330px] mt-3  ">
              <button
                className=" flex justify-between items-center rounded-lg text-base font-light collectionforminput"
                onClick={() => handleDropDownClick(1)}
              >
                <span>Add Sub Categories</span>
                {openDropDown[1] ? (
                  <IoIosArrowUp className="text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className="text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={` ${
                  openDropDown[1] ? "block" : "hidden"
                }  rounded-lg  text-base  scroll-marketplace-dropdown collectiondropdown w-full`}
              >
                <p className=" w-full capitalize font-medium text-sm py-2 px-5 cursor-pointer ">
                  Sports
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* description */}

        <div>
          <label className="text-md leading-md font-semibold">
            Description
          </label>

          <div className=" mt-3">
            <textarea
              name=""
              id=""
              placeholder="Write a description of your collection"
              cols={5}
              rows={5}
              className="rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none collectionforminput"
            />
          </div>
        </div>

        {/* blockchain */}

        <div>
          <label className="text-md leading-md font-semibold">Blockchain</label>

          <div className="flex flex-col w-[190px] flex-1 rounded-xl px-4 py-6 border-2 border-gray-500 cursor-pointer hover:border-gray-300 mt-3">
            {/* icon */}
            <div className="mb-6 h-8 w-8">
              <img src={Eth} alt="" />
            </div>

            {/* content */}
            <div className=" flex flex-col gap-1">
              <span className="text-md leading-md font-semibold mb-1">
                Ethereum
              </span>

              <span className="text-xs w-28 font-semibold rounded-[8px] bg-gray-600 px-3 py-2 md:my-2">
                Most popular
              </span>

              <span className="text-sm leading-sm text-secondary">
                Estimated cost to deploy contract
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionForm;
