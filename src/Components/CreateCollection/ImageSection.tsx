import React, { useState } from "react";
import { IoMdImage } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

const ImageSection = ({
  label1,
  label2,
}: {
  label1: string;
  label2: string;
}) => {
  const [logoFile, setlogoFile] = useState<File | null>(null);
  const [logoPreview, setlogoPreview] = useState<string | null>(null);

  const [coverFile, setcoverFile] = useState<File | null>(null);
  const [coverPreview, setcoverPreview] = useState<string | null>(null);

  const handleLogoSelect = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setlogoFile(file);
      // Read the selected file and set image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setlogoPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverSelect = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setcoverFile(file);
      // Read the selected file and set image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setcoverPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
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
            className={` ${
              logoPreview && "hidden"
            } flex justify-center items-center gap-5 mt-3 mb-5 border border-gray-500 px-2 py-3 rounded-lg group transition-all hover:border-gray-200 cursor-pointer`}
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
              <span className=" text-[14px] font-bold">
                Drag and drop or click to upload
              </span>

              <span className="text-[13px] font-extralight mt-2">
                File types allowed: JPG, PNG, SVG, or GIF
              </span>
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
            className={` ${
              coverPreview && "hidden"
            } flex justify-center items-center gap-5 mt-3 mb-5 border border-gray-500 px-2 py-3 rounded-lg group transition-all hover:border-gray-200 cursor-pointer`}
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
              <span className="text-[14px] font-bold">
                Drag and drop or click to upload
              </span>

              <span className="text-[13px] font-extralight mt-2">
                File types allowed: JPG, PNG, SVG, or GIF
              </span>
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
