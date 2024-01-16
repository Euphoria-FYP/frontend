import { FaRegHeart } from "react-icons/fa";
import cardImg from "../../assets/images/bg.png";
import profileImg from "../../assets/images/profileImg.jpeg";

type MarketCardProps = {
  name: string;
  userName: string;
  currentBid: number;
  inDollars: number;
}

const MarketPlaceCard: React.FC <MarketCardProps> = ({name,userName,currentBid, inDollars })=> {
  return (
    <div className="card main-card flex flex-col gap-4 px-3 py-5 text-white w-[270px] bg-[#1f2045] border-2 border-[#2e2459] rounded-lg cursor-pointer h-[390px]">
      <div className=" flex justify-between items-center">
        <div className=" flex gap-2">
          <img
            src={profileImg}
            alt="profile"
            className=" w-11 h-11 rounded-[50%] object-cover"
          />
          <div className=" flex flex-col justify-center">
            <h3 className=" text-sm">{name}</h3>
            <p className=" text-[#cfcfcf] text-xs">{userName}</p>
          </div>
        </div>
        <FaRegHeart />
      </div>
      <div className=" relative h-52 mb-2">
        <img src={cardImg} alt="img " className=" rounded-lg h-full" />
        <div className=" absolute bottom-2 w-full flex justify-center gap-2">
          <div className=" w-11">
            <p className=" bg-[#707070] px-1 py-1 rounded text-center">17</p>
            <p className="text-[#cfcfcf] w-full text-center">DAY</p>
          </div>
          <div className=" w-11">
            <p className=" bg-[#707070] px-1 py-1 rounded text-center">17</p>
            <p className="text-[#cfcfcf] w-full text-center">HR'S</p>
          </div>
          <div className=" w-11">
            <p className=" bg-[#707070] px-1 py-1 rounded text-center">17</p>
            <p className="text-[#cfcfcf] w-full text-center">MIN'S</p>
          </div>
          <div className=" w-11">
            <p className=" bg-[#707070] px-1 py-1 rounded text-center">17</p>
            <p className="text-[#cfcfcf] w-full text-center">SEC</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between w-full">
        <div className=" w-3/6 border-r border-[#cfcfcf]">
          <p className=" text-[#cfcfcf] text-xs">Current Bid</p>
          <h3 className=" text-[15px]">{currentBid}{""}ETH</h3>
          <p className=" text-[#cfcfcf] text-xs">${""}{inDollars}</p>
        </div>
        <div className=" w-3/6 pl-6">
          <p className=" text-[#cfcfcf] text-xs">Current Bid</p>
          <h3 className=" text-[15px]">{currentBid}{""}ETH</h3>
          <p className=" text-[#cfcfcf] text-xs">${""}{inDollars}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceCard;
