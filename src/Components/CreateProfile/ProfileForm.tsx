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

const ProfileForm = () => {
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
          <div className="flex gap-3">
            {/* first input */}
            <div className="flex-1">
              <label className="text-base font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
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

            {/* second input */}
            <div className="flex-1">
              <label className="text-base font-medium">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
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
          </div>

          {/* wallet address */}
          <div className="flex-1">
            <label className="text-base font-medium">Wallet Address</label>
            <input
              type="text"
              placeholder="Enter your Metamask wallet address"
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

          <div className="flex gap-2">

            <div className="flex-1">
              <label className="text-base font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
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

            <div className="flex-1">
              <label className="text-base font-medium">Secret Key</label>
              <input
                type="text"
                placeholder="Enter your secret key"
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
          </div>

          <StyledButton
              heading="Submit"
              bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
              width={150}
            />

        </div>
      </form>
    </>
  );
};

export default ProfileForm;
