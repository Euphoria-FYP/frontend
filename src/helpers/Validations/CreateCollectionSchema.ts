import * as Yup from "yup";
type createCollection = Yup.InferType<typeof CreateCollectionSchema>;

export const CreateCollectionSchema = Yup.object({
  collectionName: Yup.string().required("Please enter the Collection name"),
  description: Yup.string().required("Please enter the Collection description"),
});
