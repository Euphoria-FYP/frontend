import React from "react";

export interface CategoriesCardProps {
  title: string;
  cardimage: string;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({
  title,
  cardimage,
}) => {
  return (
    <>
      <div
        className={`relative bg-slate-600 py-24 px-[82px] w-[260px] h-[250px] md:w-[200px] md:h-[220px] flex flex-col justify-center items-center mb-7 md:mb-10 rounded-2xl`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.419), rgba(65, 61, 61, 0.97)), url(${cardimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className=" text-white font-bold text-xl text-center">{title}</h2>
        <button className="absolute bottom-0 text-sm bg-white py-[11px] px-8 rounded-2xl mb-5 font-semibold text-[#B900FF] w-40">
          See all {title}
        </button>
      </div>
    </>
  );
};

export default CategoriesCard;
