import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BidModalType } from "../../types";
import StyledButton from "../Shared/StyledButton";
import { IoClose } from "react-icons/io5";


const PlaceBidModal = ({ open, setOpen, cancelButtonRef }: BidModalType) => {

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative flex flex-col gap-3 py-5 px-10 pb-10 transform overflow-hidden rounded-2xl bg-[#000B26] text-left shadow-xl transition-all 2xl:w-[40vw] xl:w-[32vw] md:w-[50vw]">
                  <div className="text-white flex justify-end items-end cursor-pointer">
                    <IoClose
                      className="text-2xl text-white"
                      onClick={closeModal}
                    />
                  </div>

                  {/* first div */}
                  <div className="flex flex-col items-center text-white">
                    <h3 className="text-3xl ">Place a bid</h3>
                    <p> You are about to purchase This Product</p>
                  </div>

                  {/* {Label} */}
                  <div className="flex-1 mt-5 mb-2">
                    <label className="text-base font-medium text-white">
                      Your Bid
                    </label>
                    <input
                      type="number"
                      placeholder="ETH"
                      name="creatorEarning"
                      className=" collectionforminput rounded-lg w-full placeholder:text-white text-sm font-extralight placeholder:text-[13px] placeholder:font-extralight placeholder:tracking-wide focus:outline-none mt-3"
                    />
                  </div>

                  {/* last one */}
                  <div className="flex flex-row text-slate-600 justify-between">
                    <div>
                      <p>Your Balance</p>
                      <p>Service Fee</p>
                      <p>Total Bid Amount</p>
                    </div>
                    <div>
                      <p>9578 ETH</p>
                      <p>10 ETH</p>
                      <p>9588 ETH</p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-6 md:mt-0 w-full">
                    <StyledButton
                      heading="Place a Bid"
                      bgColor="linear-gradient(103deg, #E2257A 0%, #563BDA 100%)"
                      width={365}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default PlaceBidModal;
