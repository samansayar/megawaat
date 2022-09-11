import { Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import Header from '../Layouts/Header'

export default function CxontactUs() {
  const [phone, setphone] = useState('')
  return (
    <Header>
      <div className='lg:mt-40 mt-10 pb-40 relative w-full'>
        <div className='flex justify-center flex-col bg-white dark:bg-blacker dark:border-gray-700 rounded-[25px] px-6 items-start w-4/6 mx-auto'>
          <div className='pt-6 text-xl sans-bolish'>تماس با ما</div>
          <div className='grid grid-cols-2 w-full gap-6 pt-10 pb-8 place-content-center'>
            {/* Username */}
            <div className="relative w-full">
              <div className="relative w-full">
                <input autoComplete={'off'} type="tel" id="phone"
                  value={phone}
                  placeholder={'شماره تلفن'}
                  onChange={(e) => setphone(e.target.value)}
                  maxLength={13}
                  className={`dark:bg-[#1D1D1D] w-full placeholder:opacity-0 focus:placeholder:opacity-100 bg-[#F1F3F6] border-none font-medium text-[#707578] bg-transparent focus:outline-none peer-focus:bg-transparent text-sm px-6 focus:bg-gray-100 dark:focus:bg-[#0D0D0D] placeholder:text-[#707578] dark:text-[#A7A7A7] outline-none  relative rounded-[16px] py-[22px] h-[56px] flex items-center peer`} />
                <label htmlFor="phone" className={`absolute lowercase peer-focus:opacity-0 font-normal text-sm peer-focus:text-xs mx-4 ml-12 transition-all  peer-focus:mx-3 text-[#A7A7A7] dark:text-gray-400 duration-200 transform -translate-y-4 top-2 z-10 origin-[0] peer-focus:bg-white dark:peer-focus:bg-[#0D0D0D]  px-3  peer-focus:text-[#0065FD] peer-focus:dark:text-[#0065FD] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 peer-focus:font-medium `}>
                  شماره تلفن
                </label>
              </div>
            </div>
            {/*  Email */}
            <div className="relative w-full">
              <div className="relative w-full">
                <input autoComplete={'off'} type="tel" id="email"
                  value={phone}
                  placeholder={'آدرس ایمیل'}
                  onChange={(e) => setphone(e.target.value)}
                  maxLength={13}
                  className={`dark:bg-[#1D1D1D] w-full placeholder:opacity-0 focus:placeholder:opacity-100 bg-[#F1F3F6] border-none peer-focus:border font-medium text-[#707578] bg-transparent focus:outline-none peer-focus:bg-transparent text-sm px-6 focus:bg-gray-100 dark:focus:bg-[#0D0D0D] placeholder:text-[#707578] dark:text-[#A7A7A7] outline-none  relative rounded-[16px] py-[22px] h-[56px] flex items-center peer`} />
                <label htmlFor="email" className={`absolute lowercase peer-focus:opacity-0 font-normal text-sm peer-focus:text-xs mx-4 ml-12 transition-all  peer-focus:mx-3 text-[#A7A7A7] dark:text-gray-400 duration-200 transform -translate-y-4 top-2 z-10 origin-[0] peer-focus:bg-white dark:peer-focus:bg-[#0D0D0D]  px-3  peer-focus:text-[#0065FD] peer-focus:dark:text-[#0065FD] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2  peer-focus:-translate-y-4 peer-focus:font-medium `}>
                  آدرس ایمیل
                </label>
              </div>
            </div>
            {/* Description */}
            <div className="relative w-full col-span-2">
              <div className="relative w-full">
                <textarea id="desc" rows={8} placeholder={'نظرات و انتقادات خود را با ما درمیان بگذارید...'} className='dark:bg-[#1D1D1D] w-full placeholder:opacity-0 focus:placeholder:opacity-100 bg-[#F1F3F6] border-none peer-focus:border font-medium text-[#707578] bg-transparent focus:outline-none peer-focus:bg-transparent text-sm px-6 focus:bg-gray-100 dark:focus:bg-[#0D0D0D] placeholder:text-[#707578] dark:text-[#A7A7A7] outline-none  relative rounded-[16px] py-5 flex items-center peer'></textarea>
                <label htmlFor="desc" className={`absolute lowercase peer-focus:opacity-0 font-normal text-sm peer-focus:text-xs mx-4 ml-12 transition-all  peer-focus:mx-3 text-[#A7A7A7] dark:text-gray-400 duration-200 transform -translate-y-4 top-2 z-10 origin-[0] peer-focus:bg-white dark:peer-focus:bg-[#0D0D0D]  px-3  peer-focus:text-[#0065FD] peer-focus:dark:text-[#0065FD] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:font-medium `}>
                  نظرات و انتقادات خود را با ما درمیان بگذارید...
                </label>
              </div>
            </div>
            <button dir='rtl' className='bg-primary col-span-2 py-2 px-4 font-thin h-14 rounded-xl flex justify-center items-center'>
              <span className='text-white font-normal'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#F1F2F6"
                    d="M17.688 15.49l-8.379 4.28c-5.628 2.88-7.938.52-5.12-5.23l.852-1.741a1.854 1.854 0 000-1.61l-.851-1.73c-2.82-5.75-.52-8.11 5.119-5.23l8.379 4.28c3.759 1.921 3.759 5.061 0 6.981zm-3.162-4.24H9.24a.726.726 0 00-.519.22.758.758 0 000 1.06c.138.141.325.22.52.22h5.285a.726.726 0 00.52-.22.758.758 0 000-1.06.726.726 0 00-.52-.22z"
                  ></path>
                </svg>
              </span>
              <span className='text-white font-medium mx-2'>ارسال</span>
            </button>
          </div>
        </div>
      </div>
    </Header>
  )
}
