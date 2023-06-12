import {useState} from "react";
import Filters from "./Filters";

const Options = ({ viewBasket, setViewBasket }) => {
    const[showFilters, setShowFilters] = useState(false);
  return (
    <>
    
    <div className="flex flex-col w-full relative">
      <div className="flex w-full p-5 justify-evenly">
        <div className="flex gap-x-5 items-end relative p-3">
          <div className="flex gap-x-2">
            <div>
              <input className="border border-gray-400 w-36 h-9  z-0" />
              <div className="absolute top-[11px] left-[26px] z-10 bg-white">
                <p className="text-[#8F8F8F] text-[10px]">Scrip</p>
              </div>
            </div>
            <div>
              <input className="border border-gray-400 w-36 h-9 z-0" />
              <div className="absolute top-[11px] left-[178px] z-10 bg-white">
                <p className="text-[#8F8F8F] text-[10px]">Exp.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[13px] text-[#888888]">Spot</p>
              <div className="flex gap-x-1 items-end justify-center">
                <p className="font-semibold">18,245.32</p>
                <p className="text-[#27AE60] text-[13px]">0.35%</p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <p className="font-semibold text-[13px] text-[#888888]">Fut</p>
              <div className="flex gap-x-1 items-end justify-center">
                <p className="font-semibold">18,251.1</p>
                <p className="text-[#27AE60] text-[13px]">0.35%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-3 gap-x-5 items-end">
          <div className="flex flex-col items-start">
            <p className="font-semibold text-[13px] text-[#888888]">Max pain</p>
            <div className="flex gap-x-1 items-end justify-center">
              <p className="font-semibold">18,200</p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="font-semibold text-[13px] text-[#888888]">PCR</p>
            <div className="flex gap-x-1 items-end justify-center">
              <p className="font-semibold">0.92</p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-x-2">
              <p className="font-semibold text-[13px] text-[#888888]">
                Support 1
              </p>
              <div className="flex flex-col justify-center items-center gap-y-1">
                <img
                  src={require("../images/down_arrow.png")}
                  className="w-2 h-1 transform rotate-180"
                />
                <img
                  src={require("../images/down_arrow.png")}
                  className="w-2 h-1"
                />
              </div>
            </div>

            <div className="flex gap-x-1 items-end justify-center">
              <p className="font-semibold">18100</p>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-x-2">
              <p className="font-semibold text-[13px] text-[#888888]">
                Resistance 1
              </p>
              <div className="flex flex-col justify-center items-center gap-y-1">
                <img
                  src={require("../images/down_arrow.png")}
                  className="w-2 h-1 transform rotate-180"
                />
                <img
                  src={require("../images/down_arrow.png")}
                  className="w-2 h-1"
                />
              </div>
            </div>
            <div className="flex gap-x-1 items-end justify-center">
              <p className="font-semibold">18500</p>
            </div>
          </div>
        </div>

        <div className="flex items-center p-3 gap-x-5 relative">
          <div className="flex items-center gap-x-2">
            <img
              src={require("../images/filter.png")}
              className="w-3 h-[11px]"
            />
            <p className="font-semibold cursor-pointer" onClick={()=>setShowFilters(!showFilters)}>Filters</p>
          </div>
          <div className="">
            <button className="pt-2 pr-9 pl-9 pb-2 text-white bg-[#2C57F5]" onClick={()=> setViewBasket(!viewBasket)}>
              Basket
            </button>
            <div className="rounded-full h-6 w-6 text-center bg-[#F8EB77] font-semibold absolute bottom-[41px] right-0 shadow">
              3
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-2 justify-end pr-20 ">
        <button className="bg-[#2C57F5] text-white pt-2 pb-2 pl-7 pr-7 rounded-lg">
          LTP
        </button>
        <button className="bg-[#E1E1E1] pt-2 pb-2 pl-7 pr-7 rounded-lg">
          Greeks
        </button>
      </div>
    </div>
   {showFilters && <Filters showFilters={showFilters} setShowFilters={setShowFilters}/>}
    </>
  );
};

export default Options;
