import React from "react";

interface ValidationErrorProps {
  errors: {
    [key: string]: string;
  };
  touched: {
    [key: string]: boolean;
  };
  fieldName: string;
}

const ValidationError: React.FC<ValidationErrorProps> = ({
  errors,
  touched,
  fieldName,
}) => {
  return (
    <>
      {errors[fieldName] && touched[fieldName] ? (
        <p className=" text-[14px] text-red-600 mt-3">{errors[fieldName]}</p>
      ) : null}
    </>
  );
};

export default ValidationError;
