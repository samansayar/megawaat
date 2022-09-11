import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import ThemeToggle from './ThemeToggle';

export default function MenuMobile() {
    const [menu, setmenu] = useState(1000);
    const togglemenu = () => {
        menu === 0 ? setmenu(1000) : setmenu(0);
    };
    const tools = {
        navlinkmobile: "text-white font-medium text-2xl py-3 duration-150 px-6 rounded-full",
    };
    const router = useRouter();
    const togglenav = (link) => {
        router.push(link);
        togglemenu();
    }
    return (
        <div className='z-50 relative'>
            <div className='lg:hidden block absolute p-4 inset-0 h-16'>
                <div className='px-6 py-4 rounded-[20px] shadow-box-submenumobile bg-white dark:bg-brown flex justify-between items-center w-full'>
                    <button onClick={togglemenu}>
                        <svg className="w-9 h-9 rotate-180 text-blacker dark:text-textdark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    <div className='w-full flex dark:text-textdark text-primary font-extrabold text-xl justify-center items-center'>
                        MegaWaat
                    </div>
                    <div className='bg-[#435f8933] flex justify-center rounded-full items-center'>
                        <Image src='/images/avatar.jpeg' width={'54px'} height={'54px'} alt='image' className="object-cover rounded-full" />
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ x: [-1000, 100] }}
                animate={{ x: menu }}
                transition={
                    {
                        duration: .4,
                        type: 'spring'
                    }
                }
                className="z-50 fixed lg:hidden block inset-0 backdrop-blur-[10px] w-full h-full"
            >
                <motion.div className="w-[75%] relative overflow-hidden dark:bg-brown bg-white h-full ">
                    <div className="px-6 py-3 w-full">
                        <div className='flex justify-between items-center w-full'>
                            <button onClick={togglemenu} className="z-50">
                                <svg
                                    className="z-50 let-10 top-4 w-10 h-10 p-2 bg-primary dark:text-textdark rounded-xl"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <Link href={'/login'}>
                                <button className='bg-primary py-2 px-4 font-thin h-10 rounded-xl text-sm flex justify-center items-center'>
                                    <span className='text-white font-normal mx-2'>ورود / ثبت نام</span>
                                </button>
                            </Link>
                        </div>
                        {/* Shape  */}
                        <div className="p-20 z-10 absolute -top-16 -right-16 rounded-full bg-primary/20 flex justify-start items-start blur-3xl"></div>
                        {/* Shape  */}

                        <div className='mt-12'>
                            <div className='w-full pb-6 text-gray-800 flex dark:text-textdark font-black text-2xl justify-center items-center'>
                                MegaWaat
                            </div>
                            {/* <hr /> */}
                            <div className='w-full mx-auto h-[1px] bg-gray-200 dark:bg-gray-600'></div>
                            <ul className="flex justify-center mt-6 flex-col capitalize items-center w-full text-2xl space-y-2 text-white">
                                <div className='p-2 rounded-[25px] w-full flex justify-start items-center'>
                                    <div>
                                        <div className='w-10 h-10 bg-gray-200 text-blacker dark:text-wither dark:bg-primary2 flex justify-center rounded-full items-center'>
                                            <ThemeToggle />
                                        </div>
                                    </div>
                                    <div className='text-sm mx-4 text-blacker dark:text-textdark sans-bolish'>
                                        تم تاریک
                                    </div>
                                </div>
                                <div className='p-2 rounded-[25px] w-full flex justify-start items-center'>
                                    <Link href="/">
                                        <>
                                            <div>
                                                <div className='w-10 h-10 bg-gray-200 text-blacker dark:text-wither dark:bg-primary2 flex justify-center rounded-full items-center'>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="22"
                                                        height="22"
                                                        className="dark:text-primary dark:group-hover:text-primary group-hover:text-primary"
                                                        fill="none"
                                                        viewBox="0 0 22 22">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M19.17 14.955l-.704-5.678c-.43-2.027-1.645-2.86-2.803-2.86H6.354c-1.175 0-2.43.775-2.795 2.86l-.713 5.678c-.583 4.17 1.564 5.212 4.367 5.212h7.599c2.795 0 4.877-1.51 4.359-5.212zM8.34 11.136a.822.822 0 01-.81-.834c0-.46.363-.833.81-.833.447 0 .81.373.81.833 0 .46-.363.834-.81.834zm4.496-.834c0 .46.363.834.81.834.448 0 .81-.373.81-.834a.822.822 0 00-.81-.833.822.822 0 00-.81.833z"
                                                            className="fill-current text-biscay-700 dark:text-gray-200 group-hover:text-biscay-300"
                                                            clipRule="evenodd"
                                                        ></path>
                                                        <path
                                                            d="M15.56 6.21a.46.46 0 01-.04.207h-1.318a.595.595 0 01-.04-.207 3.188 3.188 0 00-3.193-3.183A3.188 3.188 0 007.775 6.21a.594.594 0 010 .207h-1.35a.595.595 0 010-.207 4.576 4.576 0 014.58-4.377 4.576 4.576 0 014.578 4.377h-.024z"
                                                            className="fill-current text-biscay-700 dark:text-gray-200 group-hover:text-biscay-300"
                                                            opacity="0.4"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='text-sm mx-4 text-blacker dark:text-textdark sans-bolish'>
                                                سبد خرید
                                            </div>
                                        </>
                                    </Link>
                                </div>
                                <div className='p-2 rounded-[25px] w-full flex justify-start items-center'>
                                    <Link href="/">
                                        <>
                                            <div>
                                                <div className='w-10 h-10 bg-gray-200 text-blacker dark:text-wither dark:bg-primary2 flex justify-center rounded-full items-center'>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="17"
                                                        fill="none"
                                                        className="dark:text-primary dark:group-hover:text-primary group-hover:text-primary"
                                                        viewBox="0 0 14 17"
                                                    >
                                                        <path
                                                            d="M13.301 8.503c-.592-.692-.861-1.292-.861-2.31v-.347c0-1.327-.306-2.182-.97-3.037C10.446 1.48 8.723.679 7.036.679h-.072c-1.652 0-3.32.765-4.362 2.039-.7.872-1.042 1.764-1.042 3.128v.347C1.56 7.21 1.31 7.81.7 8.503c-.45.51-.593 1.165-.593 1.874 0 .71.233 1.382.7 1.928a3.676 3.676 0 002.353 1.146c1.274.146 2.548.2 3.841.2 1.293 0 2.567-.091 3.842-.2a3.676 3.676 0 002.351-1.146c.467-.546.7-1.219.7-1.928 0-.71-.143-1.365-.592-1.874"
                                                            className="text-blacker dark:text-wither fill-current"
                                                        ></path>
                                                        <path
                                                            d="M8.63 14.653c-.406-.087-2.877-.087-3.282 0-.347.08-.722.266-.722.675.02.39.248.733.564.951v.001a2.95 2.95 0 001.39.594c.268.037.54.035.817 0a2.95 2.95 0 001.39-.594c.315-.219.543-.563.564-.952 0-.409-.375-.595-.722-.675"
                                                            className="text-blacker dark:text-wither fill-current"
                                                            opacity="0.4"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className='text-sm mx-4 text-blacker dark:text-textdark sans-bolish'>
                                                اعلانات
                                            </div>
                                        </>
                                    </Link>
                                </div>
                                {/* <hr /> */}
                                <div className='w-full border-t py-2 translate-y-2 border-gray-200 dark:border-gray-600'></div>
                                <div className='p-2 rounded-[25px] w-full mr-5 flex justify-start items-center'>
                                    <button onClick={() => togglenav('/')} className='flex justify-center items-center'>

                                            <div>
                                                <div className=' text-gray-600 dark:text-wither flex justify-center rounded-full items-center'>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24.028"
                                                        className=""
                                                        height="23.829"
                                                        viewBox="0 0 24.028 23.829"
                                                    >
                                                        <path
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M7.04 22.821l10 .007-11-.123a5.863 5.863 0 01-3.018-1.049 3.894 3.894 0 01-1.272-2.348 30.521 30.521 0 01-.513-10 1.838 1.838 0 01.128-.181 8.216 8.216 0 01.675-.736c.6-.6 1.445-1.33 2.4-2.124 1.923-1.576 4.244-3.344 5.937-4.604a2.869 2.869 0 013.427-.008c1.706 1.259 4.048 3.025 5.967 4.61.962.795 1.8 1.529 2.394 2.123a7.282 7.282 0 01.653.725c.048.064.079.111.1.144a38.532 38.532 0 01-.5 10.072 3.707 3.707 0 01-1.244 2.334 5.939 5.939 0 01-3.039 1.042q-.547.068-1.089.125v-6.625a3.147 3.147 0 00-3-3H10.04a3.147 3.147 0 00-3 3v6.575l-1.3-.111zM1.22 9.344v-.006zm21.72-.042v-.007z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <Link href={'/'}>
                                                <p className='text-sm mx-4 mt-1 text-blacker dark:text-textdark font-normal'>مگاوات</p>
                                            </Link>
                                        
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
