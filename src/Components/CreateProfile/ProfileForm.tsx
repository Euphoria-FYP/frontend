import React, { useState } from "react";
import { IoMdImage } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import Eth from "../../assets/images/eth_bc.png";
import { useFormik } from "formik";
import { CreateCelebrityProfileSchema } from "../../helpers/Validations/CreateProfileSchema";
import ValidationError from "../Shared/Validation/ValidationError";
import StyledButton from "../Shared/StyledButton";
import ImageSection from "../CreateCollection/ImageSection";
import { useDispatch } from "react-redux";
import { addPage } from "../../redux/slices/createPage";
import { convertToBase64 } from "../../helpers/convertToBase64";
import { useNavigate } from "react-router-dom";

const initialCelebrityValues = {
  profileLogo: "",
  coverPic: "",
  backgroundPic: "",
  Name: "",
  userName: "",
  walletAddress: "",
  email: "",
  password: "",
  managerEmail: "",
  managerNumber: "",
  webUrl: "",
  kycFile: "",
};

const ProfileForm = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openDropDown, setOpenDropDown] = useState<boolean[]>([false, false]);

  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const base64 = await convertToBase64(e.target.files && e.target.files[0]);
    setFieldValue(e.target.name, base64);
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
    initialValues: initialCelebrityValues,
    validationSchema: CreateCelebrityProfileSchema,
    onSubmit: (values, action) => {
      dispatch(addPage(values));
      navigate("/profile");
      // action.resetForm();
    },
  });

  return (
    <>
      {/* main div */}
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-6">
          <h3 className=" text-2xl md:text-4xl font-semibold mb-4">
            Create your Customized Page
          </h3>

          <div>
            <label className="text-base font-medium">Profile Pic</label>
            <div
              className="flex justify-center items-center gap-5 mt-3 mb-5 border border-gray-500 px-2 py-3 w-32 h-32 group transition-all hover:border-gray-200 cursor-pointer rounded-[50%]"
              onClick={() => {
                document.getElementById("profileLogo")?.click();
              }}
            >
              <input
                type="file"
                name="profileLogo"
                id="profileLogo"
                className=" hidden"
                onChange={handleFileChange}
                onBlur={handleBlur}
              />
              <div className=" flex-1 flex justify-center items-center border border-dashed border-level-1 transition-all group-hover:border-solid w-28 h-28 rounded-[50%]">
                <IoMdImage className="block group-hover:hidden text-2xl transition-all duration-300" />
                <FiUpload className="hidden group-hover:block text-2xl transition-all duration-300" />
              </div>
            </div>
          </div>

          <ImageSection
            firstimg={values.backgroundPic}
            secondimg={values.coverPic}
            setFieldValue={setFieldValue}
            label1={"Cover Pic (Optional)"}
            label2={"Background Pic (Optional)"}
          />

          <div className={`flex gap-3`}>
            {/* first input */}
            <div className="flex-1">
              <label className="text-base font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="Name"
                value={values.Name}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="Name"
              />
            </div>

            {/* second input */}
            <div className={`flex-1`}>
              <label className="text-base font-medium">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                name="userName"
                value={values.userName}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="userName"
              />
            </div>
          </div>

          {/* wallet address */}
          <div className={`flex-1`}>
            <label className="text-base font-medium">Wallet Address</label>
            <input
              type="text"
              placeholder="Enter your Metamask wallet address"
              name="walletAddress"
              value={values.walletAddress}
              className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ValidationError
              errors={errors}
              touched={touched}
              fieldName="walletAddress"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-base font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="email"
              />
            </div>

            <div className="flex-1">
              <label className="text-base font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={values.password}
                className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ValidationError
                errors={errors}
                touched={touched}
                fieldName="password"
              />
            </div>
          </div>

          {type === "celebrity" && (
            <>
              <div className={`flex gap-2`}>
                <div className="flex-1">
                  <label className="text-base font-medium">Manager email</label>
                  <input
                    type="email"
                    placeholder="Enter your manager email"
                    name="managerEmail"
                    value={values.managerEmail}
                    className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ValidationError
                    errors={errors}
                    touched={touched}
                    fieldName="managerEmail"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-base font-medium">
                    Manager number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your manager number"
                    name="managerNumber"
                    value={values?.managerNumber}
                    className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ValidationError
                    errors={errors}
                    touched={touched}
                    fieldName="managerNumber"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="text-base font-medium">Website URL</label>
                <input
                  type="text"
                  placeholder="Enter your Website URL"
                  name="webUrl"
                  value={values?.webUrl}
                  className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ValidationError
                  errors={errors}
                  touched={touched}
                  fieldName="webUrl"
                />
              </div>

              <div className="flex-1">
                <label className="text-base font-medium">
                  KYC (Know Your Customer) Documents
                </label>
                <input
                  type="file"
                  placeholder="Enter your Website URL"
                  name="kycFile"
                  className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                />
                <ValidationError
                  errors={errors}
                  touched={touched}
                  fieldName="kycFile"
                />
              </div>
            </>
          )}

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
