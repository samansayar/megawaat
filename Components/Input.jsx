import React from "react";

export default function Input({
    title = null,
    value,
    place,
    children,
    dir = "rtl",
    bg = "bg-[#F1F1F1] dark:bg-[#0A0A0A]",
    className,
    type = "text",
    onChange,
    inputmode = "text",
    classnav = "left-0",
    onFocus,
    px = "px-[75px]",
    ...etc
}) {
    return (
        <div className="relative" dir="rtl">
            <div className="relative">
                <input
                    type={'text'}
                    placeholder={''}
                    value={value}
                    onChange={onChange}
                    autoComplete={false}
                    id="floating_outlined" className={`dark:bg-[#1D1D1D] w-full placeholder:opacity-0 focus:placeholder:opacity-100 bg-[#F1F3F6] border-none font-medium text-[#707578] bg-transparent focus:outline-none peer-focus:bg-transparent text-sm px-6 focus:bg-white dark:focus:bg-[#0D0D0D] placeholder:text-[#707578] dark:text-[#A7A7A7] outline-none  relative rounded-[20px] py-[22px] h-[56px] flex items-center peer`} />
                <label htmlFor="floating_outlined" className={`absolute text-sm peer-focus:text-xs text-[#707578] dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white dark:bg-[#0D0D0D] px-5 peer-focus:px-1 peer-focus:mx-3  peer-focus:text-[#0065FD] peer-focus:dark:text-[#0065FD] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 peer-focus:font-medium peer-focus:text-md ltr:right-1 rtl:left-1'}`}>{place}</label>
            </div>
            <div
               className={`absolute lowercase peer-focus:opacity-0 font-medium text-sm peer-focus:text-xs mx-4 ml-12 transition-all  peer-focus:mx-3 text-[#A7A7A7] dark:text-gray-400 duration-200 transform -translate-y-4 top-2 z-10 origin-[0] peer-focus:bg-white dark:peer-focus:bg-[#0D0D0D]  px-3  peer-focus:text-[#0065FD] peer-focus:dark:text-[#0065FD] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 peer-focus:font-medium `}>
                {children}
            </div>
        </div>
    );
}
