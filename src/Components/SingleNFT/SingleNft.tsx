import { useState, useRef, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import DetailTab from "./DetailTab";
import BidTab from "./BidTab";
import { useParams } from "react-router-dom";
import { marketPlaceData } from "../../data";
import { NFT } from "../../types/index";
import HistoryTab from "./HistoryTab";
import PlaceBidModal from "../PlaceBid/PlaceBidModal";

interface TabButtonType {
  id: number;
  title: string;
}

const tabButtons = [
  {
    id: 1,
    title: "Bids",
  },
  {
    id: 2,
    title: "Details",
  },
  {
    id: 3,
    title: "History",
  },
];

const SingleNft = () => {
  const [currentTab, setCurrentTab] = useState<TabButtonType>(tabButtons[1]);
  const [singleNFTdata, setSingleNFTdata] = useState<NFT[]>();
  const { id, category } = useParams();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const getSingleNFT = (id: any) => {
    const filteredNFTs = marketPlaceData
      .flatMap((category) => category.nft)
      .filter((nft) => nft.marketplace === category);

    console.log(filteredNFTs);

    const finalFilteredNFTs = filteredNFTs.filter(
      (nft: any) => nft.id === parseInt(id, 10)
    );
    console.log(finalFilteredNFTs);
    setSingleNFTdata(finalFilteredNFTs);
  };

  useEffect(() => {
    getSingleNFT(id);
  }, []);

  return (
    <>
      <PlaceBidModal
        setOpen={setOpen}
        open={open}
        cancelButtonRef={cancelButtonRef}
      />
      {/* main */}
      <section className="w-[90%] md:w-[80%] h-full flex flex-col md:flex-row justify-center gap-12 text-white mx-auto py-10">
        {/* first div (left side) */}
        <div className=" w-full md:w-[45%] flex flex-col">
          {/* IMAGE DIV */}
          <div
            className=" w-full border-[16px] border-slate-900 bg-slate-900 rounded-lg h-fit
          transition-all duration-300 ease-in-out transform-gpu hover:scale-105 hover:border-[12px] hover:border-[#00a3ff]"
          >
            <img
              src="	https://rainbowit.net/html/nuron/assets/images/portfolio/lg/portfolio-02.jpg"
              alt=""
              className=" w-full h-[300px] md:h-[380px] rounded-lg"
            />
          </div>
          {/* WINNIG BID  */}
          <div className=" w-full flex flex-col gap-[6px] border border-[#ffffff14] bg-[#24243557] rounded-[8px] py-3 px-3 md:px-4 group mt-4">
            <h3 className=" text-[17px] font-medium capitalize">Winning Bid</h3>
            <div className=" flex md:flex-row justify-between items-center">
              <div className=" flex items-center gap-3">
                <img
                  className=" rounded-[50%] border-[3px] border-[#ffffff14] transition-all duration-200 ease-in-out transform-gpu group-hover:border-none group-hover:scale-105"
                  src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
                  alt=""
                  width={55}
                  height={55}
                />

                <div className=" flex flex-col items-start gap-[1px]">
                  <h6 className=" text-sm md:text-base font-medium text-[#00a3ff] capitalize transition-all duration-200 ease-in-out transform-gpu ">
                    Allen Waltker{" "}
                    <span
                      className="  text-sm font-light text-[#cfcfcf]"
                      style={{ textTransform: "none" }}
                    >
                      {" "}
                      <span className=" mx-0 md:mx-1">-</span> Placed a Bid
                    </span>
                  </h6>
                  <span className="text-xs md:text-sm text-[#cfcfcf]">
                    {" "}
                    1 hour ago
                  </span>
                </div>
              </div>

              <div className=" flex flex-col items-end">
                <span className="text-sm md:text-lg font-medium tracking-wide text-[#cfcfcf]">
                  9.83 ETH
                </span>
                <span className=" text-sm md:text-sm font-medium text-[#00a3ff]">
                  =$128.36
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* second div (right side) */}
        <div className="w-full md:w-[55%] flex flex-col gap-4">
          {/* NFT NAME AND ICONS */}
          <div className=" flex justify-between items-center">
            {singleNFTdata?.map((item, index) => (
              <div key={index}>
                {item.details.map((name, i) => (
                  <h3 key={i} className=" text-[22px] md:text-[34px] font-bold">
                    {name.name}
                  </h3>
                ))}
              </div>
            ))}

            <div className=" flex gap-[10px]">
              <div
                className=" flex justify-center items-center gap-1 rounded-md py-[8px] px-[12px] cursor-pointer bg-[#212e48] text-white
              transition-all duration-300 transform-gpu group hover:bg-[#00a3ff]"
              >
                <FiHeart className="  text-[#cfcfcf] group-hover:text-white" />
                <span className=" text-sm">33</span>
              </div>
              <div className=" flex justify-center items-center gap-1 rounded-md py-[8px] px-[12px] cursor-pointer bg-[#212e48] transition-all duration-300 transform-gpu group hover:bg-[#00a3ff]">
                <BsThreeDots className=" text-xl text-[#cfcfcf] group-hover:text-white" />
              </div>
            </div>
          </div>
          {/* COLLECTION , PLACE BITS BUTTON  */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-10">
            {/* category */}
            <div className=" flex flex-col gap-[6px] group">
              <span className=" flex items-center text-base text-[#cfcfcf]">
                MarketPlace <MdKeyboardArrowRight className=" text-xl" />{" "}
                Collection
              </span>
              <div className=" flex justify-center items-center gap-4">
                <img
                  className=" rounded-[50%] border-[3px] border-[#ffffff14] transition-all duration-200 ease-in-out transform-gpu group-hover:border-none group-hover:scale-105"
                  src="https://rainbowit.net/html/nuron/assets/images/client/client-1.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <h6 className=" text-sm md:text-xl font-medium transition-all duration-200 ease-in-out transform-gpu group-hover:text-[#00a3ff]">
                  Sports, Football
                </h6>
              </div>
            </div>
            {/* place bit btn */}
            <button
              className=" bg-[#212e48] text-white text-center font-medium w-full md:w-[40%] h-fit py-2 px-4 rounded-[10px] tracking-[0.5px]
          hover:bg-[#00a3ff] hover:text-[#fff] transition-all duration-300 ease-in-out transform-gpu hover:scale-105"
              onClick={() => {
                setOpen(true);
              }}
            >
              Place a Bid
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-2">
            {/* first */}
            <div className=" flex-1 flex justify-between bg-[#212e48] py-4 px-[12px] rounded-md text-sm font-medium">
              <span>Current Bid</span>
              <span className=" text-right text-base font-semibold">
                603.86 ETH
              </span>
            </div>

            {/* second */}
            <div className=" flex-1  flex justify-between bg-[#212e48] py-4 px-[12px] rounded-md text-sm font-medium">
              <span>Count Down</span>
              <span className=" text-right text-base font-semibold">
                00:00:00:00
              </span>
            </div>
          </div>

          {/* TABS */}
          <div className=" flex gap-2 rounded-[7px] border border-[#ffffff14] bg-[#24243557] p-2 ">
            {tabButtons.map((item) => (
              <button
                key={item.id}
                className={` flex-1 h-12  rounded-[5px] 
                transition-all duration-300 transform-gpu  ${
                  currentTab.id === item.id
                    ? "bg-[#212e48]"
                    : " hover:border-white border border-dashed border-[#ffffff14]"
                }`}
                onClick={() => setCurrentTab(tabButtons[item.id - 1])}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* DETAILS */}
          {currentTab.id === 1 && <BidTab />}
          {currentTab.id === 2 &&
            singleNFTdata &&
            singleNFTdata.map((obj, index) => <DetailTab details={obj} />)}
          {currentTab.id === 3 && <HistoryTab history={"nn"} />}
        </div>
      </section>
    </>
  );
};

export default SingleNft;
