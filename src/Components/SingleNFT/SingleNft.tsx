const SingleNft = () => {
  return (
    <>
      {/* main */}
      <section className=" flex justify-center gap-8 h-screen text-white mx-auto pt-12">
        {/* first div (left side) */}
        <div className=" border-[12px] border-slate-900 bg-slate-900 rounded-lg h-fit">
          <img
            src="	https://rainbowit.net/html/nuron/assets/images/portfolio/lg/portfolio-02.jpg"
            alt=""
            width={400}
            height={400}
            className=" rounded-lg"
          />
        </div>

        {/* second div (right side) */}
        <div className=" flex flex-col gap-5">
          <div>
            <h4 className="text-[30px] font-bold">The Amazing Game</h4>
          </div>

          <div className="flex gap-10">
            {/* category */}
            <div>
              <span className=" text-base font-light text-[#cfcfcf]">Catagory</span>

              <div className=" flex justify-center items-center gap-4 mt-2">
                <img
                  className=" rounded-[50%]"
                  src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h6 className="text-lg font-medium">Brodband</h6>
              </div>
            </div>

            {/* collection */}

            <div>
              <span className=" text-base font-light text-[#cfcfcf]">Collection</span>

              <div className=" flex justify-center items-center gap-4 mt-2">
                <img
                  className=" rounded-[50%]"
                  src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h6 className=" text-lg font-medium">Brodband</h6>
              </div>
            </div>
          </div>

          <div className=" bg-slate-700 flex justify-between w-[80%] p-4 rounded-md">
            <span>Current Bid</span>
            <span className=" font-semibold">603.86 ETH</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNft;
