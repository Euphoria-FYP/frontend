import * as Yup from "yup";
// type createCelebrityProfile = Yup.InferType<
//   typeof CreateCelebrityProfileSchema
// >;
// type createFanProfile = Yup.InferType<typeof CreateFanProfileSchema>;

export const CreateCelebrityProfileSchema = Yup.object({
  id: Yup.string(),
  profileLogo: Yup.string(),
  coverPic: Yup.string(),
  backgroundPic: Yup.string(),
  Name: Yup.string().required("Please enter the your name"),
  userName: Yup.string().required("Please enter the your user name"),
  walletAddress: Yup.string().required("Please enter the your wallet address"),
  email: Yup.string().email().required("Please enter the your email"),
  password: Yup.string().required("Please enter the your password"),
  managerEmail: Yup.string().email(),
  managerNumber: Yup.number(),
  webUrl: Yup.string(),
  kycFile: Yup.string(),
});
