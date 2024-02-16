import React from "react";
import { IoMdImage } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

const ImageSection = () => {
  return (
    <>
      <div className=" flex gap-3">
        {/* logo upload div */}
        <div className=" flex-1">
          <label className="text-base font-medium">Logo Image</label>
          {/* upload */}
          <div className=" flex gap-5 mt-3 mb-5 border border-gray-500 px-2 py-2 rounded-lg group transition-all hover:border-gray-200 cursor-pointer">
            {/* icon */}
            <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-full h-20 rounded-md">
              <IoMdImage className="block group-hover:hidden text-2xl" />
              <FiUpload className="hidden group-hover:block text-2xl" />
            </div>

            {/* content */}
            <div className=" flex-1 flex flex-col">
              <span className=" text-[13px] font-normal">
                Drag and drop or click to upload
              </span>

              <span className="text-xs font-extralight mt-2">
                File types allowed: JPG, PNG, SVG, or GIF
              </span>
            </div>
          </div>
        </div>

        {/* cover image upload div */}
        <div className=" flex-1">
          <label className="text-base font-medium">
            Cover Image
          </label>
          {/* upload */}
          <div className=" flex gap-5 mt-3 mb-5 border border-gray-500 px-2 py-2 rounded-lg group transition-all hover:border-gray-200 cursor-pointer">
            {/* icon */}
            <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-full h-20 rounded-md">
              <IoMdImage className="block group-hover:hidden text-2xl" />
              <FiUpload className="hidden group-hover:block text-2xl" />
            </div>

            {/* content */}
            <div className=" flex-1 flex flex-col">
              <span className=" text-[13px] font-normal">
                Drag and drop or click to upload
              </span>

              <span className="text-xs font-extralight mt-2">
                File types allowed: JPG, PNG, SVG, or GIF
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
