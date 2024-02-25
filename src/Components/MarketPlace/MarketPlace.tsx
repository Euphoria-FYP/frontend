import MarketPlaceCard from "../Shared/MarketPlaceCard";
import Collection from "./Collection";
import { BiSearchAlt } from "react-icons/bi";
import { cards } from "../../data";
import MarketContrubutor from "./MarketContrubutor";
import { useState, useEffect } from "react";
import { marketPlaceData, tags, AllCollections } from "../../data";
import { CollectionsData, Listings, MarketPlaceItem, NFT } from "@/types";
import CollectionCard from "../Home/Collections/CollectionCard";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const MarketPlace = ({ setBgImg }: any) => {
  const [filterData, setFilterData] =
    useState<CollectionsData[]>(AllCollections);
  const [tag, setTag] = useState<string>("");
  const [categoriesNames, setCategoriesNames] = useState<any>();
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  const [minPrice, setMinPrice] = useState<string>();
  const [maxPrice, setMaxPrice] = useState<string>();

  const [openDropDown, setOpenDropDown] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [collectionNames, setCollectionNames] = useState<any>([]);
  const [Name, setName] = useState<string | null>(null);

  const { state, pathname } = useLocation();
  const navigate = useNavigate();

  const tagsFilter = (type: string, filtertype: string) => {
    // for tags
    if (filtertype === "tags") {
      const filteredItems: CollectionsData[] = AllCollections.filter(
        (item) => item.tag === type
      );
      setFilterData(filteredItems);
    }
    // for collectionNames
    else if (filtertype === "collectionName") {
      const filteredItems: CollectionsData[] = AllCollections.filter(
        (item) => item.name === type
      );
      setFilterData(filteredItems);
      setOpenDropDown((prevState) => {
        const newState = [...prevState];
        newState[0] = !newState[0];
        return newState;
      });
    }
    // for category
    else if (filtertype === "category") {
      const categoryfilter: CollectionsData[] = AllCollections.filter(
        (item) => item.category == type
      );
      setFilterData(categoryfilter);
      setCategory(tag);
      setOpenDropDown((prevState) => {
        const newState = [...prevState];
        newState[1] = !newState[1];
        return newState;
      });
    }
    // for sort
    else if (filtertype === "sort") {
      console.log("sorting");
      if (type === "ltoh") {
        const sortfilter: CollectionsData[] = filterData.sort(
          (a, b) => a.floorPrice - b.floorPrice
        );
        setFilterData(sortfilter);
      } else if (type === "htol") {
        const sortfilter: CollectionsData[] = filterData.sort(
          (a, b) => b.floorPrice - a.floorPrice
        );
        setFilterData(sortfilter);
      }
      setOpenDropDown((prevState) => {
        const newState = [...prevState];
        newState[2] = !newState[2];
        return newState;
      });
    }
  };
  // DropDown
  const handleDropDownClick = (index: number) => {
    let newOpenDropDown: boolean[] = [];
    newOpenDropDown = openDropDown.map((item, i) => {
      return i === index ? !openDropDown[i] : false;
    });
    setOpenDropDown(newOpenDropDown);
  };

  // Collection DropDown Names
  useEffect(() => {
    const collectionNames = filterData.map((item: any) => item.name);
    setCollectionNames(collectionNames);
  }, [filterData]);

  // For Max & Min
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prices = AllCollections.map((item) => item.floorPrice);
    let a = Math.min(...prices).toString;
    const value = event.target.value;
    setMinPrice(value === "" ? undefined : value);
    handlePrice(value, maxPrice);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prices = AllCollections.map((item) => item.floorPrice);
    let b = Math.max(...prices).toString();
    const value = event.target.value;
    setMaxPrice(value === "" ? undefined : value);
    handlePrice(minPrice, value);
  };

  const handlePrice = (min: any, max: any) => {
    const prices = AllCollections.map((item) => item.floorPrice);
    let a = Math.min(...prices).toString();
    let b = Math.max(...prices).toString();

    const filteredCollections = AllCollections.filter((item) => {
      const floorPrice = item.floorPrice;
      return (
        floorPrice >=
          (min === "" || min === undefined ? parseFloat(a) : parseFloat(min)) &&
        floorPrice <=
          (max === "" || max === undefined ? parseFloat(b) : parseFloat(max))
      );
    });
    console.log(filteredCollections);
    setFilterData(filteredCollections);
  };

  useEffect(() => {
    console.log(state);

    if (state) {
      tagsFilter(state, "tags");
      setTag(state);
    }
    navigate(pathname, {});
  }, [state]);

  useEffect(() => {
    if (tag) {
      const categoryFilter = tags.filter((item) => item.tag === tag);
      const categoriesNames = categoryFilter.flatMap(
        (item: any) => item.category
      );
      setCategoriesNames(categoriesNames);
    } else {
      const categoriesNames = tags.flatMap((item: any) => item.category);
      setCategoriesNames(categoriesNames);
    }
  }, [tag]);

  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  const handleBgImg = (item: any) => {
    setBgImg(item.class);
  };

  // LocalStoarge
  window.localStorage.setItem("collection", JSON.stringify(AllCollections));
  const data = window.localStorage.getItem("collection");
  console.log(JSON.parse(data as any));

  return (
    <>
      <div className=" flex h-screen">
        {/* LEFT SIDE */}
        <div
          className={` ${
            isSidebarOpen ? "w-[75%]" : "w-[100%]"
          } flex flex-col justify-start gap-8 pt-12 ${
            isSidebarOpen ? "px-12" : " px-8"
          }  `}
        >
          {/* DROPDOWNS */}
          <div
            className={` flex text-[#cfcfcf] px-5 ${
              isSidebarOpen ? "pl-[10px] gap-8" : "gap-6 pl-2"
            }`}
          >
            <div className="relative flex flex-col gap-2 w-64 ">
              <button
                className=" flex justify-between text-left rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full"
                onClick={() => handleDropDownClick(0)}
              >
                <span className=" capitalize">
                  {Name ? Name : "Collections"}
                </span>
                {openDropDown[0] ? (
                  <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={`${
                  openDropDown[0] ? "block" : "hidden"
                }  top-14 rounded-lg z-50 absolute w-64 h-[155px] py-[6px] bg-[#1e1e23] scroll-marketplace-dropdown `}
              >
                {collectionNames.map((item: any) => (
                  <p
                    className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer "
                    onClick={() => {
                      tagsFilter(item, "collectionName");
                      setName(item);
                      setCategory("");
                      setSort("");
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-2 w-64 ">
              <button
                className=" flex justify-between text-left rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full"
                onClick={() => handleDropDownClick(1)}
              >
                <span className=" capitalize">
                  {category ? category : "Categories"}
                </span>
                {openDropDown[1] ? (
                  <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={`${
                  openDropDown[1] ? "block" : "hidden"
                }  top-14 rounded-lg z-50 absolute w-64 h-[155px] py-[6px] bg-[#1e1e23] scroll-marketplace-dropdown `}
              >
                {categoriesNames &&
                  categoriesNames.map((item: any) => (
                    <p
                      className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer "
                      onClick={() => {
                        tagsFilter(item, "category");
                        setCategory(item);
                        setName("");
                      }}
                    >
                      {item}
                    </p>
                  ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-2 w-64">
              <button
                className=" flex justify-between text-left rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full"
                onClick={() => handleDropDownClick(2)}
              >
                <span>{sort ? sort : "Sort by"}</span>
                {openDropDown[2] ? (
                  <IoIosArrowUp className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                ) : (
                  <IoIosArrowDown className=" absolute right-[14px] top-[15px] text-lg cursor-pointer" />
                )}
              </button>
              <div
                className={`${
                  openDropDown[2] ? "block" : "hidden"
                }  top-14 rounded-lg z-50 absolute w-64 py-[6px] bg-[#1e1e23] `}
              >
                <p
                  className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer"
                  onClick={() => {
                    tagsFilter("ltoh", "sort");
                    setSort("Price: Low to High");
                    setName("");
                  }}
                >
                  Price: low to high
                </p>
                <p
                  className=" py-2 px-3 capitalize font-medium text-[13px] hover:bg-[#141414] cursor-pointer"
                  onClick={() => {
                    tagsFilter("htol", "sort");
                    setSort("Price: High to Low");
                  }}
                >
                  Price: high to low
                </p>
              </div>
            </div>
          </div>

          {/* COLLECTIONS CARDS */}
          <div
            className={`  flex flex-wrap justify-start ${
              isSidebarOpen ? "gap-8" : " gap-6"
            } pb-12 pt-3 px-2 overflow-y-auto whitespace-nowrap scrollbarHide transition-all duration-300`}
          >
            {filterData && filterData.length > 0 ? (
              filterData.map((item, i) => <CollectionCard key={i} {...item} />)
            ) : (
              <div className="flex justify-center items-center mx-auto text-white">
                <h1 className=" text-center  text-3xl font-semibold">
                  No Data Found
                </h1>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        {isSidebarOpen && (
          <div
            className={` flex flex-col gap-2 w-[25%] py-[28px] px-[36px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow scroll-marketplace transition-all duration-300`}
          >
            <div className="lfr-direction flex justify-between items-center  border-b-2 pb-3 border-[#1e1e23]">
              <div className="flex items-center gap-5">
                <h2 className=" text-lg font-medium">Filters</h2>
                <button className=" font-light active:underline underline-offset-[3px] ">
                  Clear all
                </button>
              </div>
              <div
                className=" bg-violet-800 rounded py-[2px] pr-[2px] pl-[3px] cursor-pointer"
                onClick={() => setIsSideBarOpen((prev) => !prev)}
              >
                <IoIosArrowForward className=" text-xl" />
              </div>
            </div>
            <div className="lfr-direction flex flex-col gap-4 mt-3">
              <h2 className=" text-lg font-medium">Collections</h2>
              <div className="relative flex gap-2 w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="  rounded-lg bg-[#1e1e23] text-sm font-medium py-[15px] px-4 w-full placeholder-[#cfcfcf]"
                />
                <BiSearchAlt className=" absolute right-[14px] top-[14px] text-2xl" />
              </div>
            </div>
            <div className="lfr-direction flex flex-col gap-4 mt-3">
              <h2 className=" text-lg font-medium">Status</h2>
              <div className=" flex gap-2 w-full">
                <button className=" rounded-lg bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%]">
                  Buy Now
                </button>
                <button className=" rounded-lg bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%]">
                  Auction
                </button>
              </div>
            </div>
            <div className="lfr-direction flex flex-col gap-4 mt-3">
              <h2 className=" text-lg font-medium">Price</h2>
              <div className=" flex gap-2 w-full">
                <input
                  type="text"
                  placeholder="Min"
                  value={minPrice}
                  onChange={handleMinChange}
                  className=" rounded-lg text-center bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%] focus:outline-none placeholder-[#cfcfcf]"
                />
                <input
                  type="text"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  className=" rounded-lg text-center bg-[#1e1e23] text-sm font-medium py-2 px-4 w-[50%] focus:outline-none placeholder-[#cfcfcf]"
                />
              </div>
            </div>
            <div className="lfr-direction flex flex-col gap-4 mt-3">
              <h2 className=" text-lg font-medium">MarktePlace Tags</h2>
              <div className=" flex flex-wrap gap-2 w-full">
                {tags.map((item, i) => {
                  return (
                    <button
                      key={i}
                      className={` rounded-lg ${
                        tag === item.tag ? `bg-[#7000ff]` : `bg-[#1e1e23]`
                      } text-sm py-2 px-4 `}
                      onClick={() => {
                        tagsFilter(item.tag, "tags");
                        setTag(item.tag);
                        setCategory("");
                        setSort("");
                        handleBgImg(item);
                      }}
                    >
                      {item.tag}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* TOP Ctegory */}
            <div className="lfr-direction flex flex-col gap-4 mt-3">
              <h2 className=" text-lg font-medium">Top Contributers</h2>
              <div className=" h-[180px] flex flex-col gap-3 overflow-y-auto  scrollbarHide">
                {cards.map((card, index) => (
                  <MarketContrubutor
                    key={index}
                    name={card.name}
                    ethAmount={card.ethAmount}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {!isSidebarOpen && (
          <div className=" flex flex-col gap-2 w-[65px] py-[28px] px-[20px] bg-[#1f2045] text-[#cfcfcf] border border-[#2e2459] marketPlaceBoxShadow transition-all duration-300">
            <div
              className=" bg-violet-800 rounded py-[2px] pr-[3px] pl-[2px] cursor-pointer"
              onClick={() => setIsSideBarOpen((prev) => !prev)}
            >
              <IoIosArrowBack className=" text-xl" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MarketPlace;
