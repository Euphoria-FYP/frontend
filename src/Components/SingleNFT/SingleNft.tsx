import React from "react";
import Layout from "../../Components/Shared/Layout";

const SingleNft = () => {
  return (
    <Layout bgImgClass={"marketPlaceBgImg"}>
      <section className=" container text-white h-screen mx-auto">
        {/* main */}
        <div className="flex gap-10">
          {/* first div (left side) */}
          <div className=" bg-slate-900 rounded-md p-4">
            <img
              src="	https://html.ditsolution.net/nftpro/assets/images/resource/items.gif"
              alt=""
              width={550}
              height={550}
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
                <span className=" text-base">Catagory</span>

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
                <span className=" text-base">Collection</span>

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
        </div>
      </section>
    </Layout>
  );
};

export default SingleNft;
