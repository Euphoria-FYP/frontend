import React, { useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import Eth from "../../assets/images/eth_bc.png";
import { useFormik } from "formik";
import { CreateCollectionSchema } from "../../helpers/Validations/CreateCollectionSchema";
import ValidationError from "../Shared/Validation/ValidationError";
import StyledButton from "../Shared/StyledButton";

const initialValues = {
  collectionName: "",
  description: "",
};

const CollectionForm = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);

  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };
  const {
    values,
    setValues,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: CreateCollectionSchema,

    onSubmit: (values, action) => {
      console.log("done", values);
      action.resetForm();
    },
  });

  return (
    <>
      {/* main div */}
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-6">
          {/* first input */}
          <div>
            <label className="text-base font-medium">Contract name</label>
            <input
              type="text"
              placeholder="Collection Name"
              name="collectionName"
              value={values.collectionName}
              className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ValidationError
              errors={errors}
              touched={touched}
              fieldName="collectionName"
            />
          </div>

          {/* dropdowns */}
          <div className=" flex flex-col md:flex-row gap-4">
            {/* first dropdown */}
            <div className=" flex-1">
              <label className="text-base font-medium">Category</label>
              <div className=" flex flex-col gap-2 mt-3  ">
                <button
                  className=" flex justify-between items-center rounded-lg text-[13px] font-extralight collectionforminput"
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
                  <p className=" w-full capitalize font-normal text-sm py-2 px-5 cursor-pointer ">
                    Sports
                  </p>
                </div>
              </div>
            </div>

            {/* second dropdown */}
            <div className=" flex-1">
              <label className="text-base font-medium">Sub Category</label>
              <div className=" flex flex-col gap-2 mt-3  ">
                <button
                  className=" flex justify-between items-center rounded-lg text-[13px] font-extralight collectionforminput"
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
                  <p className=" w-full capitalize font-normal text-sm py-2 px-5 cursor-pointer ">
                    Sports
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* description */}

          <div>
            <label className="text-base font-medium">Description</label>

            <div>
              <textarea
                name="description"
                placeholder="Write a description of your collection"
                cols={5}
                rows={5}
                value={values.description}
                className="collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="description"
              />
            </div>
          </div>

          {/* blockchain */}

          <div>
            <label className="text-base font-medium">Blockchain</label>

            <div className="flex flex-col w-[160px] flex-1 rounded-xl px-4 py-4 border-2 cursor-pointer border-gray-300 mt-3">
              {/* icon */}
              <div className="flex gap-2 items-center mb-3 ">
                <img src={Eth} alt="" className="h-8 w-8" />
                <span className="text-lg font-medium ">Ethereum</span>
              </div>

              {/* content */}
              <div className=" flex flex-col gap-3">
                <span className="text-xs w-full text-center font-medium rounded-[8px] bg-gray-600 px-3 py-[10px] tracking-wider md:my-2">
                  Most popular
                </span>

                <span className="text-xs leading-sm font-light text-justify">
                  Estimated cost to deploy contract
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CollectionForm;
