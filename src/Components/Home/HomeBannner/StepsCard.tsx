import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Steps } from "../../../data";

const StepsCard = () => {
  return (
    <>
      <section className="flex gap-6  justify-center items-center my-5 mx-auto mt-16">
        {Steps.map((item, i) => {
          return (
            <>
              {/* main card */}
              <div
                className="w-[20%] py-4 bg-[#191a34] py relative z-[1] h-[260px] rounded-xl cursor-pointer group step_card"
                key={i}
              >
                {/* icon */}

                <div className="absolute z-[2] -right-4 -top-8">
                  <img
                    src={item.img}
                    alt=""
                    className=" max-w-full max-h-[65px]"
                  />
                </div>

                {/* innner  content*/}

                <div className=" h-full flex flex-col justify-center gap-4 text-left px-6 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                  <span className="text-[15px] text-[#cfcfcf] font-semibold tracking-[0.5px] uppercase">
                    Step-{item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#B900FF] transition-colors duration-300 ease-in-out">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#cfcfcf] font-light">
                    {item.description}
                  </p>
                  <FaArrowRight className=" mt-2 text-2xl text-[#cfcfcf] group-hover:text-[#B900FF] transition-colors duration-300 ease-in-out" />
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default StepsCard;
