import React from "react";
import StyledButton from "../Shared/StyledButton";
import { useFormik } from "formik";
import { UploadnftSchema } from "../../helpers/Validations/UploadnftSchema";
import ValidationError from "../Shared/Validation/ValidationError";

const initialValues = {
  productName: "",
  basePriceDollars: "",
  basePriceETH: "",
  creatorEarning: "",
  startDate: "",
  endDate: "",
  description: "",
};

const UploadForm = () => {
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
    validationSchema: UploadnftSchema,

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
            <label className="text-base font-medium">Product Name</label>
            <input
              type="text"
              placeholder="e.g. Digital Awesome Game"
              name="productName"
              value={values.productName}
              className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ValidationError
              errors={errors}
              touched={touched}
              fieldName="productName"
            />
          </div>

          {/* Price */}
          <div className=" flex gap-4">
            {/* Price in $ */}
            <div className="flex-1">
              <label className="text-base font-medium">Base Price in $</label>
              <input
                type="number"
                placeholder="e.g. 20$ "
                name="basePriceDollars"
                value={values.basePriceDollars}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={(e) => {
                  const dollarValue = e.target.value;
                  setValues((prevValues) => ({
                    ...prevValues,
                    basePriceDollars: dollarValue,
                    basePriceETH: (parseFloat(dollarValue) * 0.000379).toFixed(
                      2
                    ),
                  }));
                }}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="basePriceDollars"
              />
            </div>
            {/* Price in Eth */}
            <div className="flex-1">
              <label className="text-base font-medium">Base Price in Eth</label>
              <input
                type="number"
                disabled
                name="basePriceETH"
                value={values.basePriceETH}
                className=" collectionforminput disabled rounded-lg w-full text-sm font-extralight placeholder:text-white placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* Royalty */}
          <div className="flex-1">
            <label className="text-base font-medium">Creator Earning</label>
            <input
              type="number"
              placeholder="e.g 0%-5%"
              name="creatorEarning"
              value={values.creatorEarning}
              className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ValidationError
              errors={errors}
              touched={touched}
              fieldName="creatorEarning"
            />
          </div>

          {/* Date */}
          <div className=" flex gap-4">
            {/* Start Date */}
            <div className="flex-1">
              <label className="text-base font-medium">Start Date</label>
              <input
                type="date"
                placeholder=""
                name="startDate"
                value={values.startDate}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="startDate"
              />
            </div>
            {/* End Date */}
            <div className="flex-1">
              <label className="text-base font-medium">End Date</label>
              <input
                type="date"
                placeholder=""
                name="endDate"
                value={values.endDate}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="endDate"
              />
            </div>
          </div>

          {/* description */}
          <div>
            <label className="text-base font-medium">Description</label>

            <div className=" mt-3">
              <textarea
                name=""
                id=""
                placeholder="e.g. After purchasing the product you can get item..."
                cols={5}
                rows={5}
                value={values.description}
                className="rounded-lg w-full text-sm font-extralight placeholder:text-white placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none collectionforminput"
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
      </form>
    </>
  );
};

export default UploadForm;
