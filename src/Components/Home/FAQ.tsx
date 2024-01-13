import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const handleAccordionClick = (index: number) => {
    let newOpenIndexes: boolean[] = [];

    newOpenIndexes = openIndexes.map((item, i) => {
      return i === index ? !openIndexes[i] : item;
    });

    setOpenIndexes(newOpenIndexes);
  };
  return (
    <>
      <div className=" text-white mx-auto max-w-7xl px-6 py-12 sm:py-32 md:py-24 lg:px-8 lg:py-32">
        {/* FAQ */}
        <div className="flex flex-col justify-center items-center mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div className=" flex max-w-[768px] flex-col items-center justify-center gap-5">
            <p className=" text-center text-3xl font-semibold md:text-4xl CodeNewRomanFont">
              FAQ's
            </p>
          </div>
          {/* ACCORDIANCE */}
          <div className="w-full mt-10 space-y-6 divide-y divide-gray-900/10 ">
            <div className=" p-5 bg-[#000B26] rounded-xl">
              <button
                className="flex w-full items-start justify-between text-left "
                data-track="faq-button-how-do-i-sign-up?"
                type="button"
                onClick={() => handleAccordionClick(0)}
              >
                <span className="text-base font-semibold leading-7 ">
                  How do I sign up?
                </span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndexes[0] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              {openIndexes[0] && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7">
                    To get started, simply follow this a to sign up.
                  </p>
                </div>
              )}
            </div>
            <div className=" p-5 bg-[#000B26] rounded-xl">
              <button
                className="flex w-full items-start justify-between text-left "
                type="button"
                onClick={() => handleAccordionClick(1)}
              >
                <span className="text-base font-semibold leading-7">
                  What should I input for a business idea?
                </span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndexes[1] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              {openIndexes[1] && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 ">
                    For optimal results, provide a detailed description
                    including key criteria and any pertinent context. The more
                    specific the details, the more accurate the outcome.
                  </p>
                </div>
              )}
            </div>
            <div className=" p-5 bg-[#000B26] rounded-xl">
              <button
                className="flex w-full items-start justify-between text-left "
                type="button"
                onClick={() => handleAccordionClick(2)}
              >
                <span className="text-base font-semibold leading-7">
                  Is my idea kept confidential?
                </span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndexes[2] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              {openIndexes[2] && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 ">
                    Absolutely! We prioritize your privacy. Your data is not
                    sold, shared, or distributed to any third parties. You have
                    the option to request data deletion at any time.
                  </p>
                </div>
              )}
            </div>
            <div className=" p-5 bg-[#000B26] rounded-xl">
              <button
                className="flex w-full items-start justify-between text-left "
                type="button"
                onClick={() => handleAccordionClick(3)}
              >
                <span className="text-base font-semibold leading-7">
                  Can I get a report for a specific market?
                </span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndexes[3] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      ></path>
                    </svg>
                  )}
                </span>
              </button>
              {openIndexes[3] && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 ">
                    Certainly. When submitting your business idea, be sure to
                    specify the market of interest, and we will tailor the
                    report accordingly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
