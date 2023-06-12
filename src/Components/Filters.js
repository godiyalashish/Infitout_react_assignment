import React from 'react'

const Filters = ({showFilters, setShowFilters}) => {
  return (
    <div className='flex flex-col absolute z-20 bg-white drop-shadow-xl w-[265px] p-3 gap-y-5 right-[192px] top-[131px]'>
        <div className='flex justify-between'>
            <p className='font-bold'>Filters</p>
            <p className="cursor-pointer" onClick={()=>setShowFilters(!showFilters)}>&#9587;</p>
        </div>
        <div className='flex'>
            
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <p>LTP range</p>
                <input className='border border-[#D3D3D3] w-[100px] h-[30px]'/>
            </div>
            <p className='mt-[25px]'>-</p>
            <input className='border border-[#D3D3D3] w-[100px] h-[30px] mt-[25px]'/>
        </div>
        <div className='flex justify-between'>
            <p>LTP change % by</p>
            <input className='border border-[#D3D3D3] w-[100px] h-[30px]'/>
        </div>
        <div className='flex justify-between'>
            <p>Specific strike</p>
            <input className='border border-[#D3D3D3] w-[100px] h-[30px]'/>
        </div>
        <div className='flex justify-between'>
            <p>Display</p>
            <div className='flex gap-x-2'>
                <input type="checkbox" id="Calls" name="Calls" value="Calls"/>
                <label for="Calls">Calls</label>
                <input type="checkbox" id="Puts" name="Puts" value="Puts"/>
                <label for="Puts">Puts</label>
            </div>
        </div>
        <div className='flex justify-end gap-x-3 border-t border-[#D3D3D3] pt-5'>
            <button className='pl-2 pr-2 text-[#2C57F5] border-[#2C57F5] border h-[29px]' onClick={()=> setShowFilters(!showFilters)}>Reset</button>
            <button className='pl-2 pr-2 pb-1 text-white border h-[31px] bg-[#2C57F5]' onClick={()=> setShowFilters(!showFilters)}>Apply</button>
        </div>
    </div>
  )
}

export default Filters