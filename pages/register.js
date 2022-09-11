import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'
import Header from '../Layouts/Header';

export default function Register() {
    const [step, setstep] = useState(1);
    const [showPass, setshowPass] = useState('password');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [value, onChange] = useState('');
    return (
        <Header title={'ورود به حساب کاربری - مگاوات'}>
            <div className='auth-page'>
                <div className='auth-box'>
                    <h1 className='text-center my-2 text-xl sans-bold sans-bolisher text-blacker dark:text-textdark' title="Login">
                        ثبت نام در مگاوات
                    </h1>
                    <div autoComplete="off" className='mt-5 mb-3 w-full flex flex-col space-y-4'>
                        <div></div>
                        <>
                            <div className='relative block w-full'>
                                <input onChange={(e) => setusername(e.target.value)} className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                    type={'tel'} maxLength={11} placeholder="نام نام خانوادگی" />
                            </div>
                            <div className='relative block w-full'>
                                <input onChange={(e) => setusername(e.target.value)} className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                    type={'tel'} maxLength={11} placeholder="نام کاربری در مگاوات" />
                            </div>
                            <div className='relative block w-full'>
                                <input onChange={(e) => setusername(e.target.value)} className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                    type={'tel'} maxLength={11} placeholder="شماره موبایل" />
                            </div>
                        </>
                        <>
                            <div className='relative block w-full mt-3'>
                                <input onChange={(e) => setpassword(e.target.value)} className='text-sm sans-bolish placeholder:text-black dark:border-secondery rounded-xl py-4 px-6 bg-transparent border w-full border-gray-300 focus:outline-none focus:border-gray-400 transition duration-150'
                                    type={'password'} placeholder="رمز عبور" />
                            </div>
                        </>
                        <div className='mt-16 flex flex-col items-center justify-center w-full'>
                            <button type='button' onClick={() => { }} disabled={username.length === 11 ? false : true}
                                className='btn py-4 bg-primary px-3 flex text-sm sans-bolish justify-center text-center items-center w-full rounded-xl text-white'>
                                ثبت نام در مگاوات
                            </button>

                            {/* <div className="mt-4 grid space-y-4 w-full">
                                <button className="social-box hover:bg-primary text-gray-700  hover:text-white">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                    <div></div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 mr-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#EA4335"
                                                d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"
                                            ></path>
                                            <path
                                                fill="#34A853"
                                                d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
                                            ></path>
                                            <path
                                                fill="#4A90E2"
                                                d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"
                                            ></path>
                                            <path
                                                fill="#FBBC05"
                                                d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
                                            ></path>
                                        </svg>
                                        <span className="text-social-box sans-bolish">ورود با حساب گوگل</span>
                                    </div>
                                </button>
                            </div> */}
                            <Link href="/login" className='cursor-pointer'>
                                <div className='flex justify-center items-center w-full mt-6 mb-2'>
                                    <span className='text-sm sans-bolish tracking-tight text-primary'>ورود به حساب کاربری </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <>
                <button type='button' onClick={() => setstep(1)}>
                  <div className='flex items-center w-full text-blue-500'>
                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M2.74976 12C2.74976 5.063 5.06276 2.75 11.9998 2.75C18.9368 2.75 21.2498 5.063 21.2498 12C21.2498 18.937 18.9368 21.25 11.9998 21.25C5.06276 21.25 2.74976 18.937 2.74976 12Z" stroke="CurrentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.9998 8.10498V12" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.9955 15.5H12.0045" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className='text-xs mr-2 sans-bolish tracking-tight'>ویرایش شماره موبایل؟</span>
                  </div>
                </button>
              </> */}

                </div>
            </div>
        </Header>
    )
}
