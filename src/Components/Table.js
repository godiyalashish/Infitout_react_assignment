import React from "react";
import Basket from './Basket';

const Table = ({viewBasket, setViewBasket}) => {
  const numbers = Array.from({ length: 11 }, (_, index) => index + 1);
  return (
    <div className="w-full flex flex-col pl-[5rem] pr-[5rem] justify-evenly gap-x-3 pb-5">
      <div className="w-full flex items-center p-4">
        <div className="text-center w-1/2 text-[14px] font-semibold">CALLS</div>
        <div className="text-center w-1/2 text-[14px] font-semibold">PUTS</div>
      </div>
      <div className="max-h-[60vh] overflow-auto no-scrollbar">
      <table className="w-full no-scrollbar">
        <thead className="sticky top-0 z-10">
        
          <tr className="text-center border-b border-[#D5BCFE] bg-[#E8EFFB]">
            <th className="p-2">OI Buildup</th>
            <th>IV</th>
            <th>OI</th>
            <th>Volume</th>
            <th>Chng%</th>
            <th>LTP</th>
            <th></th>
            <th className="border-r border-l border-[#D5BCFE]">Strike</th>
            <th></th>
            <th>LTP</th>
            <th>Chng%</th>
            <th>Volume</th>
            <th>OI</th>
            <th>IV</th>
            <th>OI Buildup</th>
          </tr>
        </thead>
        <tbody className="w-full relative z-0">
        {viewBasket && <Basket setViewBasket={setViewBasket} viewBasket={viewBasket}/>}
          {numbers.map((number) => (
            <tr className="text-center p-2 border-[#F8EB77] border-b bg-[#FFFACD] font-semibold">
              <td className="p-2">Long buildup</td>
              <td>9.4</td>
              <td>35K</td>
              <td>1.25K</td>
              <td className="text-[#27AE60]">+123.5%</td>
              <td>1,245.3</td>
              <td>
                <div className="flex items-center gap-x-2">
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    B
                  </div>
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="bg-[#EFE8FB] border-r border-l border-b border-[#D5BCFE] pl-2 pr-2">
                17700
              </td>
              <td className="bg-white">
                <div className="flex items-center justify-end gap-x-2">
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    B
                  </div>
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="bg-white">15.3</td>
              <td className="text-[#27AE60] bg-white">-44.2%</td>
              <td className="bg-white">982</td>
              <td className="bg-white">1.4K</td>
              <td className="bg-white">9.2</td>
              <td className="bg-white">Long buildup</td>
            </tr>
          ))}

          <tr className="text-center p-2 border-[#F8EB77] border-b font-semibold">
              <td className="p-2">Long buildup</td>
              <td>9.4</td>
              <td>35K</td>
              <td>1.25K</td>
              <td className="text-[#27AE60]">+123.5%</td>
              <td>1,245.3</td>
              <td>
                <div className="flex items-center gap-x-2">
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    B
                  </div>
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="bg-[#EFE8FB] border-r border-l border-b border-[#D5BCFE] pl-2 pr-2">
                17700
              </td>
              <td className="bg-[#FFFACD]">
                <div className="flex items-center justify-end gap-x-2">
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    B
                  </div>
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="bg-[#FFFACD]">15.3</td>
              <td className="text-[#27AE60] bg-[#FFFACD]">-44.2%</td>
              <td className="bg-[#FFFACD]">982</td>
              <td className="bg-[#FFFACD]">1.4K</td>
              <td className="bg-[#FFFACD]">9.2</td>
              <td className="bg-[#FFFACD]">Long buildup</td>
            </tr>

            <tr className="text-center p-2 border-[#F8EB77] border-b font-semibold">
              <td className="p-2">Long buildup</td>
              <td>9.4</td>
              <td>35K</td>
              <td>1.25K</td>
              <td className="text-[#27AE60]">+123.5%</td>
              <td>1,245.3</td>
              <td>
                <div className="flex items-center gap-x-2">
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    B
                  </div>
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="bg-[#EFE8FB] border-r border-l border-b border-[#D5BCFE] pl-2 pr-2">
                17700
              </td>
              <td className="bg-[#FFFACD]">
                <div className="flex items-center justify-end gap-x-2">
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    B
                  </div>
                  <div className="bg-white font-semibold h-5 w-5 border border-[#D5BCFE] flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="bg-[#FFFACD]">15.3</td>
              <td className="text-[#27AE60] bg-[#FFFACD]">-44.2%</td>
              <td className="bg-[#FFFACD]">982</td>
              <td className="bg-[#FFFACD]">1.4K</td>
              <td className="bg-[#FFFACD]">9.2</td>
              <td className="bg-[#FFFACD]">Long buildup</td>
            </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Table;
