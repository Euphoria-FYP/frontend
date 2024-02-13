import React from "react";
import StyledButton from "../Shared/StyledButton";

const UploadForm = () => {
  return (
    <>
      {/* main div */}
      <div className=" flex flex-col gap-6">
        {/* first input */}
        <div>
          <label className="text-md leading-md font-semibold">
            Product Name
          </label>
          <input
            type="text"
            placeholder="e.g. `Digital Awesome Game` "
            name="search"
            id="search"
            className=" collectionforminput rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
          />
        </div>

        {/* Price */}
        <div className=" flex gap-4">
          {/* Price in $ */}
          <div className="flex-1">
            <label className="text-md leading-md font-semibold">
              Base Price in $
            </label>
            <input
              type="number"
              placeholder="e.g. `20$` "
              name="price"
              id="price"
              className=" collectionforminput rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
            />
          </div>
          {/* Price in Eth */}
          <div className="flex-1">
            <label className="text-md leading-md font-semibold">
              Base Price in Eth
            </label>
            <input
              type="number"
              placeholder=""
              name="price"
              id="price"
              disabled
              className=" collectionforminput disabled rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
            />
          </div>
        </div>

        {/* Royalty */}
        <div className="flex-1">
          <label className="text-md leading-md font-semibold">
            Creator Earning
          </label>
          <input
            type="number"
            placeholder="e.g `0%-5%` "
            name="price"
            id="price"
            className=" collectionforminput rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
          />
        </div>

        {/* Date */}
        <div className=" flex gap-4">
          {/* Start Date */}
          <div className="flex-1">
            <label className="text-md leading-md font-semibold">
              Start Date
            </label>
            <input
              type="date"
              placeholder=""
              name="date"
              id="date"
              className=" collectionforminput rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
            />
          </div>
          {/* End Date */}
          <div className="flex-1">
            <label className="text-md leading-md font-semibold">End Date</label>
            <input
              type="date"
              placeholder=""
              name="date"
              id="date"
              className=" collectionforminput rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none mt-3"
            />
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
              placeholder="e.g. `After purchasing the product you can get item`..."
              cols={5}
              rows={5}
              className="rounded-lg w-full placeholder:text-white placeholder:text-base placeholder:font-light placeholder:tracking-wide focus:outline-none collectionforminput"
            />
          </div>
        </div>

        {/* Button */}
        <div className="mt-4 md:mt-0 flex gap-5 w-full">
          <StyledButton
            heading="Preview"
            bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
            width={250}
          />
          <StyledButton
            heading="Submit"
            bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
            width={250}
          />
        </div>
      </div>
    </>
  );
};

export default UploadForm;
