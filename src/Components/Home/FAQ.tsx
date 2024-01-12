import React ,{useState} from "react";
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
const FAQ = () => {
    const[show,setShow]=useState<boolean>(false)
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto mb-10 p-2">

        <h1 className=" uppercase text-white font-semibold">faq</h1>

        <div className="w-full md:w-2/3 flex flex-col gap-5 mt-5">

            <div className=" rounded-xl bg-slate-950">

                <div className="flex justify-between items-center w-full px-5 py-5 text-sm font-semibold text-left  text-white">
                    <span>How to set up a MetaMask account on your chrome browser and start making create and buying nfts from our website?</span>
                    { show ?
                        <FaMinusCircle fontSize={20} onClick={()=>{
                            setShow(!show)
                        }} /> :
                        <FaPlusCircle fontSize={20} onClick={()=>{
                            setShow(!show)
                        }} />
                    }
                </div>

               



            </div>

            

        </div>
            


        
      </section>
    </>
  );
};

export default FAQ;
