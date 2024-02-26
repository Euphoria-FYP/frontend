import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Eth from "../../assets/images/eth_bc.png";
import { useFormik } from "formik";
import { CreateCollectionSchema } from "../../helpers/Validations/CreateCollectionSchema";
import ValidationError from "../Shared/Validation/ValidationError";
import StyledButton from "../Shared/StyledButton";
import ImageSection from "./ImageSection";
import { useDispatch } from "react-redux";
import { createCollection } from "../../redux/slices/createCollection";
import collection1 from "../../assets/images/collection/c1.jpeg";
import collection2 from "../../assets/images/collection/c2.jpeg";
import collection3 from "../../assets/images/collection/c3.jpeg";
import collection4 from "../../assets/images/collection/c4.jpeg";

const initialValues = {
  userId: "",
  logoImage: "",
  coverImage: "",
  createdAt: "",
  createdBy: "Ahsan Omerjee",
  creatorEarning: "",
  totalItems: 2000,
  Listings: [],
  featured: false,
  img1: collection1,
  img2: collection2,
  img3: collection3,
  img4: collection4,
  name: "",
  description: "",
  tag: "",
  category: "",
};

const CollectionForm = () => {
  const dispatch = useDispatch();
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
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: CreateCollectionSchema,

    onSubmit: (values, action) => {
      console.log("done", values);
      dispatch(createCollection({ ...values, id: "1" }));
      // action.resetForm();
    },
  });

  return (
    <>
      {/* main div */}
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-6 px-5 md:pl-28 pt-16 pb-16 md:pb-28">
          <h3 className=" text-2xl md:text-4xl font-semibold">
            Create your Collection
          </h3>
          <ImageSection
            name1="logoImage"
            name2="coverImage"
            firstimg={values.logoImage}
            secondimg={values.coverImage}
            setFieldValue={setFieldValue}
            label1={"Logo Image"}
            label2={"Cover Image"}
          />
          {/* first input */}
          <div>
            <label className="text-base font-medium">Contract name</label>
            <input
              type="text"
              placeholder="Collection Name"
              name="name"
              value={values.name}
              className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ValidationError
              errors={errors}
              touched={touched}
              fieldName="name"
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
                  <span>{values.tag ? values.tag : "Select Category"}</span>
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
                  <p
                    className=" w-full capitalize font-normal text-sm py-2 px-5 cursor-pointer "
                    onClick={() => {
                      setFieldValue("tag", "Sports");
                      setOpenDropDown([false, false]);
                    }}
                  >
                    Sports
                  </p>
                </div>
              </div>
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="category"
              />
            </div>

            {/* second dropdown */}
            <div className=" flex-1">
              <label className="text-base font-medium">Sub Category</label>
              <div className=" flex flex-col gap-2 mt-3  ">
                <button
                  className=" flex justify-between items-center rounded-lg text-[13px] font-extralight collectionforminput"
                  onClick={() => handleDropDownClick(1)}
                >
                  <span>
                    {values.category ? values.category : "Select Sub Category"}
                  </span>
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
                  <p
                    className=" w-full capitalize font-normal text-sm py-2 px-5 cursor-pointer "
                    onClick={() => {
                      setFieldValue("category", "Cricket");
                      setOpenDropDown([false, false]);
                    }}
                  >
                    Sports
                  </p>
                </div>
              </div>
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="subCategory"
              />
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

        <div className=" md:absolute w-full px-4 py-[10px] bottom-0 bg-[#1f2045] flex justify-end items-center border-t-[1px] border-gray-400">
          <StyledButton
            heading="Continue"
            bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
            width={120}
          />
        </div>
      </form>
    </>
  );
};

export default CollectionForm;
