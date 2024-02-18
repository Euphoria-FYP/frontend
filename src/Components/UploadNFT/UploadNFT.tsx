import React, { useState } from "react";
import UploadForm from "./UploadForm";
import { FiUpload } from "react-icons/fi";

const UploadNFT = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileSelect = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Read the selected file and set image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className=" w-full md:w-[80%] h-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 text-white mx-auto py-10">
      <div className=" w-[90%] md:w-[45%] flex flex-col">

        <div>
          <h2 className="text-white mb-2 font-semibold text-base">
            Upload File
          </h2>
          <p className=" text-[15px] font-light text-gray-400">
            Drag or choose your file to upload
          </p>
        </div>

        <div
          className=" border-[16px] border-slate-900 bg-slate-900 rounded-lg h-[17rem] md:h-fit mt-9 cursor-pointer
          transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:border-[12px] hover:border-[#0077ff]"
          onClick={() => {
            document.getElementById("uploadfile")?.click();
          }}
        >
          <div
            className={`flex gap-5 ${
              imagePreview ? "" : "md:mt-5 md:mb-5 md:py-5"
            } px-2 md:px-5`}
          >
            <input
              type="file"
              className="hidden"
              id="uploadfile"
              onChange={handleFileSelect}
            />
            {/* icon */}
            <div
              className={` ${
                imagePreview && "hidden"
              } flex-1 flex flex-col justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-48 md:w-16 h-60 md:h-72 rounded-lg`}
            >
              <FiUpload className="text-2xl mb-3" />
              <h1 className=" text-lg">Drag and drop media</h1>
              <p className=" text-gray-400 text-sm mt-2">Max size: 50MB</p>
              <p className=" text-gray-400 text-sm">JPG, PNG, GIF, SVG, MP4</p>
            </div>
          </div>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>

        <div>
          <h1 className="text-white font-semibold text-base mb-2 mt-10">
            Note:
          </h1>
          <p className=" text-[15px] font-light text-gray-400">
            Service Fee: 2.5%
          </p>
        </div>

      </div>

      <div className=" w-[90%] md:w-[55%] flex flex-col gap-4">
        <UploadForm />
      </div>
    </section>
  );
};

export default UploadNFT;
