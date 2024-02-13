import React from "react";
import UploadForm from "./UploadForm";
import { FiUpload } from "react-icons/fi";

const UploadNFT = () => {
  return (
    <section className=" w-[80%] h-full flex justify-center gap-12 text-white mx-auto py-10">
      <div className=" w-[45%] flex flex-col">
        <div>
          <h2 className="text-white mb-2 font-semibold text-lg">Upload File</h2>
          <p className=" text-gray-400">Drag or choose your file to upload</p>
        </div>

        <div
          className=" border-[16px] border-slate-900 bg-slate-900 rounded-lg h-fit mt-9 cursor-pointer
          transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:border-[12px] hover:border-[#0077ff]"
        >
          <div className=" flex gap-5 mt-3 mb-5 px-5 py-5">
            {/* icon */}
            <div className=" flex-1 flex flex-col justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-16 h-72 rounded-xl">
              <FiUpload className="text-2xl mb-3" />
              <h1>Drag and drop media</h1>
              <p className=" text-gray-400 text-sm mt-2">Max size: 50MB</p>
              <p className=" text-gray-400 text-sm">JPG, PNG, GIF, SVG, MP4</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-white font-semibold text-xl mb-2 mt-10">Note:</h1>
          <p className=" text-gray-400">Service Fee: 2.5%</p>
        </div>
      </div>

      <div className=" w-[55%] flex flex-col gap-4">
        <UploadForm />
      </div>
    </section>
  );
};

export default UploadNFT;
