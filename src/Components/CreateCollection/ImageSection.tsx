import React, { useState } from "react";
import { IoMdImage } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { convertToBase64 } from "../../helpers/convertToBase64";

const ImageSection = ({
  label1,
  label2,
  firstimg,
  secondimg,
  setFieldValue,
}: {
  label1: string;
  label2: string;
  firstimg: string;
  secondimg: string;
  setFieldValue: any;
}) => {
  const [logoFile, setlogoFile] = useState<File | null>(null);
  const [logoPreview, setlogoPreview] = useState<string | null>(null);

  const [coverFile, setcoverFile] = useState<File | null>(null);
  const [coverPreview, setcoverPreview] = useState<string | null>(null);

  const handleLogoSelect = async (e: any) => {
    const base64 = await convertToBase64(e.target.files && e.target.files[0]);
    setFieldValue("coverPic", base64);
  };

  const handleCoverSelect = async (e: any) => {
    const base64 = await convertToBase64(e.target.files && e.target.files[0]);
    setFieldValue("backgroundPic", base64);
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row md:gap-3">
        {/* logo upload div */}
        <div
          className=" flex-1"
          onClick={() => {
            document.getElementById("uploadlogo")?.click();
          }}
        >
          <label className="text-base font-semibold">{label1}</label>
          {/* upload */}
          <div
            className={`flex justify-center items-center gap-5 mt-3 mb-5 border border-gray-500 px-2 py-3 rounded-lg group transition-all hover:border-gray-200 cursor-pointer`}
          >
            {/* icon */}
            <input
              type="file"
              className=" hidden"
              id="uploadlogo"
              onChange={handleLogoSelect}
            />
            <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-full h-20 rounded-md">
              <IoMdImage className="block group-hover:hidden text-2xl transition-all duration-300" />
              <FiUpload className="hidden group-hover:block text-2xl transition-all duration-300" />
            </div>

            {/* content */}
            <div className=" flex-1 flex flex-col">
              <h3 className="text-[14px] font-semibold">
                Drag and drop or click to upload
              </h3>

              {/* <h3 className="text-[13px] font-extralight mt-2">
                File types allowed: JPG, PNG, SVG, or GIF
              </h3> */}
            </div>
          </div>
          {logoPreview && (
            <img
              src={logoPreview}
              alt="Preview"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>

        {/* cover image upload div */}
        <div
          className=" flex-1"
          onClick={() => {
            document.getElementById("uploadcover")?.click();
          }}
        >
          <label className="text-base font-semibold">{label2}</label>
          {/* upload */}
          <div
            className={`flex justify-center items-center gap-5 mt-3 mb-5 border border-gray-500 px-2 py-3 rounded-lg group transition-all hover:border-gray-200 cursor-pointer`}
          >
            {/* icon */}
            <input
              type="file"
              className=" hidden"
              id="uploadcover"
              onChange={handleCoverSelect}
            />
            <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-full h-20 rounded-md">
              <IoMdImage className="block group-hover:hidden text-2xl" />
              <FiUpload className="hidden group-hover:block text-2xl" />
            </div>

            {/* content */}
            <div className=" flex-1 flex flex-col">
              <h3 className="text-[14px] font-semibold">
                Drag and drop or click to upload
              </h3>

              {/* <h3 className="text-[13px] font-extralight mt-2">
                File types allowed: JPG, PNG, SVG, or GIF
              </h3> */}
            </div>
          </div>
          {coverPreview && (
            <img
              src={coverPreview}
              alt="Preview"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageSection;
