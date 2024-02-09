import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Steps } from "../../data";

const StepsCard = () => {
  return (
    <>
      <section className="flex gap-7  justify-center items-center my-5 mx-auto mt-16">
        {Steps.map((item, i) => {
          return (
            <>
              {/* main card */}
              <div
                className="w-[20%] py-8 bg-slate-700 py relative z-[1] h-[300px] rounded-xl cursor-pointer group step_card"
                key={i}
              >
                {/* icon */}

                <div className="absolute z-[2] -right-4 -top-8">
                  <img
                    src={item.img}
                    alt=""
                    className=" max-w-full max-h-[85px]"
                  />
                </div>

                {/* innner  content*/}

                <div className="flex flex-col justify-start gap-4 text-left px-6 group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                  <span className="text-[17px] font-medium tracking-[0.5px] uppercase">
                    Step-{item.step}
                  </span>
                  <h4 className="text-xl font-medium text-white group-hover:text-[#B900FF] transition-colors duration-300 ease-in-out">
                    {item.title}
                  </h4>
                  <p className="text-base font-normal">{item.description}</p>
                  <FaArrowRight className="text-lg group-hover:text-[#B900FF] transition-colors duration-300 ease-in-out" />
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
