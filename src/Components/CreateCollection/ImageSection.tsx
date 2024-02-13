import React from "react";
import { IoMdImage } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

const ImageSection = () => {
  return (
    <>
      <div className=" flex gap-3">
        {/* logo upload div */}
        <div className=" flex-1">
          <label className="text-md leading-md font-semibold">Logo Image</label>
          {/* upload */}
          <div className=" flex gap-5 mt-3 mb-5 border border-gray-500 px-5 py-5 rounded-xl group transition-all hover:border-gray-200 cursor-pointer">
            {/* icon */}
            <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-full h-20 rounded-md">
              <IoMdImage className="block group-hover:hidden text-2xl" />
              <FiUpload className="hidden group-hover:block text-2xl" />
            </div>

            {/* content */}
            <div className=" flex-1 flex flex-col">
              <span className=" text-sm leading-md font-semibold">
                Drag and drop or click to upload
              </span>

              <span className="text-xs leading-sm mt-2 text-secondary">
                File types allowed: JPG, PNG, SVG, or GIF
              </span>
            </div>
          </div>
        </div>

        {/* cover image upload div */}
        <div className=" flex-1">
          <label className="text-md leading-md font-semibold">
            Cover Image
          </label>
          {/* upload */}
          <div className=" flex gap-5 mt-3 mb-5 border border-gray-500 px-5 py-5 rounded-xl group transition-all hover:border-gray-200 cursor-pointer">
            {/* icon */}
            <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-full h-20 rounded-md">
              <IoMdImage className="block group-hover:hidden text-2xl" />
              <FiUpload className="hidden group-hover:block text-2xl" />
            </div>

            {/* content */}
            <div className=" flex-1 flex flex-col">
              <span className=" text-sm leading-md font-semibold">
                Drag and drop or click to upload
              </span>

              <span className="text-xs leading-sm mt-2 text-secondary">
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
