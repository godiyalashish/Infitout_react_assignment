import React from "react";

const Basket = ({setViewBasket, viewBasket}) => {
  return (
    <div className="flex items-center justify-center absolute w-7/12 h-fit flex-col left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/4 drop-shadow-xl bg-white pb-2">
      <div className="flex p-3 justify-between items-center bg-[#2C57F5] text-white w-full">
        <div className="flex flex-col">
          <p>Max-profit</p>
          <p>24,000/-</p>
        </div>
        <div className="flex flex-col">
          <p>Max-loss</p>
          <p>Unlimited</p>
        </div>
        <div className="flex flex-col">
          <p>Risk:Reward</p>
          <p>NA</p>
        </div>
        <div className="flex flex-col">
          <p>Probability</p>
          <p>32%</p>
        </div>
        <div className="flex flex-col">
          <p>Breakeven</p>
          <p>&gt;38124.2</p>
        </div>
      </div>
      <div className="p-2 bg-white w-full pb-10">
        <table className="w-full scrollbar-none">
          <thead>
            <tr>
              <th className="text-left pb-3 text-[#393939] font-normal">Instrument</th>
              <th className="text-center pb-3 text-[#393939] font-normal">B/S</th>
              <th className="text-left pb-3 text-[#393939] font-normal">Type</th>
              <th className="text-left pb-3 text-[#393939] font-normal">Qty</th>
              <th className="text-left pb-3 text-[#393939] font-normal">Price</th>
              <th className="text-left pb-3 text-[#393939] font-normal">Trigger</th>
              <th className="pb-3"></th>
              <th className="pb-3"></th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#F9F9F9] content-center">
              <td className="pt-2 pb-2">NIFTY 18MAY23 18200 CE</td>
              <td className="pt-2 pb-2">
                <div className="flex items-center justify-center flex-col">
                  <div className="bg-[#86C6E6] font-semibold h-5 w-5 p-3 flex items-center justify-center">
                    B
                  </div>
                </div>
              </td>
              <td className="pr-2 pt-2 pb-2">
                <div className="flex items-center justify-center flex-col bg-[#2C57F5] text-white">
                  MIS
                </div>
              </td>
              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>

              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>
              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>
              <td className="text-[#2C57F5] pt-2 pb-2">
                <div className="flex items-center gap-x-[2px]">
                    <img src={require('../images/plus.png')} className="w-[11.5px] h-[11px]"/>
                    <p>SL</p>
                </div>
              </td>
              <td className="text-[#2C57F5] pt-2 pb-2">
              <div className="flex items-center gap-x-[2px]">
                    <img src={require('../images/plus.png')} className="w-[11.5px] h-[11px]"/>
                    <p>Tgf</p>
                </div>
              </td>
              <td className="pt-2 pb-2">
                <img src={require('../images/bin.png')} />
              </td>
            </tr>


            <tr>
              <td className="pt-2 pb-2">NIFTY 18MAY23 18200 CE</td>
              <td className="pt-2 pb-2">
                <div className="flex items-center justify-center flex-col">
                  <div className="bg-[#FFA8A8] font-semibold h-5 w-5 p-3 flex items-center justify-center">
                    S
                  </div>
                </div>
              </td>
              <td className="pr-2 pt-2 pb-2">
                <div className="flex items-center justify-center flex-col bg-[#2C57F5] text-white">
                  NRML
                </div>
              </td>
              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>

              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>
              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>
              <td className="text-[#2C57F5] pt-2 pb-2">
                <div className="flex items-center gap-x-[2px]">
                    <img src={require('../images/plus.png')} className="w-[11.5px] h-[11px]"/>
                    <p>SL</p>
                </div>
              </td>
              <td className="text-[#2C57F5] pt-2 pb-2">
              <div className="flex items-center gap-x-[2px]">
                    <img src={require('../images/plus.png')} className="w-[11.5px] h-[11px]"/>
                    <p>Tgf</p>
                </div>
              </td>
              <td className="pt-2 pb-2">
                <img src={require('../images/bin.png')} />
              </td>
            </tr>


            <tr className="bg-[#F9F9F9]">
              <td className="pt-2 pb-2">NIFTY 18MAY23 18200 CE</td>
              <td className="pt-2 pb-2">
                <div className="flex items-center justify-center flex-col">
                  <div className="bg-[#86C6E6] font-semibold h-5 w-5 p-3 flex items-center justify-center">
                    B
                  </div>
                </div>
              </td>
              <td className="pr-2 pt-2 pb-2">
                <div className="flex items-center justify-center flex-col bg-[#2C57F5] text-white">
                  MIS
                </div>
              </td>
              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>

              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>
              <td className="pt-2 pb-2">
                <input className="w-[60px] border-[#D9D9D9] border p-0"/>
              </td>
              <td className="text-[#2C57F5] pt-2 pb-2">
                <div className="flex items-center gap-x-[2px]">
                    <img src={require('../images/plus.png')} className="w-[11.5px] h-[11px]"/>
                    <p>SL</p>
                </div>
              </td>
              <td className="text-[#2C57F5] pt-2 pb-2">
              <div className="flex items-center gap-x-[2px]">
                    <img src={require('../images/plus.png')} className="w-[11.5px] h-[11px]"/>
                    <p>Tgf</p>
                </div>
              </td>
              <td className="pt-2 pb-2">
                <img src={require('../images/bin.png')} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex w-full p-3 justify-between border-[#D3D3D3] border-t">
        <div className="flex gap-x-3 items-end">
            <div className="flex flex-col">
                <p>Margin required: ₹ 2,43,630.3</p>
                <p>Available funds: ₹ 12,00,000,00</p>
            </div>
            <button className="bg-[#FFD700] pl-2 pr-2 font-semibold h-9">
                <div className="flex items-center gap-x-2 justify-center">
                    <img src={require('../images/plus_black.png')} className="h-[11px] w-[11px]"/>
                    <p>Auto hedge</p>
                </div>
                 
            </button>
        </div>
        <div className="flex gap-x-2 items-end">
            <button className="text-[#2C57F5] border-[#2C57F5] border h-9 font-semibold pl-2 pr-2" onClick={()=> setViewBasket(!viewBasket)}>
                Close basket
            </button>

            <button className="text-white font-semibold bg-[#2C57F5] h-9 pl-2 pr-2">
                Place order
            </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
